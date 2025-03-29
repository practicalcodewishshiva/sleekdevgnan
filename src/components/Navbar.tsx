
import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <AnimatedElement animation="slide-left" duration={800}>
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center group">
                <Code className="w-8 h-8 text-accent mr-2 transition-transform duration-500 group-hover:rotate-12" />
                <span className="text-xl md:text-2xl font-display font-bold tracking-tight">
                  Dev<span className="text-accent relative overflow-hidden">
                    Gnan
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  </span>
                </span>
              </a>
            </div>
          </AnimatedElement>

          <nav className="hidden md:flex items-center space-x-8">
            {["services", "work", "about", "careers", "contact"].map((item, index) => (
              <AnimatedElement key={item} animation="fade-in" delay={300 + (index * 100)} duration={500}>
                <a 
                  href={`#${item}`} 
                  className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium relative group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </AnimatedElement>
            ))}
            <AnimatedElement animation="scale" delay={700} duration={500}>
              <Button className="bg-accent hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(145,70,255,0.5)]">
                Get Started
              </Button>
            </AnimatedElement>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground transition-transform duration-300 hover:rotate-90"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm shadow-lg border-t border-border">
          {["services", "work", "about", "careers", "contact"].map((item, index) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent transition-all duration-300 hover:pl-5"
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <div className="px-3 py-2">
            <Button className="w-full bg-accent hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(145,70,255,0.5)]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
