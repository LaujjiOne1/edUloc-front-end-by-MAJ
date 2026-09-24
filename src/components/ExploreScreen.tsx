import React from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { Collapsible } from './Collapsible';
import { WebBadge } from './WebBadge';

import tutorialImage from '@/assets/images/tutorial-web.png';
import reactLogoImage from '@/assets/images/react-logo.png';

export function ExploreScreen() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
        padding: '24px 16px 40px',
      }}
    >
      {/* Title container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 16,
          padding: '24px 16px 32px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 600,
            lineHeight: 1.2,
            color: 'var(--color-text)',
            letterSpacing: '-0.01em',
          }}
        >
          Explore
        </h2>
        <p
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: 16,
            lineHeight: '24px',
            maxWidth: 420,
          }}
        >
          This starter app includes example
          <br />
          code to help you get started.
        </p>

        <a
          href="https://docs.expo.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            backgroundColor: 'var(--color-bg-element)',
            color: 'var(--color-text)',
            borderRadius: 32,
            padding: '8px 24px',
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'opacity 0.15s ease',
          }}
        >
          <span>Expo documentation</span>
          <ExternalLinkIcon size={13} style={{ color: 'var(--color-text)' }} />
        </a>
      </div>

      {/* Sections Wrapper */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          paddingTop: 8,
        }}
      >
        <Collapsible title="File-based routing" defaultOpen={true}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p style={{ fontSize: 14, lineHeight: '20px' }}>
              This app has two screens:{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--color-bg-selected)',
                  padding: '2px 6px',
                  borderRadius: 6,
                  fontSize: 12,
                }}
              >
                src/app/index.tsx
              </code>{' '}
              and{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--color-bg-selected)',
                  padding: '2px 6px',
                  borderRadius: 6,
                  fontSize: 12,
                }}
              >
                src/app/explore.tsx
              </code>
            </p>
            <p style={{ fontSize: 14, lineHeight: '20px' }}>
              The layout file in{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--color-bg-selected)',
                  padding: '2px 6px',
                  borderRadius: 6,
                  fontSize: 12,
                }}
              >
                src/app/_layout.tsx
              </code>{' '}
              sets up the tab navigator.
            </p>
            <a
              href="https://docs.expo.dev/router/introduction"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-link-primary)',
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 500,
                display: 'inline-block',
              }}
            >
              Learn more
            </a>
          </div>
        </Collapsible>

        <Collapsible title="Android, iOS, and web support">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontSize: 14, lineHeight: '20px' }}>
              You can open this project on Android, iOS, and the web. To open the web version, press{' '}
              <strong>w</strong> in the terminal running this project.
            </p>
            <img
              src={tutorialImage}
              alt="Web preview tutorial"
              style={{
                width: '100%',
                maxHeight: 280,
                objectFit: 'cover',
                borderRadius: 12,
                marginTop: 8,
              }}
            />
          </div>
        </Collapsible>

        <Collapsible title="Images">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontSize: 14, lineHeight: '20px' }}>
              For static images, you can use the{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--color-bg-selected)',
                  padding: '2px 6px',
                  borderRadius: 6,
                  fontSize: 12,
                }}
              >
                @2x
              </code>{' '}
              and{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--color-bg-selected)',
                  padding: '2px 6px',
                  borderRadius: 6,
                  fontSize: 12,
                }}
              >
                @3x
              </code>{' '}
              suffixes to provide files for different screen densities.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
              <img
                src={reactLogoImage}
                alt="React logo"
                style={{ width: 100, height: 100, objectFit: 'contain' }}
              />
            </div>
            <a
              href="https://reactnative.dev/docs/images"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-link-primary)',
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 500,
                display: 'inline-block',
              }}
            >
              Learn more
            </a>
          </div>
        </Collapsible>

        <Collapsible title="Light and dark mode components">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontSize: 14, lineHeight: '20px' }}>
              This template has light and dark mode support. The{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--color-bg-selected)',
                  padding: '2px 6px',
                  borderRadius: 6,
                  fontSize: 12,
                }}
              >
                useColorScheme()
              </code>{' '}
              hook lets you inspect what the user&apos;s current color scheme is, and so you can
              adjust UI colors accordingly.
            </p>
            <a
              href="https://docs.expo.dev/develop/user-interface/color-themes/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-link-primary)',
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 500,
                display: 'inline-block',
              }}
            >
              Learn more
            </a>
          </div>
        </Collapsible>

        <Collapsible title="Animations">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p style={{ fontSize: 14, lineHeight: '20px' }}>
              This template includes an example of an animated component. The{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--color-bg-selected)',
                  padding: '2px 6px',
                  borderRadius: 6,
                  fontSize: 12,
                }}
              >
                src/components/ui/collapsible.tsx
              </code>{' '}
              component uses the powerful{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: 'var(--color-bg-selected)',
                  padding: '2px 6px',
                  borderRadius: 6,
                  fontSize: 12,
                }}
              >
                react-native-reanimated
              </code>{' '}
              library to animate opening this hint.
            </p>
          </div>
        </Collapsible>
      </div>

      <WebBadge />
    </div>
  );
}
