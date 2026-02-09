import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollUpArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6
        w-10 h-10
        md:w-12 md:h-12
        rounded-full
        bg-[#11001F] dark:bg-white
        flex items-center justify-center
        shadow-lg
        hover:scale-105
        transition
      "
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} className='text-base md:text-lg text-white dark:text-[#11001F]' />
    </button>
  );
}
