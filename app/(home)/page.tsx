// No interim docs landing page — go straight to /docs. Static export has no
// server redirects, so this needs all three: a meta refresh for crawlers and
// no-JS clients, a client-side replace so it doesn't pollute history, and a
// plain link as the last resort.
import Link from 'next/link';

export const metadata = {
  title: 'NautGate Documentation',
};

export default function HomePage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/docs" />
      <script
        dangerouslySetInnerHTML={{ __html: `window.location.replace('/docs')` }}
      />
      <div className="flex flex-col items-center justify-center text-center flex-1 gap-4 px-6">
        <p className="text-fd-muted-foreground">Redirecting to the documentation…</p>
        <Link href="/docs" className="text-fd-primary underline">
          Continue to /docs
        </Link>
      </div>
    </>
  );
}
