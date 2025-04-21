import { useEffect, useState } from 'react';
import { Produit } from '../types';
import { api } from '../services/api';
import { ProductSwiper } from '../components/ProductSwiper';
import { FeatureBar } from '../components/FeatureBar';
import { HeroCarousel } from '../components/HeroCarousel';
import { demoProduits } from '../data/demoProducts';

export function Home() {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favoriteAdded, setFavoriteAdded] = useState<number | null>(null);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        setLoading(true);
        const data = await api.getProduits();
        setProduits(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement des produits:', err);
        setError('Impossible de charger les produits. Veuillez réessayer plus tard.');
        // Utiliser les produits de démo en cas d'erreur
        setProduits(demoProduits);
      } finally {
        setLoading(false);
      }
    };

    fetchProduits();
  }, []);

  const handleAddToFavorite = (produitId: number) => {
    setFavoriteAdded(produitId);
    // Afficher une notification ici si souhaité
    setTimeout(() => setFavoriteAdded(null), 3000);
  };

  // Filtrer les produits en fonction des catégories ou propriétés
  const nouveauxProduits = produits.sort((a, b) => {
    const dateA = new Date(a.created_at || 0);
    const dateB = new Date(b.created_at || 0);
    return dateB.getTime() - dateA.getTime();
  }).slice(0, 6);

  const produitsEnPromotion = produits.filter(p => 
    p.prix_ancien > p.prix_actuel && ((p.prix_ancien - p.prix_actuel) / p.prix_ancien) >= 0.2
  );

  return (
    <div className="bg-gray-50">
      {/* Hero Carousel */}
      <HeroCarousel />

      <FeatureBar />

      {favoriteAdded && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-md shadow-lg z-50 animate-fade-in">
          Produit ajouté aux favoris!
        </div>
      )}

      {error && (
        <div className="max-w-7xl mx-auto px-4 py-3 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {loading ? (
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-gray-600 mt-4">Chargement des produits...</p>
        </div>
      ) : (
        <>
          {/* Produits en vedette */}
          <ProductSwiper 
            produits={produitsEnPromotion.length > 0 ? produitsEnPromotion : produits} 
            title="Offres spéciales sous forme de pack"
            onAddToFavorite={handleAddToFavorite}
          />

          {/* Nouveaux produits */}
          <ProductSwiper 
            produits={nouveauxProduits} 
            title="Nouveaux produits"
            onAddToFavorite={handleAddToFavorite}
          />
          
          {/* Meilleures ventes - Simulations pour la démo */}
          <ProductSwiper 
            produits={[...produits].sort(() => Math.random() - 0.5).slice(0, 6)} 
            title="Meilleures ventes"
            onAddToFavorite={handleAddToFavorite}
          />
        </>
      )}
    </div>
  );
}