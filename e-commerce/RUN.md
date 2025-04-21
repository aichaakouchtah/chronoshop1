### 🚀 Lancer le projet Laravel + React (TypeScript)

#### 🔧 Backend (Laravel)
```bash
cd backend
composer install --optimize-autoloader
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

#### 💻 Frontend (React + TypeScript avec Vite) Autre terminal
```bash
cd frontend
npm install
npm run dev
```