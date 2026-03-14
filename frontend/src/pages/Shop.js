import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { toast } from '../hooks/use-toast';

const Shop = () => {
  const { addToCart } = useCart();

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    addToCart(product);
    toast({
      title: 'Added to cart!',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop All Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our full range of innovative beauty and hair removal solutions
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.discount && (
                        <div className="absolute top-3 right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          -{product.discount}%
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-5 space-y-3">
                      <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-purple-600" fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviewCount})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>

                      {/* Quick Add Button */}
                      <Button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-5 transition-all duration-300"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Not Sure? Try Risk-Free!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            30-day money-back guarantee on all products. If you're not satisfied, we'll refund you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <span>🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🛡️</span>
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔄</span>
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
