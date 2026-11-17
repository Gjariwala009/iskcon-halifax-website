import { useEffect } from 'react';

/**
 * Observes `.fade-in`, `.fade-in-left`, `.fade-in-right`, and `.fade-in-up`
 * elements in the active view and adds `--visible` classes as they intersect.
 */
export function useRevealOnScroll(dependencyKey: string) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.fade-in, .fade-in-left, .fade-in-right, .fade-in-up'
      )
    );
    if (!elements.length) return;

    const getVisibleClass = (el: HTMLElement) => {
      if (el.classList.contains('fade-in-left')) return 'fade-in-left--visible';
      if (el.classList.contains('fade-in-right')) return 'fade-in-right--visible';
      if (el.classList.contains('fade-in-up')) return 'fade-in-up--visible';
      return 'fade-in--visible';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            window.setTimeout(() => {
              target.classList.add(getVisibleClass(target));
            }, index * 80);
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [dependencyKey]);
}
