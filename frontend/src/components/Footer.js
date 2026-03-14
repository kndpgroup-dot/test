import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, RotateCcw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-20">
      {/* Trust Badges */}
      <div className="border-t border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Truck className="w-12 h-12 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On all orders</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">30-Nights Guarantee</h3>
              <p className="text-gray-600 text-sm">Risk-free trial</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="w-12 h-12 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Easy Returns</h3>
              <p className="text-gray-600 text-sm">Hassle-free process</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Shop Section */}
          <div className="flex gap-4">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=150&h=150&fit=crop" 
              alt="Shop" 
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Shop</h4>
              <p className="text-gray-600 text-sm">
                Forget about cuts, rashes and ingrown hairs. Try Bleame.
              </p>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="flex gap-4">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=150&h=150&fit=crop" 
              alt="Reviews" 
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Reviews</h4>
              <p className="text-gray-600 text-sm">
                Discover what 12,500+ customers have to say about Bleame
              </p>
            </div>
          </div>

          {/* Help Center Section */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Help Center</h4>
            <p className="text-gray-600 text-sm mb-4">
              Fast Shipping from Nevada, USA
            </p>
            <Link to="/help" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              Visit Help Center →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div className="flex gap-6">
              <Truck className="w-6 h-6" />
              <Shield className="w-6 h-6" />
              <RotateCcw className="w-6 h-6" />
            </div>
            <p>© 2025 Bleame. All rights reserved.</p>
            <Link to="/" className="text-purple-600 hover:text-purple-700 font-medium">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
