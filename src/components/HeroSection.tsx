
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, ArrowDown } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

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
    <section className="relative min-h-screen flex items-center dot-grid overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className={`absolute top-1/3 left-1/4 w-72 h-72 bg-accent/30 rounded-full filter blur-3xl transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-50 scale-100' : 'opacity-0 scale-75'}`}
          style={{ animationDelay: "300ms" }}
        ></div>
        <div 
          className={`absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl transition-all duration-1500 ease-in-out ${isLoaded ? 'opacity-40 scale-100' : 'opacity-0 scale-75'}`}
          style={{ animationDelay: "600ms" }}
        ></div>
        <div 
          className={`absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl transition-all duration-2000 ease-in-out ${isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-75'}`}
          style={{ animationDelay: "900ms" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="slide-up" delay={200} duration={800}>
            <div className="flex items-center justify-center mb-8">
              <div className="py-1 px-4 bg-accent/20 rounded-full text-accent text-sm font-medium border border-accent/30 backdrop-blur-sm animate-pulse">
                Code. Design. Innovate.
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-up" delay={400} duration={800}>
            <h1 className="text-center font-display font-bold">
              <span className="gradient-text">DevGnan</span> for <br />Modern Web Development
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={600} duration={1000}>
            <p className="mt-6 text-xl md:text-2xl text-foreground/70 text-center max-w-2xl mx-auto">
              We craft high-performance digital experiences that elevate your brand through clean code and stunning design.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={800} duration={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(145,70,255,0.6)]"
              >
                <span className="relative z-10">Start a Project</span>
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('work')}
                className="relative overflow-hidden border-accent/40 text-accent hover:text-accent/90 transition-all duration-500 hover:border-accent"
              >
                <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>View Our Work</span>
                <span className="absolute inset-0 bg-accent/10 transform scale-y-0 hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
              </Button>
            </div>
          </AnimatedElement>

          {/* Code snippet block */}
          <AnimatedElement animation="fade-in" delay={1000} duration={1200}>
            <div className="mt-16 bg-card p-4 rounded-lg border border-border max-w-xl mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-foreground/60">App.tsx</div>
              </div>
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="text-foreground/80 leading-relaxed">
                  <span className="text-blue-400">import</span> <span className="text-green-400">React</span> <span className="text-blue-400">from</span> <span className="text-orange-400">'react'</span>;<br />
                  <br />
                  <span className="text-purple-400">function</span> <span className="text-yellow-400">App</span>() &#123;<br />
                  &nbsp;&nbsp;<span className="text-blue-400">return</span> (<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">div</span> <span className="text-orange-400">className</span>=<span className="text-orange-400">"app"</span>&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">h1</span> <span className="text-orange-400">className</span>=<span className="text-orange-400">"title"</span>&gt;<span className="code-highlight text-foreground">Hello DevGnan!</span>&lt;/<span className="text-green-400">h1</span>&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-green-400">div</span>&gt;<br />
                  &nbsp;&nbsp;);<br />
                  &#125;<br />
                  <br />
                  <span className="text-blue-400">export</span> <span className="text-blue-400">default</span> <span className="text-yellow-400">App</span>;
                </code>
              </pre>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <button 
          onClick={() => scrollToSection('services')}
          className="text-foreground/40 hover:text-accent transition-colors duration-300 hover:scale-110 transform animate-bounce"
          aria-label="Scroll to services section"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
