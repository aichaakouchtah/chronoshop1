import { Produit, Commande, Favori, Contact } from "../types";
import { demoProduits } from '../data/demoProducts';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const api = {
  // ==== Produits ====
  async getProduits(): Promise<Produit[]> {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des produits');
      }
      return response.json();
    } catch (error) {
      console.error('Erreur API getProduits:', error);
      // Retourner les produits de démonstration directement
      return demoProduits;
    }
  },
  
  async getProduitsByCategorie(categorieId: number): Promise<Produit[]> {
    try {
      const response = await fetch(`${API_URL}/categories/${categorieId}/products`);
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des produits de la catégorie ${categorieId}`);
      }
      return response.json();
    } catch (error) {
      console.error('Erreur API getProduitsByCategorie:', error);
      // Filtrer les produits par catégorie si nécessaire
      return [];
    }
  },

  async getProduit(id: number): Promise<Produit> {
    try {
      const response = await fetch(`${API_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération du produit ${id}`);
      }
      return response.json();
    } catch (error) {
      console.error(`Erreur API getProduit(${id}):`, error);
      // Trouver le produit dans les données de démo
      const produit = demoProduits.find(p => p.id_produit === id);
      if (produit) return produit;
      throw error;
    }
  },

  async rechercherProduits(query: string): Promise<Produit[]> {
    try {
      const response = await fetch(`${API_URL}/products?search=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la recherche des produits');
      }
      return response.json();
    } catch (error) {
      console.error('Erreur API rechercherProduits:', error);
      // Filtrer les produits de démo par la requête
      return demoProduits.filter(p => 
        p.nom.toLowerCase().includes(query.toLowerCase()) || 
        p.description.toLowerCase().includes(query.toLowerCase())
      );
    }
  },

  // ==== Commandes ====
  async creerCommande(commande: Omit<Commande, 'id_commande'>): Promise<Commande> {
    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commande),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la création de la commande');
      }
      return response.json();
    } catch (error) {
      console.error('Erreur API creerCommande:', error);
      throw error;
    }
  },

  // ==== Favoris ====
  async getFavoris(sessionId: string): Promise<Favori[]> {
    try {
      const response = await fetch(`${API_URL}/favoris?session_id=${sessionId}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des favoris');
      }
      return response.json();
    } catch (error) {
      console.error('Erreur API getFavoris:', error);
      return [];
    }
  },

  async ajouterFavori(favori: Omit<Favori, 'id_favori' | 'date_ajout'>): Promise<Favori> {
    try {
      const response = await fetch(`${API_URL}/favoris`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(favori),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout au favori');
      }
      return response.json();
    } catch (error) {
      console.error('Erreur API ajouterFavori:', error);
      throw error;
    }
  },

  async supprimerFavori(id: number): Promise<void> {
    try {
      const response = await fetch(`${API_URL}/favoris/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du favori');
      }
    } catch (error) {
      console.error('Erreur API supprimerFavori:', error);
      throw error;
    }
  },
  
  // ==== Contact ====
  async envoyerContact(contact: Omit<Contact, 'id_contact' | 'date' | 'statut'>): Promise<Contact> {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...contact, statut: 'non_lu'}),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message de contact');
      }
      return response.json();
    } catch (error) {
      console.error('Erreur API envoyerContact:', error);
      throw error;
    }
  },
  
  // ==== Paramètres du site ====
  async getParametresSite() {
    try {
      const response = await fetch(`${API_URL}/parametres`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des paramètres du site');
      }
      return response.json();
    } catch (error) {
      console.error('Erreur API getParametresSite:', error);
      // Retourner des valeurs par défaut
      return {
        nom_site: 'ChronoShop',
        logo: '/src/assets/logo.svg',
        description: 'Votre boutique préférée de produits naturels',
        email_contact: 'contact@chronoshop.com',
        telephone: '0670291481',
        adresse: '123 Rue du Commerce, Casablanca'
      };
    }
  }
};