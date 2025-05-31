import React, { useEffect } from 'react';
import { setPageTitle } from '../utils/pageTitle';

const ProductsPage = () => {
  useEffect(() => {
    setPageTitle('Products');
  }, []);

  const packages = [
      {
        title: "SearKit Classic (Family) - 4 Pack",
        image: "https://www.brainandpoulter.com.au/wp-content/uploads/2022/09/1.1.jpg",
        badges: ['Bestseller'],
        description: "Perfect for beginners. Everything you need to start your on-the-go grilling journey.",
        features: [
          'Compact grill base',
          'Heat-resistant Packaging',
          'Basic Instructions Included',
          'Compact Design'
        ]
      },
      {
        title: "Date-Night Kit - 2 Pack",
        image: "https://bentoindustries.com/wp-content/uploads/2024/02/415518629_371336205520505_3217661589192483647_n-1.jpg",
        badges: ['Premium'],
        description: "Designed for 4-6 people per grill to enjoy on-the-go.",
        features: [
          'Extended Grill Size',
          'Basic Instructions Included',
          'Compact Design',
          'Charcoal Included',
          'Light-and-Grill quick-start modality'
        ]
      },
      {
        title: "SearKit MultiPack -  6 Packs",
        image: "https://bentoindustries.com/wp-content/uploads/2024/02/415518629_371336205520505_3217661589192483647_n-1.jpg",
        badges: ['New'],
        description: "Professional-grade features for the serious grilling enthusiast.",
        features: [
          'Compact grill base',
          'Heat-resistant Packaging',
          'Basic Instructions Included',
          'Compact Design'
        ]
      }
  ];

  return (
    <div className="pt-36">
      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          {/* Coming Soon */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-8">Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <>
                  <ComingSoonCard
                    emoji="🏕️"
                    title="Camping Edition"
                    description="Specialized kit designed for extended outdoor adventures and camping trips."
                  />
                  <ComingSoonCard
                    emoji="🌊"
                    title="Beach Kit"
                    description="Sand-resistant design with specialized features for beach grilling."
                  />
                  <ComingSoonCard
                    emoji="🎉"
                    title="Party Kit XL"
                    description="Extended size kit perfect for family gatherings and parties."
                  />
                </>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Coming Soon Card Component
const ComingSoonCard = ({ emoji, title, description }) => (
  <div className="bg-gray-100 rounded-lg p-6 text-center">
    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl">{emoji}</span>
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Product Card Component
const ProductCard = ({ title, image, badges, description, features }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
        {badges && badges.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <span 
                key={index}
                className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-6">
          <h4 className="font-medium mb-2">Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;