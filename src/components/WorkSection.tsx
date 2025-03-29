
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Code, GitBranch, Globe, Plus, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300&q=80",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A high-performance e-commerce solution with headless CMS, payment processing, and inventory management.",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=500&h=300&q=80",
    tags: ["Next.js", "GraphQL", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Health & Wellness App",
    category: "Mobile Development",
    description: "A cross-platform mobile application for tracking fitness, nutrition, and mental wellness with social features.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=500&h=300&q=80",
    tags: ["React Native", "Firebase", "Redux", "HealthKit"],
  },
  {
    title: "SaaS Marketing Website",
    category: "Web Design",
    description: "A conversion-focused website with interactive elements, optimized for lead generation and user engagement.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&h=300&q=80",
    tags: ["Figma", "Three.js", "GSAP", "Framer Motion"],
  },
];

const categories = ["All", "Web Development", "Web Application", "Mobile Development", "Web Design"];

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Parallax effect for cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      projectRefs.current.forEach((card, index) => {
        if (card && hoveredProject === index) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredProject]);

  return (
    <section id="work" className="section bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full filter blur-[80px] opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <AnimatedElement animation="fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block py-1 px-4 bg-accent/20 rounded-full text-accent text-sm font-medium mb-4 border border-accent/30 backdrop-blur-sm">
              Our Portfolio
            </div>
            <h2 className="mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Recent Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Explore our case studies showcasing innovative solutions and exceptional results for our clients.
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fade-in" delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-white shadow-[0_0_15px_rgba(145,70,255,0.3)]"
                    : "bg-secondary/80 hover:bg-secondary text-foreground/70 hover:text-foreground/90"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedElement key={index} animation="fade-in" delay={300 + (index * 100)}>
              <div 
                ref={el => projectRefs.current[index] = el}
                onMouseEnter={() => setHoveredProject(index)} 
                onMouseLeave={() => {
                  setHoveredProject(null);
                  if (projectRefs.current[index]) {
                    projectRefs.current[index]!.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                  }
                }}
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
              >
                <Card className="overflow-hidden bg-card/70 backdrop-blur-sm border-border/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] group">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ transform: 'translateZ(20px)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full py-1 px-3 text-sm font-medium border border-accent/20">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-6" style={{ transform: 'translateZ(40px)' }}>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-secondary/50 text-foreground/80 border-border/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-display group-hover:text-glow transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <a 
                        href="#" 
                        className="inline-flex items-center text-accent hover:text-accent/90 transition-colors duration-300 group/link"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="rounded-full w-8 h-8 p-0 hover:bg-accent/10 hover:text-accent transition-colors duration-300">
                          <Code className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-full w-8 h-8 p-0 hover:bg-accent/10 hover:text-accent transition-colors duration-300">
                          <Globe className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-full w-8 h-8 p-0 hover:bg-accent/10 hover:text-accent transition-colors duration-300">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <div className="text-center mt-12">
          <AnimatedElement animation="fade-in" delay={600}>
            <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 group-hover:text-glow transition-all duration-300">View All Projects</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="absolute inset-0 bg-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
