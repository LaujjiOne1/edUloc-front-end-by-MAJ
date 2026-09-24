import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { ExploreScreen } from './components/ExploreScreen';

export function AppContent() {
  const [activeTab, setActiveTab] = useState<'home' | 'explore'>('home');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
      }}
    >
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {activeTab === 'home' ? <HomeScreen /> : <ExploreScreen />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
