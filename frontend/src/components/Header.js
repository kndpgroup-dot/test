import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-4">
          <span className="hidden sm:inline">❄️ Η ΧΕΙΜΕΡΙΝΗ ΠΡΟΣΦΟΡΑ ΛΗΓΕΙ ΣΕ ❄️</span>
          <div className="flex gap-2">
            <div className="bg-white text-pink-600 px-2 py-1 rounded font-bold">08</div>
            <div className="bg-white text-pink-600 px-2 py-1 rounded font-bold">37</div>
            <div className="bg-white text-pink-600 px-2 py-1 rounded font-bold">21</div>
          </div>
        </div>
      </div>

      {/* Limited Time Banner */}
      <div className="bg-purple-100 text-purple-900 py-2 text-center text-sm font-medium">
        ΠΕΡΙΟΡΙΣΜΕΝΗ ΠΡΟΣΦΟΡΑ: ΕΞΟΙΚΟΝΟΜΗΣΤΕ ΕΩΣ 48%
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-gray-900">
            Bleame
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/shop">
              <Button variant="default" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6">
                Αγορά
              </Button>
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Αξιολογήσεις
            </Link>
            <Link to="/help" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Κέντρο Βοήθειας
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <User size={24} />
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="relative text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/shop" 
              className="text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Αγορά
            </Link>
            <Link 
              to="/reviews" 
              className="text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Αξιολογήσεις
            </Link>
            <Link 
              to="/help" 
              className="text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Κέντρο Βοήθειας
            </Link>
          </nav>
        </div>
      )}

      {/* Announcement Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-6 text-sm">
          <span className="flex items-center gap-2">
            <span>🚚</span> Δωρεάν Αποστολή Σήμερα
          </span>
          <span className="flex items-center gap-2">
            <span>💜</span> 175.000+ Ευχαριστημένοι Πελάτες
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
