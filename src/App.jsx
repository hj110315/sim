import React, { useState } from 'react';
import HeroLanding from './components/HeroLanding';
import CentralLobby from './components/CentralLobby';
import TimeBlocker from './components/TimeBlocker';
import ExecutionTimer from './components/ExecutionTimer';
import DeadlineCalendar from './components/DeadlineCalendar';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      {activeTab === 'hero' && <HeroLanding onStart={() => setActiveTab('lobby')} />}
      {activeTab === 'lobby' && (
        <CentralLobby 
          onNavigate={(route) => setActiveTab(route)} 
          onBackToHero={() => setActiveTab('hero')} 
        />
      )}
      {activeTab === 'blocker' && <TimeBlocker onBack={() => setActiveTab('lobby')} />}
      {activeTab === 'timer' && <ExecutionTimer onBack={() => setActiveTab('lobby')} />}
      {activeTab === 'calendar' && <DeadlineCalendar onBack={() => setActiveTab('lobby')} />}
    </div>
  );
}
