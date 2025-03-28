
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
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <Code className="w-8 h-8 text-accent mr-2" />
              <span className="text-xl md:text-2xl font-display font-bold tracking-tight">
                Beyond<span className="text-accent">Basics</span>
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-accent transition-colors font-medium">Services</a>
            <a href="#work" className="text-foreground/80 hover:text-accent transition-colors font-medium">Work</a>
            <a href="#about" className="text-foreground/80 hover:text-accent transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors font-medium">Contact</a>
            <AnimatedElement animation="fade-in">
              <Button className="bg-accent hover:bg-accent/90">Get Started</Button>
            </AnimatedElement>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm shadow-lg border-t border-border">
          <a 
            href="#services" 
            className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#work" 
            className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Work
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="px-3 py-2">
            <Button className="w-full bg-accent hover:bg-accent/90">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
