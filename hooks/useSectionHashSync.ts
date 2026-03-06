import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { NAV_LIST } from '@/config';

export const useSectionHashSync = () => {
  const router = useRouter();
  const isScrollingByClick = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (router.pathname !== '/') return;

    const handleScroll = () => {
      if (isScrollingByClick.current) return;

      const sectionIds = NAV_LIST.map((nav) => nav.id);
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let currentId = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { top, bottom } = el.getBoundingClientRect();

        if (top <= windowHeight / 2 && bottom > 0) {
          currentId = id;
        }
      }

      if (currentId && `#${currentId}` !== window.location.hash) {
        const newUrl = currentId === 'hero-section' ? '/' : `/#${currentId}`;
        window.history.replaceState(null, '', newUrl);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  const setClickScrolling = (duration = 1100) => {
    isScrollingByClick.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isScrollingByClick.current = false;
    }, duration);
  };

  return { setClickScrolling };
};