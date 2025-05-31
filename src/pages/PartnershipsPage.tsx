import React, { useEffect } from 'react';
import { Users, TrendingUp, Check, Briefcase } from 'lucide-react';
import { setPageTitle } from '../utils/pageTitle';

const PartnershipsPage = () => {
  useEffect(() => {
    setPageTitle('Partnerships');
  }, []);

  return (
    <div className="pt-36">
      {/* Title Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--coffee))]">Partner With SearKit</h1>
            <p className="text-xl text-gray-600 mb-8">
              You cook. We package. Everyone profits.
            </p>
            <a href="#contact-form" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Become a Partner
            </a>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How Our Partnership Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="flex">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">You Create the Recipes</h3>
                  <p className="text-gray-600">
                    Leverage your restaurant's signature dishes and recipes. You prepare the 
                    ingredients just as you would for your restaurant customers.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">We Provide the System</h3>
                  <p className="text-gray-600">
                    SearKit provides the patented portable grill packaging system, complete with 
                    customized branding featuring your restaurant's logo and identity.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">We Handle Logistics</h3>
                  <p className="text-gray-600">
                    Our distribution network ensures your SearKits reach customers in prime condition. 
                    We handle delivery, customer service, and returns.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">You Earn Revenue</h3>
                  <p className="text-gray-600">
                    Earn a significant percentage on each kit sold. Expand your customer reach 
                    without the overhead of delivery staff or expanded kitchen space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Partner Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <BenefitCard 
                icon={<TrendingUp className="h-8 w-8 text-orange-500" />}
                title="Expanded Reach"
                description="Reach customers far beyond your typical delivery radius without compromising food quality."
              />
              <BenefitCard 
                icon={<Users className="h-8 w-8 text-orange-500" />}
                title="New Customer Base"
                description="Tap into SearKit's growing customer base of outdoor enthusiasts and experience seekers."
              />
              <BenefitCard 
                icon={<Briefcase className="h-8 w-8 text-orange-500" />}
                title="Additional Revenue"
                description="Create a new revenue stream with minimal additional overhead or kitchen modifications."
              />
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Partnership Options</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3">Royalty Partnership</h4>
                  <p className="text-gray-600 mb-4">
                    License your recipes and brand to SearKit. We handle production, packaging, and distribution, 
                    while you earn royalties on each kit sold.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <FeatureItem text="15-20% royalty on each kit sold" />
                    <FeatureItem text="Minimal operational involvement" />
                    <FeatureItem text="Quarterly sales reports" />
                    <FeatureItem text="Co-marketing opportunities" />
                  </ul>
                  <p className="text-sm text-gray-500">
                    Ideal for: Established restaurants looking to expand reach with minimal operational changes.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3">Ghost Kitchen Partnership</h4>
                  <p className="text-gray-600 mb-4">
                    Use your kitchen to prepare ingredients that we package in the SearKit system. 
                    Higher revenue share with more operational involvement.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <FeatureItem text="25-30% of revenue per kit" />
                    <FeatureItem text="Ingredient preparation required" />
                    <FeatureItem text="Training and QA support provided" />
                    <FeatureItem text="Weekly sales reports" />
                  </ul>
                  <p className="text-sm text-gray-500">
                    Ideal for: Restaurants with kitchen capacity looking to maximize revenue potential.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join the growing number of restaurants that have expanded their reach and 
                increased revenue through SearKit partnerships.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TestimonialCard 
                  quote="Partnering with SearKit added a completely new revenue stream that didn't cannibalize our existing business. Our signature steaks are now enjoyed all over the city."
                  author="Marcus Chen"
                  role="Owner, Chen's Steakhouse"
                  image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                />
                <TestimonialCard 
                  quote="As a Korean BBQ restaurant, we were limited by the traditional in-restaurant experience. SearKit has allowed us to bring that experience to people's homes and outdoor gatherings."
                  author="Ji-Yeon Park"
                  role="Chef & Owner, Seoul Kitchen"
                  image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Partner?</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Fill out the form below and our partnership team will contact you to discuss opportunities.
            </p>
            
            <form className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-1">
                    Restaurant Name
                  </label>
                  <input 
                    type="text" 
                    id="restaurant" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your Restaurant"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 mb-1">
                  Cuisine Type
                </label>
                <select 
                  id="cuisine" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select cuisine type</option>
                  <option value="american">American</option>
                  <option value="italian">Italian</option>
                  <option value="asian">Asian</option>
                  <option value="mexican">Mexican</option>
                  <option value="middle-eastern">Middle Eastern</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your restaurant
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Share details about your restaurant, signature dishes, and what interests you about partnering with SearKit..."
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="flex items-start">
                  <input 
                    type="checkbox" 
                    className="mt-1 mr-2"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to receive communication from SearKit regarding my partnership inquiry.
                    SearKit will process your data as described in the Privacy Policy.
                  </span>
                </label>
              </div>
              
              <div className="text-center">
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                  Submit Partnership Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Benefit Card Component
const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Feature Item Component
const FeatureItem = ({ text }) => {
  return (
    <li className="flex items-start">
      <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;