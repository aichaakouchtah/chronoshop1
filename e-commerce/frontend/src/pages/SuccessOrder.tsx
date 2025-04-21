import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Commande } from '../types';
import { api } from '../services/api';
import { CheckCircle, ArrowRight, Phone, MessageSquare } from 'lucide-react';

const SuccessOrder = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [commande, setCommande] = useState<Commande | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Note: Dans une version réelle, vous auriez besoin d'une API pour récupérer les détails de la commande
  // Ceci est une simulation pour la démonstration
  useEffect(() => {
    const simulateOrderFetch = () => {
      // Simulation de chargement
      setLoading(true);
      
      setTimeout(() => {
        if (id) {
          // Commande simulée
          setCommande({
            id_commande: parseInt(id),
            nom_client: 'Client Simulé',
            phone: '0600000000',
            adress: 'Adresse de livraison simulée',
            date_commande: new Date().toISOString(),
            statue: 'en attente',
            id_produit: 1,
            quantite: 1,
            methode_contact: 'telephone_apple',
            note: 'Commande de test'
          });
          setLoading(false);
        } else {
          setError('Numéro de commande invalide');
          setLoading(false);
        }
      }, 1500);
    };

    simulateOrderFetch();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        <p className="text-gray-600">Chargement des détails de votre commande...</p>
      </div>
    );
  }

  if (error || !commande) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700">{error || "Impossible de récupérer les détails de votre commande"}</p>
        </div>
        <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700">
          <ArrowRight className="mr-2 h-5 w-5" /> Retour à la page d'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-right">
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">تم تقديم طلبك بنجاح!</h1>
          <p className="text-gray-600 text-lg">نحن سعيدون جدا باهتمامك إلينا وثقتك بمنتجاتنا</p>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">تفاصيل الطلب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-r border-gray-200 pr-4">
              <p className="text-gray-600 mb-1">رقم الطلب:</p>
              <p className="font-semibold">{commande.id_commande}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">التاريخ:</p>
              <p className="font-semibold">
                {new Date(commande.date_commande || "").toLocaleDateString('ar-MA')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">معلومات التواصل</h2>
          <div className="mb-4">
            <p className="text-gray-600 mb-1">الاسم الكامل:</p>
            <p className="font-semibold">{commande.nom_client}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 mb-1">رقم الهاتف:</p>
            <p className="font-semibold">{commande.phone}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">العنوان:</p>
            <p className="font-semibold">{commande.adress}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">الخطوات التالية</h2>
          <div className="bg-red-50 p-4 rounded-md mb-4">
            <p className="font-medium text-red-700 flex items-center justify-end">
              {commande.methode_contact === 'telephone_apple' ? (
                <>
                  <Phone className="ml-2 h-5 w-5" />
                  سوف نتصل بك قريبًا على التلفون آبل لتأكيد طلبك
                </>
              ) : commande.methode_contact === 'whatsapp' ? (
                <>
                  <MessageSquare className="ml-2 h-5 w-5" />
                  سنرسل لك رسالة على واتساب لتأكيد طلبك
                </>
              ) : (
                <>
                  <MessageSquare className="ml-2 h-5 w-5" />
                  سنرسل لك رسالة نصية لتأكيد طلبك
                </>
              )}
            </p>
          </div>
          <p className="text-gray-600">
            يرجى البقاء متاحًا للاتصال. سيتم إرسال تأكيد إضافي بالبريد الإلكتروني إذا قمت بتقديم عنوان بريد إلكتروني.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrder;