
import { useState } from "react";
import { ArrowRight, Code, GitBranch, Globe } from "lucide-react";
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
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="section bg-background">
      <div className="container mx-auto">
        <AnimatedElement animation="fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block py-1 px-4 bg-accent/20 rounded-full text-accent text-sm font-medium mb-4">
              Our Portfolio
            </div>
            <h2 className="mb-4 font-display">Recent Projects</h2>
            <p className="text-lg text-foreground/70">
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
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? "bg-accent text-white"
                    : "bg-secondary hover:bg-secondary/80 text-foreground/70"
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
              <Card className="overflow-hidden card-hover bg-card/50 backdrop-blur-sm border-border/50">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full py-1 px-3 text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-secondary/50 text-foreground/70 border-border/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-display">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-accent hover:underline"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="rounded-full w-8 h-8 p-0">
                        <Code className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full w-8 h-8 p-0">
                        <Globe className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full w-8 h-8 p-0">
                        <GitBranch className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        <div className="text-center mt-12">
          <AnimatedElement animation="fade-in" delay={600}>
            <Button variant="outline" className="border-accent/50 text-accent">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
