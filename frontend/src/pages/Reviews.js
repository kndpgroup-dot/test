import React, { useState } from 'react';
import { Star, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { testimonials } from '../data/mockData';

const Reviews = () => {
  const [filterRating, setFilterRating] = useState('all');

  const allReviews = [
    ...testimonials,
    {
      id: 5,
      name: 'Emily R.',
      title: 'Game changer for sensitive skin',
      text: 'I have extremely sensitive skin and was hesitant to try this. But wow, it\'s gentle yet effective. No irritation at all!',
      image: 'https://i.pravatar.cc/150?img=16',
      verified: true,
      rating: 5
    },
    {
      id: 6,
      name: 'Lisa K.',
      title: 'Better than waxing',
      text: 'This is SO much better than waxing. No pain, no mess, and my skin feels amazing. I\'ll never go back to waxing.',
      image: 'https://i.pravatar.cc/150?img=20',
      verified: true,
      rating: 5
    },
    {
      id: 7,
      name: 'Amanda P.',
      title: 'Worth every penny',
      text: 'Initially thought it was pricey, but considering how much I save on salon visits, it pays for itself quickly.',
      image: 'https://i.pravatar.cc/150?img=23',
      verified: true,
      rating: 5
    },
    {
      id: 8,
      name: 'Rachel M.',
      title: 'Love it!',
      text: 'Easy to use, effective, and my skin has never looked better. The exfoliating effect is a nice bonus!',
      image: 'https://i.pravatar.cc/150?img=27',
      verified: true,
      rating: 5
    }
  ];

  const filteredReviews = filterRating === 'all' 
    ? allReviews 
    : allReviews.filter(review => review.rating === parseInt(filterRating));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-purple-600" fill="currentColor" />
              ))}
            </div>
            <span className="text-3xl font-bold">4.8</span>
          </div>
          <p className="text-xl text-gray-600">
            Based on 7,322+ verified reviews from happy customers
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">175,000+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600">Would Recommend</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All Reviews ({filteredReviews.length})</h2>
            <div className="flex items-center gap-3">
              <Filter size={20} className="text-gray-600" />
              <select 
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
              </select>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map(review => (
              <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-purple-600" fill="currentColor" />
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{review.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join 175,000+ Happy Customers!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference for yourself with our 30-day money-back guarantee.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 text-lg"
            onClick={() => window.location.href = '/shop'}
          >
            Shop Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
