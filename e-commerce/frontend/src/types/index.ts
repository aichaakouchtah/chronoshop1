// Types mis à jour pour refléter votre structure de BDD Laravel

export interface Admin {
  id_admin: number;
  nom_admin: string;
  email: string;
  created_at?: string;
  updated_at?: string;
}

export interface Produit {
  id_produit: number;
  nom: string;
  prix_ancien: number;
  prix_actuel: number;
  description: string;
  stock: number;
  id_admin: number;
  created_at?: string;
  updated_at?: string;
  images?: Image[];
  categorie?: Categorie[];
  admin?: Admin;
}

export interface Image {
  id_image: number;
  nom_image: string;
  url_image: string;
  is_principale: boolean;
  id_produit: number;
  created_at?: string;
  updated_at?: string;
}

export interface Categorie {
  id_categorie: number;
  nom_categorie: string;
  description: string;
  icon: string;
  created_at?: string;
  updated_at?: string;
}

export interface Commande {
  id_commande?: number;
  nom_client: string;
  phone: string;
  adress: string;
  date_commande?: string;
  statue: 'en attente' | 'confirmée' | 'livrée' | 'annulée';
  id_produit: number;
  quantite: number;
  id_admin?: number;
  note?: string;
  methode_contact?: 'whatsapp' | 'telephone_apple' | 'sms';
  type_telephone?: string;
  produit?: Produit;
}

export interface Contact {
  id_contact?: number;
  nom_contact: string;
  email: string;
  sujet: string;
  message: string;
  date?: string;
  statut: 'non_lu' | 'lu' | 'traité';
  id_admin?: number;
}

export interface Favori {
  id_favori?: number;
  id_produit: number;
  session_id: string;
  date_ajout?: string;
  produit?: Produit;
}

export interface ParametresSite {
  id: number;
  nom_site: string;
  logo: string;
  description: string;
  email_contact: string;
  telephone: string;
  adresse: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
  conditions_utilisation?: string;
  politique_confidentialite?: string;
  created_at?: string;
  updated_at?: string;
}