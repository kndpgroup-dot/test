import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { products, testimonials, faqs, stats } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { toast } from '../hooks/use-toast';

const Home = () => {
  const { addToCart } = useCart();
  const mainProduct = products[0];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: 'Προστέθηκε στο καλάθι!',
      description: `${product.name} προστέθηκε στο καλάθι σας.`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-900">
                  ΝΕΟ: 🏆 ΚΑΙΝΟΤΟΜΙΑ ΑΠΟΤΡΙΧΩΣΗΣ 2025
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Εύκολη, Ανώδυνη Αποτρίχωση
              </h1>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-purple-600" fill="currentColor" />
                  <span className="text-gray-700">Ιδανικό για την περιοχή του μπικίνι + όλο το σώμα</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Εύκολη και ανώδυνη αποτρίχωση</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-600">🌸</span>
                  <span className="text-gray-700">Απολαύστε μεταξένια λεία, χωρίς τρίχες επιδερμίδα</span>
                </div>
              </div>

              <Link to="/product/crystal-hair-eraser">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  ΑΓΟΡΑΣΤΕ ΤΟ CRYSTAL HAIR ERASER
                </Button>
              </Link>

              <div className="flex items-center gap-2 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-purple-600" fill="currentColor" />
                  ))}
                </div>
                <span className="font-semibold">Εξαιρετική 4.8</span>
                <span className="text-gray-600">| 7.322 έμπιστες αξιολογήσεις</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop" 
                  alt="Crystal Hair Eraser" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="py-8 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {mainProduct.badges.map((badge, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <p className="font-medium text-gray-900">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Όλη η ομορφιά χωρίς τρίχες.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <Link key={product.id} to={`/product/${product.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Star Rating Banner */}
      <section className="py-4 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-purple-600" fill="currentColor" />
              ))}
            </div>
            <span className="font-semibold">4.8/5</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop" 
                    alt="Testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
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
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" size="lg" className="rounded-full">
                Διαβάστε όλες τις αξιολογήσεις
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Το Μέλλον Είναι Χωρίς Τρίχες! 💜
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map(stat => (
              <div key={stat.id} className="text-center">
                <div className="text-6xl font-bold mb-3">{stat.percentage}%</div>
                <p className="text-lg">{stat.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm opacity-90">
            * Αποτελέσματα σύμφωνα με κλινικές/καταναλωτικές μελέτες.
          </p>
          <div className="text-center mt-8">
            <Link to="/product/crystal-hair-eraser">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 text-lg"
              >
                ΔΙΕΚΔΙΚΗΣΤΕ ΤΗΝ ΠΡΟΣΦΟΡΑ
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-white" fill="currentColor" />
              ))}
            </div>
            <span className="font-semibold">Εξαιρετική 4.8</span>
            <span>| 7.322 έμπιστες αξιολογήσεις</span>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-8 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg italic text-gray-700 mb-4">
              "Εύκολα η καλύτερη αγορά της χρονιάς μου. Ήταν ανώδυνο και δεν προκάλεσε τριβή ακόμα και όταν το έτριβα στο δέρμα. Το συνιστώ ανεπιφύλακτα."
            </p>
            <p className="font-semibold text-gray-900">Jane M. - Επαληθευμένος Αγοραστής</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map(faq => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Έχετε περισσότερες ερωτήσεις; Επικοινωνήστε μαζί μας</h3>
            <p className="text-gray-600 mb-6">
              Εάν έχετε επιπλέον ερωτήσεις, μπορείτε να μας στείλετε email στο hello@bleame.com
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              Στείλτε μας email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
