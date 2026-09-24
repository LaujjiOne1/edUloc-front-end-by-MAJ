import React from 'react';
import glowImage from '@/assets/images/logo-glow.png';
import expoLogoImage from '@/assets/images/expo-logo.png';

export function AnimatedLogo() {
  return (
    <div
      style={{
        position: 'relative',
        width: 128,
        height: 128,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      {/* Background glow with slow rotating/pulsing animation */}
      <img
        src={glowImage}
        alt="Logo glow"
        className="animate-glow"
        style={{
          position: 'absolute',
          width: 201,
          height: 201,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      />

      {/* Expo Blue gradient square */}
      <div
        className="expo-logo-background animate-pop"
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Expo White symbol */}
        <img
          src={expoLogoImage}
          alt="Expo logo"
          style={{
            width: 76,
            height: 71,
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
