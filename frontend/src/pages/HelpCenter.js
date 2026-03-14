import React from 'react';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { faqs } from '../data/mockData';

const HelpCenter = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get in touch via email',
      action: 'hello@bleame.com',
      link: 'mailto:hello@bleame.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      action: 'Start Chat',
      link: '#'
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Find answers quickly',
      action: 'Browse FAQ',
      link: '#faq'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and provide support
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a 
                  key={index} 
                  href={method.link}
                  className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <span className="text-purple-600 font-semibold hover:text-purple-700">
                    {method.action} →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🚚 Fast Shipping from Nevada, USA
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All orders are processed and shipped within 1-2 business days. 
              Free shipping on all orders! Track your order easily with our shipping notifications.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map(faq => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-white rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders. No minimum purchase required.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Guarantee</h3>
              <p className="text-gray-600">
                Not satisfied? Get a full refund within 30 days, no questions asked.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                Simple return process. Just contact us and we'll take care of the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our friendly support team is here to help you!
            </p>
            <a href="mailto:hello@bleame.com">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 text-lg"
              >
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
