
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Code, ArrowDown, ChevronRight } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Text reveal animation
    if (textRef.current) {
      const spans = textRef.current.querySelectorAll('span');
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('revealed');
        }, 100 * index);
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center dot-grid overflow-hidden">
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

      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-5 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(145,70,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(145,70,255,0.15)_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="slide-up" delay={200} duration={800}>
            <div className="flex items-center justify-center mb-8 perspective">
              <div className="py-1 px-4 bg-accent/20 rounded-full text-accent text-sm font-medium border border-accent/30 backdrop-blur-sm hover-3d transition-all duration-500 hover:scale-105 hover:bg-accent/30">
                <span className="text-glow">Code. Design. Innovate.</span>
              </div>
            </div>
          </AnimatedElement>

          <div className="text-center mb-8" ref={textRef}>
            <h1 className="inline-block font-display font-bold overflow-hidden">
              <span className="text-reveal">
                <span className="inline-block">
                  <span className="gradient-text glow-pulse">DevGnan</span>
                </span>{" "}
                <span className="inline-block">for</span>{" "}
                <span className="inline-block">Modern</span>{" "}
                <span className="inline-block">Web</span>{" "}
                <span className="inline-block">Development</span>
              </span>
            </h1>
          </div>
          
          <AnimatedElement animation="fade-in" delay={600} duration={1000}>
            <p className="mt-6 text-xl md:text-2xl text-foreground/70 text-center max-w-2xl mx-auto leading-relaxed">
              We craft high-performance digital experiences that elevate your brand through 
              <span className="text-accent font-medium px-1">clean code</span> and 
              <span className="text-accent font-medium px-1">stunning design</span>.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={800} duration={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(145,70,255,0.6)] hover:scale-105"
              >
                <span className="relative z-10">Start a Project</span>
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('work')}
                className="relative overflow-hidden border-accent/40 text-accent hover:text-accent/90 transition-all duration-500 hover:border-accent hover:bg-accent/5 group"
              >
                <Code className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>View Our Work</span>
                <span className="absolute inset-0 bg-accent/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
              </Button>
            </div>
          </AnimatedElement>

          {/* Code snippet block with improved design */}
          <AnimatedElement animation="fade-in" delay={1000} duration={1200}>
            <div className="mt-16 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-accent/20 max-w-xl mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(145,70,255,0.2)] relative group">
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-accent/50 via-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"></div>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                <div className="text-sm text-foreground/60 flex items-center">
                  <Code className="w-4 h-4 mr-1.5" />
                  <span>App.tsx</span>
                </div>
              </div>
              <pre className="text-sm font-mono overflow-x-auto scrollbar-none p-2 rounded bg-background/50">
                <code className="text-foreground/80 leading-loose">
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
              <div className="absolute -bottom-1.5 left-0 right-0 h-6 bg-gradient-to-t from-card/80 to-transparent"></div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <button 
          onClick={() => scrollToSection('services')}
          className="text-foreground/40 hover:text-accent transition-colors duration-300 hover:scale-110 transform p-3 relative group"
          aria-label="Scroll to services section"
        >
          <ArrowDown className="w-8 h-8 animate-bounce" />
          <span className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300"></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
