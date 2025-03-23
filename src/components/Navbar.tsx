
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
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
          <div className="text-gradient font-bold text-2xl">Samsung Marketing</div>
        </div>
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMobileMenu} 
              className="block md:hidden p-2 text-gray-800 z-50 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {mobileMenuOpen && (
              <>
                <div className="nav-overlay" onClick={() => setMobileMenuOpen(false)}></div>
                <div className="mobile-menu glass-navbar py-6 px-6 rounded-b-2xl shadow-xl">
                  <ul className="flex flex-col space-y-6">
                    <li>
                      <a 
                        href="#benefits" 
                        className="block text-gray-800 hover:text-samsung-blue transition-colors duration-300 text-lg font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Преимущества
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#program" 
                        className="block text-gray-800 hover:text-samsung-blue transition-colors duration-300 text-lg font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Программа
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#testimonials" 
                        className="block text-gray-800 hover:text-samsung-blue transition-colors duration-300 text-lg font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Отзывы
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#signup" 
                        className="block w-full text-center px-4 py-3 rounded-full bg-gradient-to-r from-samsung-blue to-samsung-light-blue text-white transition-all hover:shadow-md duration-300 shine-effect"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Записаться
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#benefits" 
                      className="text-gray-800 hover:text-samsung-blue transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-samsung-blue after:transition-all hover:after:w-full"
                    >
                      Преимущества
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#program" 
                      className="text-gray-800 hover:text-samsung-blue transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-samsung-blue after:transition-all hover:after:w-full"
                    >
                      Программа
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#testimonials" 
                      className="text-gray-800 hover:text-samsung-blue transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-samsung-blue after:transition-all hover:after:w-full"
                    >
                      Отзывы
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a 
              href="#signup" 
              className="hidden md:inline-block px-6 py-2 rounded-full bg-gradient-to-r from-samsung-blue to-samsung-light-blue text-white transition-all hover:shadow-lg duration-300 shine-effect"
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
