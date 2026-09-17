import React, { useState } from 'react';
import HeroLanding from './components/HeroLanding';

export default function App() {
  const [currentPage, setCurrentPage] = useState('hero');

  return (
    <div className="min-h-screen bg-slate-950">
      {currentPage === 'hero' ? (
        <HeroLanding onStart={() => setCurrentPage('lobby')} />
      ) : (
        /* Temporary placeholder for the Lobby page */
        <div className="min-h-screen flex flex-col items-center justify-center text-white p-8 space-y-6 bg-slate-900">
          <h1 className="text-4xl font-bold">WELCOME TO THE LOBBY! 🚀</h1>
          <p className="text-slate-400">Next, we will build your Top 3 Priorities, Habit Tracker, and D-Day Radar here.</p>
          <button 
            onClick={() => setCurrentPage('hero')}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl text-sm"
          >
            ← Back to Hero Page
          </button>
        </div>
      )}
    </div>
  );
}
