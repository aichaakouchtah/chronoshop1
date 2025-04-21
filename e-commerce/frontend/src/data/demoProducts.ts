import { Produit, Image, Categorie } from '../types';

// Catégories de démonstration
export const demoCategories: Categorie[] = [
  {
    id_categorie: 1,
    nom_categorie: 'Compléments alimentaires',
    description: 'Compléments pour renforcer votre santé',
    icon: 'pill',
    created_at: '2024-03-01T00:00:00.000Z',
    updated_at: '2024-03-01T00:00:00.000Z'
  },
  {
    id_categorie: 2,
    nom_categorie: 'Soins de la peau',
    description: 'Produits pour une peau rayonnante',
    icon: 'droplet',
    created_at: '2024-03-01T00:00:00.000Z',
    updated_at: '2024-03-01T00:00:00.000Z'
  },
  {
    id_categorie: 3,
    nom_categorie: 'Soins des cheveux',
    description: 'Solutions pour des cheveux sains',
    icon: 'scissors',
    created_at: '2024-03-01T00:00:00.000Z',
    updated_at: '2024-03-01T00:00:00.000Z'
  }
];

// Produits de démonstration
export const demoProduits: Produit[] = [
  {
    id_produit: 1,
    nom: "Pack Anti-Chute",
    description: "Kit complet de soins capillaires avec une formule naturelle pour lutter contre la chute des cheveux. Enrichi en vitamines et minéraux essentiels.",
    prix_ancien: 399.00,
    prix_actuel: 299.00,
    stock: 50,
    id_admin: 1,
    created_at: '2024-03-10T00:00:00.000Z',
    updated_at: '2024-03-10T00:00:00.000Z',
    images: [
      {
        id_image: 1,
        nom_image: 'pack-antichute-principal',
        url_image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=400&h=400",
        is_principale: true,
        id_produit: 1,
        created_at: '2024-03-10T00:00:00.000Z',
        updated_at: '2024-03-10T00:00:00.000Z'
      },
      {
        id_image: 2,
        nom_image: 'pack-antichute-secondaire',
        url_image: "https://images.unsplash.com/photo-1572210595644-aefc1c3a4a7f?auto=format&fit=crop&w=400&h=400",
        is_principale: false,
        id_produit: 1,
        created_at: '2024-03-10T00:00:00.000Z',
        updated_at: '2024-03-10T00:00:00.000Z'
      }
    ]
  },
  {
    id_produit: 2,
    nom: "Sérum Retinol",
    description: "Sérum anti-âge à base de rétinol pur, concentré pour réduire visiblement les rides et ridules. Parfait pour tous types de peau.",
    prix_ancien: 249.00,
    prix_actuel: 199.00,
    stock: 35,
    id_admin: 1,
    created_at: '2024-03-12T00:00:00.000Z',
    updated_at: '2024-03-12T00:00:00.000Z',
    images: [
      {
        id_image: 3,
        nom_image: 'serum-retinol-principal',
        url_image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&h=400",
        is_principale: true,
        id_produit: 2,
        created_at: '2024-03-12T00:00:00.000Z',
        updated_at: '2024-03-12T00:00:00.000Z'
      }
    ]
  },
  {
    id_produit: 3,
    nom: "Crème Hydratante",
    description: "Crème hydratante pour peau sèche, formule enrichie en huiles naturelles et en antioxydants. Hydrate en profondeur et répare la barrière cutanée.",
    prix_ancien: 199.00,
    prix_actuel: 149.00,
    stock: 80,
    id_admin: 1,
    created_at: '2024-03-15T00:00:00.000Z',
    updated_at: '2024-03-15T00:00:00.000Z',
    images: [
      {
        id_image: 4,
        nom_image: 'creme-hydratante-principal',
        url_image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=400&h=400",
        is_principale: true,
        id_produit: 3,
        created_at: '2024-03-15T00:00:00.000Z',
        updated_at: '2024-03-15T00:00:00.000Z'
      }
    ]
  },
  {
    id_produit: 4,
    nom: "Pack Collagen Boost",
    description: "Kit de stimulation du collagène comprenant un sérum, une crème de jour et un complément alimentaire pour une action triple. Redonne élasticité et fermeté à la peau.",
    prix_ancien: 499.00,
    prix_actuel: 399.00,
    stock: 25,
    id_admin: 1,
    created_at: '2024-03-18T00:00:00.000Z',
    updated_at: '2024-03-18T00:00:00.000Z',
    images: [
      {
        id_image: 5,
        nom_image: 'collagen-boost-principal',
        url_image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&h=400",
        is_principale: true,
        id_produit: 4,
        created_at: '2024-03-18T00:00:00.000Z',
        updated_at: '2024-03-18T00:00:00.000Z'
      },
      {
        id_image: 6,
        nom_image: 'collagen-boost-secondaire',
        url_image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=400&h=400",
        is_principale: false,
        id_produit: 4,
        created_at: '2024-03-18T00:00:00.000Z',
        updated_at: '2024-03-18T00:00:00.000Z'
      }
    ]
  },
  {
    id_produit: 5,
    nom: "Huile d'Argan Pure",
    description: "Huile d'argan 100% pure et biologique, idéale pour les cheveux et la peau. Riche en antioxydants et en vitamine E, elle nourrit en profondeur.",
    prix_ancien: 180.00,
    prix_actuel: 129.00,
    stock: 60,
    id_admin: 1,
    created_at: '2024-03-20T00:00:00.000Z',
    updated_at: '2024-03-20T00:00:00.000Z',
    images: [
      {
        id_image: 7,
        nom_image: 'huile-argan-principal',
        url_image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&h=400",
        is_principale: true,
        id_produit: 5,
        created_at: '2024-03-20T00:00:00.000Z',
        updated_at: '2024-03-20T00:00:00.000Z'
      }
    ]
  },
  {
    id_produit: 6,
    nom: "Complément Vitamine C",
    description: "Supplément de vitamine C haute dose avec bioflavonoïdes pour une meilleure absorption. Renforce le système immunitaire et favorise la production de collagène.",
    prix_ancien: 120.00,
    prix_actuel: 89.00,
    stock: 100,
    id_admin: 1,
    created_at: '2024-03-25T00:00:00.000Z',
    updated_at: '2024-03-25T00:00:00.000Z',
    images: [
      {
        id_image: 8,
        nom_image: 'vitamine-c-principal',
        url_image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=400",
        is_principale: true,
        id_produit: 6,
        created_at: '2024-03-25T00:00:00.000Z',
        updated_at: '2024-03-25T00:00:00.000Z'
      }
    ]
  }
];

// Fonction helper pour convertir les anciens produits de démo au nouveau format
export function convertOldDemoProducts(oldProducts: any[]): Produit[] {
  return oldProducts.map((product, index) => ({
    id_produit: product.id || index + 1,
    nom: product.nom,
    description: product.description,
    prix_ancien: typeof product.prix === 'string' ? parseFloat(product.prix) : product.prix,
    prix_actuel: typeof product.prix === 'string' 
      ? parseFloat(product.prix) * 0.7 
      : product.prix * 0.7,
    stock: 100,
    id_admin: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    images: [{
      id_image: index + 1,
      nom_image: `image-${index + 1}`,
      url_image: product.image,
      is_principale: true,
      id_produit: product.id || index + 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }]
  }));
}