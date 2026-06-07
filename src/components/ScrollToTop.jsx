"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;

      setVisible(scrolled > height * 0.5);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button onClick={scrollToTop} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-blue shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
      <FaArrowUp className="text-lg md:text-2xl" />
    </button>
  );
};

export default ScrollToTop;
