
import { useState, useEffect } from "react";
import { Menu, X, Code, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import AnimatedElement from "./AnimatedElement";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = "hero";
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop < 200 && sectionId) {
          currentSection = sectionId;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/80 shadow-md backdrop-blur-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <AnimatedElement animation="slide-left" duration={800}>
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center group">
                <div className="relative">
                  <Code className="w-8 h-8 text-accent mr-2 transition-transform duration-500 group-hover:rotate-12 glow-pulse" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
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
            {[
              {id: "services", label: "Services"},
              {id: "work", label: "Work"},
              {id: "about", label: "About"},
              {id: "careers", label: "Careers"},
              {id: "contact", label: "Contact"}
            ].map((item, index) => (
              <AnimatedElement key={item.id} animation="fade-in" delay={300 + (index * 100)} duration={500}>
                <a 
                  href={`#${item.id}`} 
                  className={`relative px-2 py-1 text-foreground/80 hover:text-accent transition-colors duration-300 font-medium group ${
                    isActive(item.id) ? 'text-accent' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transform transition-transform duration-300 origin-left ${
                    isActive(item.id) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              </AnimatedElement>
            ))}
            <AnimatedElement animation="scale" delay={700} duration={500}>
              <Button className="bg-accent hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(145,70,255,0.5)] group relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Button>
            </AnimatedElement>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground transition-all duration-300 hover:text-accent hover:bg-accent/10"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md shadow-lg border-t border-border">
            {[
              {id: "services", label: "Services"},
              {id: "work", label: "Work"},
              {id: "about", label: "About"},
              {id: "careers", label: "Careers"},
              {id: "contact", label: "Contact"}
            ].map((item, index) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`block px-3 py-2 text-base font-medium text-foreground hover:text-accent transition-all duration-300 hover:pl-5 ${
                  isActive(item.id) ? 'text-accent bg-accent/10 rounded-md pl-5' : ''
                }`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-3">
              <Button className="w-full bg-accent hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(145,70,255,0.5)] relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </header>
  );
};

export default Navbar;
