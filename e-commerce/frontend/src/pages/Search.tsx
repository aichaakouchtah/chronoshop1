import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Produit } from '../types';
import { api } from '../services/api';
import { ProductCard } from '../components/ProductCard';
import { demoProduits } from '../data/demoProducts';

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [products, setProducts] = useState<Produit[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Produit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Récupérer tous les produits
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await api.getProduits();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement des produits:', err);
        setError('Impossible de charger les produits. Veuillez réessayer plus tard.');
        // Utiliser les produits de démo en cas d'erreur
        setProducts(demoProduits);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtrer les produits en fonction de la requête de recherche
  useEffect(() => {
    if (query) {
      const normalizedQuery = query.toLowerCase();
      const results = products.filter(product => 
        product.nom.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-left">Résultats de recherche : {query}</h1>
      
      {loading ? (
        <div className="text-left py-8">
          <p className="text-gray-600">Chargement des produits en cours...</p>
        </div>
      ) : error ? (
        <div className="text-left py-8">
          <p className="text-red-600">{error}</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-left py-8">
          <p className="text-gray-600">Aucun produit ne correspond à votre recherche.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(produit => (
            <ProductCard key={id_produit} produit={produit} />
          ))}
        </div>
      )}
    </div>
  );
}