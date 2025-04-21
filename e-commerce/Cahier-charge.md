Parfait, merci pour les précisions ! Voici la **version mise à jour et réaliste du cahier des charges** de ton site e-commerce, exactement comme tu l’as décrit 👇

---

## 📝 **Cahier des Charges – Site E-commerce “GhaithBio Clone”**

---

### 1. **Présentation du Projet**

Développement d’un site e-commerce marocain pour la vente de produits naturels (santé, beauté, compléments alimentaires, etc.). Les utilisateurs peuvent visualiser les produits et passer une commande sans inscription. L’interface est simple, intuitive et optimisée pour une audience locale.

---

### 2. **Technologies Utilisées**

| Côté            | Technologie                   |
|-----------------|-------------------------------|
| Frontend        | React.js + TypeScript (Vite)  |
| Backend         | Laravel                       |
| Base de données | MySQL via XAMPP               |
| API             | RESTful JSON                  |
| Communication   | WhatsApp API Bot              |

---

### 3. **Fonctionnalités Côté Client (Front-Office)**

#### 🛒 Navigation
- Page d’accueil avec les produits en vedette
- Filtres par catégories :
  - التصنيفات
  - المكملات الغذائية
  - العروض الخاصة
  - منتجات التجميل
  - الأكثر مبيعاً
  - عناية شخصية
- Bar de recherche par nom produit

#### ❤️ Favoris
- Ajouter un produit aux favoris (sans compte)

#### 📦 Détails Produit
- Image
- Nom
- Description
- Prix
- Bouton **Commander**

#### 📝 Formulaire de Commande
- Champ : Nom complet
- Champ : Numéro téléphone
- Champ : Confirmer le numéro de téléphone
- Champ : Adresse
- Bouton **Envoyer commande**

✅ Si le numéro est confirmé, la commande est validée.  
📨 Un message est envoyé via **WhatsApp bot** avec les détails.  
📞 Après 24h, un appel est fait pour confirmation manuelle.

---

### 4. **Côté Admin (/admin)**

#### 🔐 Accès
- URL privée : `/admin`
- Page login : email + mot de passe admin

#### 🛠️ Fonctionnalités du dashboard admin
- Gérer les **produits** (ajouter / modifier / supprimer)
- Gérer les **commandes** (statut : en attente, confirmée, livrée)
- Gérer les **clients** (affichés automatiquement via les commandes, pas de création manuelle)
  - Voir l’historique des commandes par client
- Statistiques de ventes (optionnel)

---

### 5. **Modèles de Données (MySQL)**

#### Table `products`
- id
- nom
- description
- prix
- image
- catégorie
- actif

#### Table `orders`
- id
- nom_client
- telephone
- adresse
- statut (en attente / confirmée / livrée)
- date_commande

#### Table `admins`
- id
- nom
- email
- password (hash)

---

### 6. **Pages Informatives**
- عن المتجر
- من نحن
- السياسات
- الاستبدال والاسترجاع
- شروط الاستخدام
- طرق الشحن
- طرق الدفع
- تواصل معنا
- إتصل بنا
- الأسئلة الشائعة

---

### 7. **Sécurité**
- Pas d’inscription publique
- Authentification uniquement pour l’admin
- Validation serveur pour les formulaires
- CORS + Auth middleware pour l’accès admin

---

### 8. **Livrables**
- Code source complet (Laravel + React)
- Export base de données `.sql`
- Documentation d’installation et utilisation
- Accès admin pré-configuré

---

Souhaite-tu que je te génère ce **document en PDF prêt à imprimer** ou bien que je commence directement à te faire la **structure de ton projet** (backend + frontend) ?