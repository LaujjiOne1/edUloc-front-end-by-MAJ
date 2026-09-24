import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Collapsible({ title, children, defaultOpen = false }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{ marginBottom: 16 }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: '100%',
          textAlign: 'left',
          padding: '4px 0',
          color: 'var(--color-text)',
          fontSize: 14,
          fontWeight: 500,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: 'var(--color-bg-element)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s',
            flexShrink: 0,
          }}
        >
          <ChevronRight
            size={14}
            style={{
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              color: 'var(--color-text)',
            }}
          />
        </span>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text)' }}>
          {title}
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            marginTop: 12,
            marginLeft: 24,
            padding: 16,
            borderRadius: 12,
            backgroundColor: 'var(--color-bg-element)',
            fontSize: 14,
            color: 'var(--color-text)',
            animation: 'pop-in 0.2s ease-out forwards',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
