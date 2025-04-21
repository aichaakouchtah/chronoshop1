import { useState } from 'react';
import { Produit } from '../types';
import { Heart } from 'lucide-react';
import { api } from '../services/api';

interface ProductCardProps {
  produit: Produit;
  onAddToFavorite?: (produitId: number) => void;
}

export function ProductCard({ produit, onAddToFavorite }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Obtenir l'image principale ou la première image
  const getMainImage = () => {
    if (produit.images && produit.images.length > 0) {
      const mainImage = produit.images.find(img => img.is_principale);
      return mainImage ? mainImage.url_image : produit.images[0].url_image;
    }
    // Image par défaut si aucune image n'est disponible
    return 'https://via.placeholder.com/300';
  };

  const handleFavoriteClick = async () => {
    if (!onAddToFavorite) return;
    
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
      onAddToFavorite(produit.id_produit);
    } catch (error) {
      console.error('Erreur lors de l\'ajout aux favoris:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in">
      <div className="relative overflow-hidden">
        <img 
          src={getMainImage()} 
          alt={produit.nom}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 animate-slide-in"
        />
        <div className="absolute top-2 right-2">
          <Heart 
            className={`h-6 w-6 cursor-pointer transition-all duration-500 transform hover:scale-125 animate-bounce-in ${isFavorite ? 'text-red-600 fill-red-600' : 'text-gray-600'}`} 
            onClick={handleFavoriteClick}
          />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-left">{produit.nom}</h3>
        <p className="mt-1 text-gray-600 text-sm text-left line-clamp-2">{produit.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-600 font-bold">{produit.stock > 0 ? 'Disponible' : 'Non disponible'}</span>
          <div className="text-left">
            <span className="text-lg font-bold text-red-600 block">{produit.prix_actuel.toFixed(2)} MAD</span>
            {produit.prix_ancien > produit.prix_actuel && (
              <span className="text-sm text-gray-500 line-through">{produit.prix_ancien.toFixed(2)} MAD</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}