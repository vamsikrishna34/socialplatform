import Head from 'next/head';
import '@/styles/components/card.css';

export default function FeedPage() {
  return (
    <>
      <Head>
        <title>Soci | Feed</title>
        <meta name="description" content="A modern social feed built with Next.js" />
      </Head>

      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Feed Header */}
        <section aria-labelledby="feed-heading" className="mb-8">
          <h1 id="feed-heading" className="text-2xl font-bold">Your Feed</h1>
          <p className="text-muted">Posts from people you follow</p>
        </section>

        {/* Feed Posts */}
        <section aria-label="Social feed" className="space-y-6">
          {/* Post 1 */}
          <article
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
            aria-labelledby="post-1-title"
          >
            <header className="flex items-start gap-3">
              <img
                src="/images/avatar-placeholder.png"
                alt="User avatar"
                width="40"
                height="40"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h2 id="post-1-title" className="font-semibold">Alex Rivera</h2>
                <time dateTime="2025-06-10T10:00:00Z" className="text-sm text-muted">
                  Jun 10, 2025 · 2h ago
                </time>
              </div>
            </header>
            <p className="mt-3">
              Just deployed my first Next.js app with dark mode! 🎉 Feels great to ship something clean and modern.
            </p>
            <footer className="mt-4 flex items-center gap-4">
              <button
                aria-label="Like this post"
                className="flex items-center gap-1 text-muted hover:text-primary"
              >
                ❤️ <span>24</span>
              </button>
              <button
                aria-label="Comment on this post"
                className="flex items-center gap-1 text-muted hover:text-foreground"
              >
                💬 <span>3</span>
              </button>
              <button
                aria-label="Share this post"
                className="text-muted hover:text-foreground"
              >
                ↗️
              </button>
            </footer>
          </article>

          {/* Post 2 (simplified) */}
          <article className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <header className="flex items-start gap-3">
              <img
                src="/images/avatar-placeholder.png"
                alt="User avatar"
                width="40"
                height="40"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Jamie Chen</h3>
                <time dateTime="2025-06-09T18:30:00Z" className="text-sm text-muted">
                  Jun 9, 2025 · 1d ago
                </time>
              </div>
            </header>
            <p className="mt-3">
              Exploring new ways to make AI more explainable. Any recommendations for interpretability tools?
            </p>
            <footer className="mt-4 flex items-center gap-4">
              <button className="flex items-center gap-1 text-muted hover:text-primary">
                ❤️ <span>8</span>
              </button>
              <button className="flex items-center gap-1 text-muted hover:text-foreground">
                 <span>5</span>
              </button>
            </footer>
          </article>
        </section>

        {/* Empty state / load more (optional) */}
        <div className="mt-8 text-center text-muted">
          <p>No more posts to show.</p>
        </div>
      </div>
    </>
  );
}