import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Produit, Image } from '../types';
import { api } from '../services/api';
import { CommandeForm } from '../components/CommandeForm';
import { Heart, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [produit, setProduit] = useState<Produit | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    const fetchProduit = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await api.getProduit(parseInt(id));
        setProduit(data);
        
        // Définir l'image sélectionnée par défaut (image principale ou première image)
        if (data.images && data.images.length > 0) {
          const mainImage = data.images.find(img => img.is_principale);
          setSelectedImage(mainImage || data.images[0]);
        }
        
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement du produit:', err);
        setError('Impossible de charger les détails du produit. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduit();
  }, [id]);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleFavoriteClick = async () => {
    if (!produit) return;
    
    try {
      // Générer un ID de session s'il n'existe pas
      const sessionId = localStorage.getItem('session_id') || 
        `session_${Math.random().toString(36).substring(2, 9)}`;
      
      if (!localStorage.getItem('session_id')) {
        localStorage.setItem('session_id', sessionId);
      }
      
      // Ajouter aux favoris via l'API
      await api.ajouterFavori({
        id_produit: produit.id_produit,
        session_id: sessionId
      });
      
      setIsFavorite(true);
    } catch (error) {
      console.error('Erreur lors de l\'ajout aux favoris:', error);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="flex justify-center items-center space-x-2">
          <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        <p className="text-gray-600 mt-4">Chargement du produit...</p>
      </div>
    );
  }

  if (error || !produit) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p className="text-red-700">{error || 'Produit non trouvé'}</p>
          <Link to="/" className="mt-4 inline-flex items-center text-red-600 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Retour à la page d'accueil
          </Link>
        </div>
      </div>
    );
  }

  const remise = produit.prix_ancien > produit.prix_actuel
    ? Math.round(((produit.prix_ancien - produit.prix_actuel) / produit.prix_ancien) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-red-600">
          <ArrowLeft className="w-4 h-4 mr-1" /> Retour à la page d'accueil
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section images */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={selectedImage?.url_image || produit.images?.[0]?.url_image || 'https://via.placeholder.com/600x400'} 
              alt={produit.nom}
              className="w-full h-96 object-cover object-center"
            />
          </div>
          
          {produit.images && produit.images.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {produit.images.map((image) => (
                <div 
                  key={image.id_image}
                  className={`w-20 h-20 rounded overflow-hidden cursor-pointer border-2 ${selectedImage?.id_image === image.id_image ? 'border-red-600' : 'border-transparent'}`}
                  onClick={() => handleImageClick(image)}
                >
                  <img 
                    src={image.url_image} 
                    alt={image.nom_image} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Section informations produit */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 text-right">{produit.nom}</h1>
              {produit.categorie && (
                <div className="text-sm text-gray-500 text-right mt-1">
                  {produit.categorie.map(cat => cat.nom_categorie).join(', ')}
                </div>
              )}
            </div>
            <button 
              onClick={handleFavoriteClick}
              className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${isFavorite ? 'text-red-600' : 'text-gray-400'}`}
            >
              <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-600' : ''}`} />
            </button>
          </div>
          
          <div className="flex justify-end items-baseline text-right">
            <span className="text-2xl font-bold text-red-600 ml-2">{produit.prix_actuel.toFixed(2)} MAD</span>
            {remise > 0 && (
              <>
                <span className="text-lg text-gray-500 line-through ml-2">{produit.prix_ancien.toFixed(2)} MAD</span>
                <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-md">-{remise}%</span>
              </>
            )}
          </div>
          
          <div className="text-right">
            <div className={`inline-flex items-center px-3 py-1 text-sm rounded-full ${produit.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {produit.stock > 0 ? `En stock (${produit.stock})` : 'Rupture de stock'}
            </div>
          </div>
          
          <div className="border-t border-b border-gray-200 py-4">
            <button 
              className="flex justify-between items-center w-full text-right"
              onClick={() => setShowDescription(!showDescription)}
            >
              <span className="text-lg font-semibold text-gray-900">Description</span>
              {showDescription ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {showDescription && (
              <div className="mt-4 text-gray-700 text-right space-y-2">
                <p>{produit.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Formulaire de commande */}
      <div className="mt-12">
        <CommandeForm 
          produit={produit}
          onSuccess={() => {
            // Afficher confirmation ou rediriger
          }}
        />
      </div>

      {/* Section produits similaires ou complémentaires - à implémenter */}
    </div>
  );
}