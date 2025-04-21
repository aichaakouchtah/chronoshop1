
## Tutoriel d'installation complet

### Prérequis système
- Serveur web (Apache/Nginx) avec PHP 8.1+
- Extensions PHP requises : BCMath, Ctype, cURL, DOM, Fileinfo, JSON, Mbstring, OpenSSL, PCRE, PDO, Tokenizer, XML
- Composer 2.5+ 
- MySQL 5.7+ ou MariaDB 10.3+
- Node.js 18+ et npm 9+ (pour les assets frontend)

### Dépendances clés
- Laravel 10
- Laravel Sanctum (Authentification API)
- GuzzleHTTP (Intégration WhatsApp)
- PHP 8.1+ avec extensions : BCMath, Ctype, cURL, DOM, Fileinfo, JSON, Mbstring, OpenSSL, PCRE, PDO, Tokenizer, XML
- Composer 2.5+
- MySQL 5.7+ 

## Procédure d'installation

1. Installer les dépendances PHP :
```bash
composer install --optimize-autoloader
```

2. Configurer l'environnement :
```bash
php artisan key:generate
```

3. Installer les dépendances frontend :
```bash
npm install && npm run build
```

## Configuration avancée

### Variables d'environnement critiques
```env
APP_ENV=production
APP_DEBUG=false

DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ecommerce
DB_USERNAME=root
DB_PASSWORD=
WHATSAPP_API_KEY=your_api_key_here
WHATSAPP_PHONE_NUMBER=+221XXXXXXXX
WHATSAPP_TEMPLATE_ID=order_status_update

SESSION_LIFETIME=120
SANCTUM_STATEFUL_DOMAINS=your-domain.com
```

## Migrations
`php artisan migrate --seed`

## Démarrage & Déploiement

```bash
php artisan serve
```

### Commandes de maintenance
- Rafraîchir le cache : `php artisan optimize:clear && php artisan optimize`
- Redémarrer les workers : `php artisan queue:restart`
- Surveiller les logs : `tail -f storage/logs/laravel.log`

## Modifications courantes
1. **CORS** : `config/cors.php`
2. **Sanctum** : `config/sanctum.php`
3. **Variables d'environnement** :
   - Session lifetime
   - Sanctum middleware
   - WhatsApp credentials



