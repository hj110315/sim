import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';

// Curated list of high-definition nature wallpapers
const NATURE_IMAGES = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80", // Yosemite Valley
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80", // Misty Fog Forest
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80", // Sunlight Through Trees
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80", // Calm Beach Sunset
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"  // Majestic Snowy Mountains
];

// Curated inspirational quotes
const QUOTES = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" }
];

export default function HeroLanding({ onStart }) {
  const [bgImage, setBgImage] = useState('');
  const [quote, setQuote] = useState({ text: '', author: '' });

  // Pick a random background and quote every time the page loads
  useEffect(() => {
    const randomImage = NATURE_IMAGES[Math.floor(Math.random() * NATURE_IMAGES.length)];
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setBgImage(randomImage);
    setQuote(randomQuote);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col justify-between p-8 text-white select-none">
      {/* Background Image with Subtle Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
      </div>

      {/* Top Header / Logo */}
      <div className="relative z-10 flex justify-between items-center max-w-6xl mx-auto w-full pt-4">
        <h1 className="text-xl font-bold tracking-widest uppercase text-white/90">Aura Planner</h1>
        <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
          v1.0 Local Web
        </span>
      </div>

      {/* Center Quote Panel */}
      <div className="relative z-10 max-w-2xl mx-auto w-full my-auto text-center px-4">
        <div className="glass-panel p-8 sm:p-12 space-y-6">
          <Sparkles className="w-8 h-8 text-amber-300 mx-auto animate-pulse" />
          <p className="text-2xl sm:text-3xl font-light leading-relaxed italic tracking-wide text-white">
            "{quote.text}"
          </p>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
            — {quote.author}
          </p>
        </div>
      </div>

      {/* Scroll-trigger Action Button */}
      <div className="relative z-10 text-center pb-8">
        <button
          onClick={onStart}
          className="glass-button px-8 py-4 rounded-full text-lg font-bold text-white shadow-2xl flex items-center gap-3 mx-auto group border-2 border-white/50 hover:border-white"
        >
          <span>공부 시작하자!^^</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
