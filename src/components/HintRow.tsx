import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface HintRowProps {
  title: string;
  hint: string | React.ReactNode;
  copyText?: string;
}

export function HintRow({ title, hint, copyText }: HintRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = copyText || (typeof hint === 'string' ? hint : '');
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 0',
      }}
    >
      <span
        style={{
          fontSize: 14,
          lineHeight: '20px',
          fontWeight: 500,
          color: 'var(--color-text)',
        }}
      >
        {title}
      </span>
      <div
        onClick={handleCopy}
        title={copyText ? 'Click to copy' : undefined}
        style={{
          backgroundColor: 'var(--color-bg-selected)',
          color: 'var(--color-text-secondary)',
          borderRadius: 8,
          padding: '2px 8px',
          fontSize: 12,
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          cursor: copyText ? 'pointer' : 'default',
          transition: 'background-color 0.15s ease',
        }}
      >
        <span>{hint}</span>
        {copyText && (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {copied ? (
              <Check size={12} style={{ color: '#10b981' }} />
            ) : (
              <Copy size={12} style={{ opacity: 0.6 }} />
            )}
          </span>
        )}
      </div>
    </div>
  );
}
