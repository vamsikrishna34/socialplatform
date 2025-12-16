
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <div className="flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}