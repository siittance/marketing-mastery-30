
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMobileMenu} 
              className="block md:hidden p-2 text-gray-800"
              aria-label="Menu"
            >
              <Menu />
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 md:hidden">
                <ul className="flex flex-col space-y-4">
                  <li><a href="#benefits" className="block text-gray-800 hover:text-samsung-blue transition-colors duration-300">Преимущества</a></li>
                  <li><a href="#program" className="block text-gray-800 hover:text-samsung-blue transition-colors duration-300">Программа</a></li>
                  <li><a href="#testimonials" className="block text-gray-800 hover:text-samsung-blue transition-colors duration-300">Отзывы</a></li>
                  <li>
                    <a 
                      href="#signup" 
                      className="block w-full text-center px-4 py-2 rounded-full bg-samsung-blue text-white transition-all hover:shadow-md duration-300"
                    >
                      Записаться
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <>
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href="#benefits" className="text-gray-800 hover:text-samsung-blue transition-colors duration-300">Преимущества</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href="#program" className="text-gray-800 hover:text-samsung-blue transition-colors duration-300">Программа</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href="#testimonials" className="text-gray-800 hover:text-samsung-blue transition-colors duration-300">Отзывы</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a 
              href="#signup" 
              className="hidden md:inline-block px-4 py-2 rounded-full bg-samsung-blue text-white transition-all hover:shadow-md duration-300"
            >
              Записаться
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
