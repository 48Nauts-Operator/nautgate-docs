import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

// The mark, inline — see docs/brand.md in the NautGate repo for the geometry.
function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#808000" />
      <rect x="4.5" y="8.5" width="23" height="6.6" rx="1" fill="#0A0B00" />
      <rect x="7.5" y="19.8" width="5" height="5" rx="0.9" fill="#0A0B00" />
      <rect x="13.5" y="19.8" width="5" height="5" rx="0.9" fill="#0A0B00" />
      <rect x="19.5" y="19.8" width="5" height="5" rx="0.9" fill="#0A0B00" />
    </svg>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Mark />
          <span style={{ fontWeight: 600 }}>{appName}</span>
        </>
      ),
    },
    links: [
      { text: 'nautgate.dev', url: 'https://nautgate.dev', external: true },
      { text: 'Glossary', url: 'https://nautgate.dev/glossary.html', external: true },
    ],
    githubUrl: `https://github.com/48Nauts-Operator/NautGate`,
  };
}
