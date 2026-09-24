import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import badgeDark from '@/assets/images/expo-badge-white.png';
import badgeLight from '@/assets/images/expo-badge.png';

export function WebBadge() {
  const { resolvedTheme } = useTheme();

  return (
    <div
      style={{
        padding: '32px 16px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
        }}
      >
        v57.0.22
      </span>
      <img
        src={resolvedTheme === 'dark' ? badgeDark : badgeLight}
        alt="Expo badge"
        style={{
          width: 123,
          height: 24,
          objectFit: 'contain',
        }}
      />
    </div>
  );
}
