import React, { useState } from 'react';
import { Calendar, Clock, Zap, CheckCircle2, HeartHandshake, ArrowLeft } from 'lucide-react';

export default function CentralLobby({ onNavigate, onBackToHero }) {
  const [top3, setTop3] = useState(['', '', '']);
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading 20 mins', done: false },
    { id: 2, name: 'Mindful Rest', done: false },
  ]);

  const toggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h));
  };

  return (
    <div className="min-h-screen w-full p-6 text-white max-w-6xl mx-auto space-y-6">
      {/* Top Header */}
      <header className="glass-panel p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button onClick={onBackToHero} className="glass-button p-2 text-xs">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="text-xl font-bold tracking-wider">AURA PLANNER</h1>
        </div>
        <nav className="flex gap-2">
          <button onClick={() => onNavigate('blocker')} className="glass-button px-3 py-1.5 text-xs flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-300" /> Time Blocker
          </button>
          <button onClick={() => onNavigate('timer')} className="glass-button px-3 py-1.5 text-xs flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-sky-300" /> Speed Timer
          </button>
          <button onClick={() => onNavigate('calendar')} className="glass-button px-3 py-1.5 text-xs flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-emerald-300" /> Calendar
          </button>
        </nav>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top 3 Priorities */}
        <div className="glass-panel p-5 space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-300" /> Today's Top 3 Focus
          </h2>
          {top3.map((item, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`Priority #${idx + 1}`}
              value={item}
              onChange={(e) => {
                const next = [...top3];
                next[idx] = e.target.value;
                setTop3(next);
              }}
              className="glass-input w-full text-sm"
            />
          ))}
        </div>

        {/* Habit Tracker */}
        <div className="glass-panel p-5 space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-emerald-300" /> Habits
          </h2>
          {habits.map((h) => (
            <div
              key={h.id}
              onClick={() => toggleHabit(h.id)}
              className="glass-card p-3 flex justify-between items-center cursor-pointer text-sm"
            >
              <span className={h.done ? 'line-through opacity-50' : ''}>{h.name}</span>
              <CheckCircle2 className={`w-4 h-4 ${h.done ? 'text-emerald-400' : 'text-white/30'}`} />
            </div>
          ))}
        </div>

        {/* Deadline Radar */}
        <div className="glass-panel p-5 space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Clock className="w-5 h-5 text-sky-300" /> Deadline Radar
          </h2>
          <div className="glass-card p-3 border-l-4 border-l-rose-400 text-sm">
            <p className="font-medium">OS Exam</p>
            <p className="text-xs text-white/60">2 days remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
}
