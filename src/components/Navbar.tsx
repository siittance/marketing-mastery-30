
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-navbar py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <div className="text-samsung-blue font-bold text-2xl">Samsung Marketing</div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#benefits" className="text-gray-800 hover:text-samsung-blue transition-colors duration-300">Преимущества</a></li>
            <li><a href="#program" className="text-gray-800 hover:text-samsung-blue transition-colors duration-300">Программа</a></li>
            <li><a href="#testimonials" className="text-gray-800 hover:text-samsung-blue transition-colors duration-300">Отзывы</a></li>
          </ul>
        </nav>
        <a 
          href="#signup" 
          className="hidden md:inline-block px-4 py-2 rounded-full bg-samsung-blue text-white transition-all hover:shadow-md duration-300"
        >
          Записаться
        </a>
      </div>
    </header>
  );
};

export default Navbar;
