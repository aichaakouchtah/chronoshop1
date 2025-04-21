import { useState } from 'react';
import { Heart, Search, Menu, Star, Package, Pill, User, X, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Compléments alimentaires',
      icon: <Pill className="h-6 w-6" />,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      link: '/supplements'
    },
    {
      title: 'Produits cosmétiques',
      icon: <Package className="h-6 w-6" />,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      link: '/cosmetics'
    },
    {
      title: 'Offres spéciales',
      icon: <Star className="h-6 w-6" />,
      bgColor: 'bg-red-50', 
      iconColor: 'text-red-600',
      link: '/special-offers'
    },
    {
      title: 'Soins personnels',
      icon: <User className="h-6 w-6" />,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      link: '/personal-care'
    },
    {
      title: 'Meilleures ventes',
      icon: <Star className="h-6 w-6" />,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      link: '/best-sellers'
    }
  ];

  const footerLinks = [
    {
      title: 'À propos',
      items: [
        { label: 'Qui sommes-nous', link: '/about' },
        { label: 'Politiques', link: '/policies' },
        { label: 'Retours et échanges', link: '/returns' },
        { label: 'Conditions d\'utilisation', link: '/terms' },
        { label: 'Modes de livraison', link: '/shipping' },
        { label: 'Modes de paiement', link: '/payment' }
      ]
    },
    {
      title: 'Contactez-nous',
      items: [
        { label: 'Nous contacter', link: '/contact' },
        { label: 'FAQ', link: '/faq' }
      ]
    }
  ];

  const handleSearchSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchExpanded(false);
    }
  };

  const toggleSearchBar = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <>
      <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">
        Service client toujours disponible sur WhatsApp : 06XX
      </div>
      <nav className="bg-white shadow-md py-4 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Regular view for desktop */}
          <div className="hidden md:flex justify-between items-center">
            {/* Left Side - Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/src/assets/logo.svg"
                alt="GhaithBio"
                className="h-12"
              />
            </Link>
            
            {/* Center - Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearchSubmit} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher"
                    className="pl-10 pr-4 py-2 border border-red-200 rounded-full w-full text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="absolute left-3 top-2.5">
                    <Search className="h-5 w-5 text-red-400" />
                  </button>
                </div>
              </form>
            </div>
            
            {/* Right Side - Icons and Menu */}
            <div className="flex items-center space-x-3">
              <Link to="/wishlist" className="relative">
                <Heart className="h-6 w-6 text-red-600 hover:text-red-700" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Link>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-1 text-red-600 hover:text-red-700 font-medium"
              >
                <Menu className="h-6 w-6" />
                <span className="hidden sm:inline">Menu</span>
              </button>
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden">
            {/* Conditional rendering based on search expansion state */}
            {isSearchExpanded ? (
              <div className="flex items-center">
                <form onSubmit={handleSearchSubmit} className="w-full">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Rechercher"
                      className="pl-10 pr-10 py-2 border border-red-200 rounded-full w-full text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    <button type="submit" className="absolute left-3 top-2.5">
                      <Search className="h-5 w-5 text-red-400" />
                    </button>
                    <button 
                      type="button" 
                      className="absolute right-3 top-2.5"
                      onClick={toggleSearchBar}
                    >
                      <X className="h-5 w-5 text-red-400" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <Link to="/" className="flex-shrink-0">
                  <img 
                    src="/src/assets/logo.svg"
                    alt="GhaithBio"
                    className="h-10"
                  />
                </Link>
                
                <div className="flex items-center space-x-4">
                  <button onClick={toggleSearchBar} className="text-red-600">
                    <Search className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-red-600"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar - Revised */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-red-100 shadow-lg z-10">
        <div className="flex justify-around py-2">
          <Link to="/" className="flex flex-col items-center text-red-600 py-1">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Accueil</span>
          </Link>
          <button onClick={toggleSearchBar} className="flex flex-col items-center text-red-600 py-1">
            <Search className="h-6 w-6" />
            <span className="text-xs mt-1">Rechercher</span>
          </button>
          <Link to="/wishlist" className="flex flex-col items-center text-red-600 py-1">
            <Heart className="h-6 w-6" />
            <span className="text-xs mt-1">Favoris</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center text-red-600 py-1"
          >
            <Menu className="h-6 w-6" />
            <span className="text-xs mt-1">Menu</span>
          </button>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden behind the fixed bottom bar */}
      <div className="md:hidden pb-16"></div>

      {/* Sliding Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-50 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className={`fixed inset-y-0 left-0 max-w-sm w-full bg-white shadow-xl transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-red-100 flex justify-between items-center bg-red-50">
              <h2 className="font-semibold text-lg text-red-800">Menu</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-4 grid grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={category.link}
                    className={`${category.bgColor} p-4 rounded-lg flex flex-col items-center justify-center text-center space-y-2 border border-red-100 hover:bg-red-100 transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={category.iconColor}>
                      {category.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {category.title}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="p-4 space-y-6">
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-red-800 mb-3 text-left border-b border-red-100 pb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-left">
                          <Link
                            to={item.link}
                            className="text-gray-700 hover:text-red-600 block py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-red-50 text-red-800 text-sm text-center border-t border-red-100">
              Service client: 06XX
            </div>
          </div>
        </div>
      </div>
    </>
  );
}