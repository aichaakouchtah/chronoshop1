import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const footerLinks = [
    {
      title: 'À propos',
      links: [
        { name: 'Qui sommes-nous', href: '/about' },
        { name: 'Politiques', href: '/policies' },
        { name: 'Retours et échanges', href: '/returns' }
      ]
    },
    {
      title: 'Service client',
      links: [
        { name: 'Contactez-nous', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Modes de paiement', href: '/payment' }
      ]
    }
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et réseaux sociaux */}
          <div className="text-center md:text-left">
            <img
              src="/src/assets/logo.svg"
              alt="ChronoShop"
              className="h-12 mx-auto md:mx-0 hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-gray-600">
              Votre boutique préférée de produits naturels et cosmétiques
            </p>
            <div className="mt-4 flex justify-center md:justify-end space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-red-600 transform hover:scale-110 transition-all duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transform hover:scale-110 transition-all duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transform hover:scale-110 transition-all duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Liens */}
          {footerLinks.map((section) => (
            <div key={section.title} className="animate-fade-in">
              <h3 className="text-lg font-semibold text-gray-900 text-left">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-red-600 block text-left transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ChronoShop. Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}