import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Shield, RefreshCw, Plane, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { products, testimonials } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { toast } from '../hooks/use-toast';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('bikini');

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: 'Added to cart!',
      description: `${quantity}x ${product.name} added to your cart.`,
    });
  };

  const tabs = [
    { id: 'bikini', label: 'Bikini', image: product.images[0] },
    { id: 'leg', label: 'Leg', image: product.images[1] || product.images[0] },
    { id: 'arm', label: 'Arm', image: product.images[2] || product.images[0] },
    { id: 'back', label: 'Back', image: product.images[3] || product.images[0] }
  ];

  return (
    <div className="min-h-screen">
      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full font-bold">
                    Save {product.discount}%
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-purple-600' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-purple-600" fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-gray-600">({product.reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <Button 
                size="lg" 
                onClick={handleAddToCart}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Add to cart
              </Button>

              {/* Product Badges */}
              {product.badges && (
                <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                  {product.badges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="font-medium text-gray-700">{badge.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section - See it in action */}
      {product.id === 1 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              See it in action. No matter the terrain, the eraser hugs your curves.
            </h2>
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={tabs.find(t => t.id === activeTab)?.image} 
                alt={activeTab} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.slice(0, 2).map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-purple-600" fill="currentColor" />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{testimonial.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.id !== product.id).slice(0, 4).map(relatedProduct => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-gray-900">${relatedProduct.price}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${relatedProduct.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
