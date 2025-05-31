import React from 'react';
import { Flame, Globe, Heart, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-36">
      {/* Title Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--coffee))]">Our Story</h1>
            <p className="text-xl text-gray-600">
              Built for people who miss real flame grilling, born from a love for food, not just convenience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="md:flex items-center mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-3xl font-bold mb-6">How It All Started</h2>
                <p className="text-lg text-gray-600 mb-4">
                  SearKit was born in a small apartment in Berlin, where our founder, a chef by training, 
                  was frustrated by the inability to enjoy properly grilled food at home.
                </p>
                <p className="text-lg text-gray-600">
                  After a trip to Japan where he experienced the simplicity and elegance of bento boxes, 
                  combined with the tradition of portable yakitori grills, the idea for SearKit was born:
                  a complete grilling experience in a convenient, portable package.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg"
                    alt="Founder grilling"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To elevate takeout into an experience - making real flame grilling accessible anywhere, 
                while maintaining restaurant-quality taste and presentation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <ValueCard 
                icon={<Flame className="h-8 w-8 text-orange-500" />}
                title="Authentic Flavor"
                description="We believe real flame creates flavors that can't be replicated. Every SearKit gives you that authentic grilled taste."
              />
              <ValueCard 
                icon={<Globe className="h-8 w-8 text-orange-500" />}
                title="Sustainable Design"
                description="Our kits are designed with the environment in mind, using recyclable and biodegradable materials."
              />
              <ValueCard 
                icon={<Heart className="h-8 w-8 text-orange-500" />}
                title="Passion for Food"
                description="We're food lovers first. Every ingredient is selected and prepared with care by our culinary team."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">The Team Behind SearKit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <TeamMember 
                image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                name="Michael Brandt"
                role="Founder & Head Chef"
                bio="Former Michelin-star restaurant chef with a passion for innovative food experiences."
              />
              <TeamMember 
                image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                name="Sarah Chen"
                role="Product Designer"
                bio="Industrial designer with expertise in sustainable packaging and user experience."
              />
              <TeamMember 
                image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                name="David Kim"
                role="Culinary Director"
                bio="Specialized in Asian fusion cuisine with experience in prestigious kitchens across Seoul and Tokyo."
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                We're always looking for passionate individuals to join our growing team.
                Check out our current openings or send us your resume.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recognition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Recognition</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start">
                  <Award className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Food Innovation Award 2025</h3>
                    <p className="text-gray-600">
                      "SearKit reimagines how we experience takeout food, bringing the joy of grilling to places never before possible."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- European Food Innovation Network</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start">
                  <Award className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainable Packaging Design 2024</h3>
                    <p className="text-gray-600">
                      "A brilliant example of how functional design can also be environmentally responsible."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- Sustainable Packaging Coalition</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start">
                  <Award className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Featured in Culinary Trends Magazine</h3>
                    <p className="text-gray-600">
                      "One of the most innovative food concepts we've seen in years. SearKit brings restaurant-quality experiences to unexpected places."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- Culinary Trends, Spring 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start">
                  <Award className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Best New Food Product 2024</h3>
                    <p className="text-gray-600">
                      "SearKit has created a completely new category in the food service industry with their innovative approach to portable grilling."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- Berlin Food Innovation Summit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl mb-8">
              We're on a mission to change how people experience food outdoors and on-the-go.
              SearKit isn't just about convenience—it's about creating memorable moments around food.
            </p>
            <a href="/partnerships" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description }) => {
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

// Team Member Component
const TeamMember = ({ image, name, role, bio }) => {
  return (
    <div className="text-center">
      <div className="mb-4 relative mx-auto w-40 h-40 rounded-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-orange-500 font-medium mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
};

export default AboutPage;