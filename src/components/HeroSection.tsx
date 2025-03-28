
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background elements with enhanced animations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className={`absolute top-1/3 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-x-20'}`}
        ></div>
        <div 
          className={`absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl transition-all duration-1000 delay-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-20'}`}
        ></div>
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} font-display font-bold`}
          >
            Crafting <span className="gradient-text">Digital Experiences</span> That Inspire
          </h1>
          
          <p 
            className={`mt-6 text-xl md:text-2xl text-foreground/80 transition-all duration-700 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            We're a creative design agency helping ambitious brands elevate their digital presence with stunning, strategic solutions.
          </p>
          
          <div 
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Work Together</span>
              <span className="absolute inset-0 bg-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('work')}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">View Our Work</span>
              <span className="absolute inset-0 bg-accent/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
          </div>
        </div>
      </div>

      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <button 
          onClick={() => scrollToSection('services')}
          className="text-foreground/60 hover:text-accent transition-colors"
          aria-label="Scroll to services section"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
