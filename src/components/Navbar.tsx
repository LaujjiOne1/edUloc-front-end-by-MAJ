import React from 'react';
import { ExternalLink as ExternalLinkIcon, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface NavbarProps {
  activeTab: 'home' | 'explore';
  onSelectTab: (tab: 'home' | 'explore') => void;
}

export function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        padding: '16px 16px 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 800,
          backgroundColor: 'var(--color-bg-element)',
          borderRadius: 32,
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(8px)',
          transition: 'background-color 0.2s ease',
        }}
      >
        {/* Brand Text */}
        <span
          style={{
            fontSize: 14,
            fontWeight: 700,
            marginRight: 'auto',
            color: 'var(--color-text)',
            letterSpacing: '-0.01em',
          }}
        >
          Expo Starter
        </span>

        {/* Tab Buttons */}
        <button
          type="button"
          onClick={() => onSelectTab('home')}
          style={{
            backgroundColor:
              activeTab === 'home' ? 'var(--color-bg-selected)' : 'transparent',
            color:
              activeTab === 'home'
                ? 'var(--color-text)'
                : 'var(--color-text-secondary)',
            borderRadius: 12,
            padding: '4px 12px',
            fontSize: 14,
            fontWeight: activeTab === 'home' ? 600 : 500,
            transition: 'all 0.15s ease',
          }}
        >
          Home
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('explore')}
          style={{
            backgroundColor:
              activeTab === 'explore' ? 'var(--color-bg-selected)' : 'transparent',
            color:
              activeTab === 'explore'
                ? 'var(--color-text)'
                : 'var(--color-text-secondary)',
            borderRadius: 12,
            padding: '4px 12px',
            fontSize: 14,
            fontWeight: activeTab === 'explore' ? 600 : 500,
            transition: 'all 0.15s ease',
          }}
        >
          Explore
        </button>

        {/* External Docs Link */}
        <a
          href="https://docs.expo.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            marginLeft: 8,
            fontSize: 14,
            fontWeight: 500,
            color: 'var(--color-text)',
            textDecoration: 'none',
            padding: '4px 8px',
            borderRadius: 8,
            transition: 'opacity 0.15s ease',
          }}
        >
          <span>Docs</span>
          <ExternalLinkIcon size={12} style={{ opacity: 0.8 }} />
        </a>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            borderRadius: 14,
            backgroundColor: 'var(--color-bg-selected)',
            color: 'var(--color-text)',
            marginLeft: 4,
            transition: 'all 0.15s ease',
          }}
        >
          {resolvedTheme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </header>
  );
}
