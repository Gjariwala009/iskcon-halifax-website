import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Footer } from './Footer';
import { MantraTicker } from './MantraTicker';
import { Navbar } from './Navbar';
import { ScrollToTopButton } from './ScrollToTopButton';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  useRevealOnScroll(pathname);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <MantraTicker />
      <ScrollToTopButton />
    </>
  );
}
