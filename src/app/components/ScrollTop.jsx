'use client'; // if using app directory in Next.js 13+

import { useState, useEffect } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';


export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 max-lg:bottom-14 text-3xl right-6 z-50 bg-yellow-300 text-black px-2 py-2 
        rounded-lg shadow-lg hover:bg-yellow-500 transition"
        aria-label="Scroll to top"
      >
        <IoIosArrowRoundUp/>
      </button>
    )
  );
}
