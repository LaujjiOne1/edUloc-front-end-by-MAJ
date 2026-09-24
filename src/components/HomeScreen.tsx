import React from 'react';
import { AnimatedLogo } from './AnimatedLogo';
import { HintRow } from './HintRow';
import { WebBadge } from './WebBadge';

export function HomeScreen() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
        padding: '24px 16px 40px',
        gap: 24,
      }}
    >
      {/* Hero section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          paddingTop: 16,
          paddingBottom: 8,
          textAlign: 'center',
        }}
      >
        <AnimatedLogo />
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 600,
            lineHeight: 1.1,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Welcome to Expo
        </h1>
      </div>

      {/* Code label */}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--color-text-secondary)',
        }}
      >
        get started
      </span>

      {/* Steps container */}
      <div
        style={{
          width: '100%',
          backgroundColor: 'var(--color-bg-element)',
          borderRadius: 24,
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <HintRow
          title="Try editing"
          hint="src/app/index.tsx"
          copyText="src/app/index.tsx"
        />
        <HintRow
          title="Dev tools"
          hint="use browser devtools"
        />
        <HintRow
          title="Fresh start"
          hint="npm run reset-project"
          copyText="npm run reset-project"
        />
      </div>

      <WebBadge />
    </div>
  );
}
