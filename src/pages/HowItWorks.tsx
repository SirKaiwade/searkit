import React from 'react';

const HowItWorks = () => {
  return (
    <div className="pt-36">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">How SearKit Works</h1>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/itaCiMWdGYY?autoplay=1&mute=1&loop=1&playlist=itaCiMWdGYY"
            title="How It Works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;