import React from 'react';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const handleBuyClick = () => {
    window.location.href = "https://your-ticket-url.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-red-900">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            TYSON vs PAUL
          </h1>
          
          {/* Image Container */}
          <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <img 
                src="/api/placeholder/1200/675" 
                alt="Tyson vs Paul" 
                className="object-cover w-full h-full"
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Fight Details */}
          <div className="space-y-4 text-white">
            <p className="text-2xl md:text-3xl font-semibold">
              THE LEGENDARY SHOWDOWN
            </p>
            <p className="text-xl md:text-2xl text-gray-300">
              Live at AT&T Stadium
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleBuyClick}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-6 px-12 text-xl md:text-2xl rounded-full transform transition hover:scale-105 shadow-lg"
          >
            BUY NOW
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;