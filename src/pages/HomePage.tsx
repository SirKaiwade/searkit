import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ChefHat, Utensils, Recycle, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative pt-36">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-8xl lg:text-[160px] leading-[0.85] mb-6 relative font-black" style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}>
                <span className="block transform hover:translate-x-6 transition-transform duration-300 text-[hsl(var(--coffee))] tracking-[-0.02em]">GRILL</span>
                <span className="block text-[#b84900] transform hover:-translate-x-6 transition-transform duration-300 tracking-[-0.02em]">ANYWHERE</span>
                <div className="absolute -right-12 top-0 animate-float">
                  <Flame size={64} className="text-[#b84900]" />
                </div>
              </h1>
              <p className="text-3xl mb-8 text-[hsl(var(--coffee))] font-display max-w-lg">
                The first all-in-one portable grill kit.
                <br />
                No kitchen needed.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/products" className="btn btn-primary group">
                  Order Your Kit
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/how-it-works" className="btn btn-outline">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="/flames.png"
                  alt="Grilling Experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-16 right-0 bg-[#E6D5C1] text-[#4A3728] p-4 rounded-lg shadow-lg w-64 border border-[#4A3728]/10" style={{ 
                background: "linear-gradient(to bottom right, #E6D5C1, #D4C4B0)",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.1), inset 0 0 30px rgba(255,255,255,0.15)"
              }}>
                <h3 className="text-sm font-display font-semibold uppercase tracking-wider mb-4 border-b border-[#4A3728]/20 pb-2 text-center">Quick Start Guide</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A3728] text-[#E6D5C1] flex items-center justify-center">
                      <Flame size={14} />
                    </div>
                    <p className="text-sm font-medium">Light charcoal</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A3728] text-[#E6D5C1] flex items-center justify-center">
                      <ChefHat size={14} />
                    </div>
                    <p className="text-sm font-medium">Preheat 5-7 min</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A3728] text-[#E6D5C1] flex items-center justify-center">
                      <Utensils size={14} />
                    </div>
                    <p className="text-sm font-medium">Grill & enjoy</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A3728] text-[#E6D5C1] flex items-center justify-center">
                      <Recycle size={14} />
                    </div>
                    <p className="text-sm font-medium">Dispose safely</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Flame className="w-8 h-8" />}
              title="Innovative Design"
              description="Revolutionary portable grill system with built-in heat management"
            />
            <FeatureCard
              icon={<ChefHat className="w-8 h-8" />}
              title="Quality Materials"
              description="Premium heat-resistant materials ensure safety and durability"
            />
            <FeatureCard
              icon={<Utensils className="w-8 h-8" />}
              title="Easy Assembly"
              description="Quick setup design, ready to use in minutes"
            />
            <FeatureCard
              icon={<Recycle className="w-8 h-8" />}
              title="Eco-Friendly"
              description="Sustainable materials and recyclable components"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-6 rounded-2xl transition-all hover:bg-[hsl(var(--coffee))] hover:text-[hsl(var(--cream))]">
    <div className="mb-4 text-[hsl(var(--clay))] group-hover:text-[hsl(var(--cream))]">
      {icon}
    </div>
    <h3 className="text-xl font-display mb-2 text-[#b84900] tracking-normal leading-relaxed">{title}</h3>
    <p className="text-[hsl(var(--coffee))/60] group-hover:text-[hsl(var(--cream))/80]">
      {description}
    </p>
  </div>
);


export default HomePage;