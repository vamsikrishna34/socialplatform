
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-foreground">
          <span className="text-xl">🕊️ Soci</span>
          <span className="sr-only">Soci — A modern social feed</span>
        </Link>

        {/* Nav + Theme Toggle (placeholder for Week 2) */}
        <div className="flex items-center gap-4">
          <nav aria-label="Primary navigation">
            <ul className="flex gap-4 text-sm">
              <li><Link href="/">Feed</Link></li>
              <li><Link href="/create">Create</Link></li>
            </ul>
          </nav>

          {/* Theme Toggle (will be enhanced in Week 2) */}
          <button
            id="theme-toggle"
            aria-label="Toggle dark mode"
            className="h-8 w-8 rounded-full bg-muted text-background"
          >
            🌓
          </button>
        </div>
      </div>
    </header>
  );
}