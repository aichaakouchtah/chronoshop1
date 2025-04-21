import { useState, FormEvent } from 'react';
import { Produit, Commande } from '../types';
import { api } from '../services/api';

interface CommandeFormProps {
  produit: Produit;
  onSuccess?: (commande: Commande) => void;
  onError?: (error: Error) => void;
}

export function CommandeForm({ produit, onSuccess, onError }: CommandeFormProps) {
  const [formData, setFormData] = useState({
    nom_client: '',
    phone: '',
    adress: '',
    quantite: 1,
    methode_contact: 'whatsapp',
    type_telephone: '',
    note: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuantityChange = (increment: number) => {
    setFormData(prev => ({
      ...prev,
      quantite: Math.max(1, prev.quantite + increment)
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const commandeData: Omit<Commande, 'id_commande'> = {
        nom_client: formData.nom_client,
        phone: formData.phone,
        adress: formData.adress,
        statue: 'en attente',
        id_produit: produit.id_produit,
        quantite: formData.quantite,
        note: formData.note,
        methode_contact: formData.methode_contact as 'whatsapp' | 'telephone_apple' | 'sms',
        type_telephone: formData.type_telephone
      };

      const commande = await api.creerCommande(commandeData);
      
      setSuccess(true);
      setFormData({
        nom_client: '',
        phone: '',
        adress: '',
        quantite: 1,
        methode_contact: 'whatsapp',
        type_telephone: '',
        note: ''
      });
      
      if (onSuccess) {
        onSuccess(commande);
      }

    } catch (err) {
      const error = err as Error;
      setError(error.message || 'Une erreur est survenue lors de la création de la commande.');
      if (onError) {
        onError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-right">Commander maintenant</h2>
      
      {success ? (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <p className="text-green-700">
            Votre commande a été soumise avec succès! Nous vous contacterons bientôt pour la confirmation.
          </p>
          <button 
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            onClick={() => setSuccess(false)}
          >
            Passer une autre commande
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-right">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          
          <div>
            <label className="block mb-1 font-medium">Nom complet</label>
            <input
              type="text"
              name="nom_client"
              value={formData.nom_client}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Numéro de téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Adresse de livraison</label>
            <input
              type="text"
              name="adress"
              value={formData.adress}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Quantité</label>
            <div className="flex items-center">
              <button 
                type="button"
                onClick={() => handleQuantityChange(-1)}
                className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300 transition-colors"
                disabled={formData.quantite <= 1}
              >
                -
              </button>
              <input
                type="number"
                name="quantite"
                value={formData.quantite}
                onChange={handleChange}
                className="w-16 text-center border-t border-b"
                min="1"
                readOnly
              />
              <button 
                type="button"
                onClick={() => handleQuantityChange(1)}
                className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300 transition-colors"
              >
                +
              </button>
            </div>
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Méthode de contact préférée</label>
            <select
              name="methode_contact"
              value={formData.methode_contact}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="telephone_apple">Téléphone Apple</option>
              <option value="sms">SMS</option>
            </select>
          </div>
          
          {formData.methode_contact === 'telephone_apple' && (
            <div>
              <label className="block mb-1 font-medium">Modèle de téléphone Apple</label>
              <select
                name="type_telephone"
                value={formData.type_telephone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required={formData.methode_contact === 'telephone_apple'}
              >
                <option value="">Sélectionnez un modèle</option>
                <option value="iphone15">iPhone 15</option>
                <option value="iphone14">iPhone 14</option>
                <option value="iphone13">iPhone 13</option>
                <option value="iphone12">iPhone 12</option>
                <option value="iphoneSE">iPhone SE</option>
                <option value="autre">Autre modèle</option>
              </select>
            </div>
          )}
          
          <div>
            <label className="block mb-1 font-medium">Notes supplémentaires (optionnel)</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              rows={3}
            ></textarea>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="font-bold text-xl">
              Total: {(produit.prix_actuel * formData.quantite).toFixed(2)} MAD
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors disabled:bg-gray-400"
            >
              {loading ? 'Traitement...' : 'Commander maintenant'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}