
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fade-in font-display font-bold">
            Crafting <span className="gradient-text">Digital Experiences</span> That Inspire
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-foreground/80 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            We're a creative design agency helping ambitious brands elevate their digital presence with stunning, strategic solutions.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Button size="lg" onClick={() => scrollToSection('contact')}>
              Let's Work Together
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('work')}>
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('services')}
          className="text-foreground/60 hover:text-accent transition-colors"
          aria-label="Scroll to services section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
