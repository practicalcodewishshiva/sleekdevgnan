
import { Code, PenTool, Database, Smartphone, Puzzle, Terminal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedElement from "./AnimatedElement";

const services = [
  {
    title: "Frontend Development",
    description: "Modern, responsive interfaces built with React, Next.js, and TypeScript for exceptional user experiences.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design thinking that balances aesthetics with functionality for intuitive digital experiences.",
    icon: PenTool,
  },
  {
    title: "Backend Systems",
    description: "Scalable, secure API and database architecture using Node.js, Python, and cloud-native technologies.",
    icon: Database,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform and native mobile apps that provide seamless experiences across all devices.",
    icon: Smartphone,
  },
  {
    title: "System Architecture",
    description: "Thoughtful, scalable system design that supports growth and handles complex business requirements.",
    icon: Puzzle,
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated workflows, containerization, and infrastructure as code for reliable deployment pipelines.",
    icon: Terminal,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-secondary/30 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-accent/5 rounded-full filter blur-[100px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-purple-500/5 rounded-full filter blur-[100px] -z-10 opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <AnimatedElement animation="fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block py-1 px-4 bg-accent/20 rounded-full text-accent text-sm font-medium mb-4 border border-accent/30 backdrop-blur-sm">
              Our Expertise
            </div>
            <h2 className="mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Services That Drive Results
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              We provide end-to-end development solutions tailored to your business needs,
              helping you build exceptional digital products.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={index} animation="fade-in" delay={100 * index} className="h-full">
              <Card className="h-full border-border/50 bg-card/70 backdrop-blur-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 group-hover:opacity-100 group-hover:from-accent/10 group-hover:to-purple-500/10 transition-opacity duration-500 -z-10"></div>
                
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-500 relative overflow-hidden">
                    <service.icon className="w-6 h-6 text-accent relative z-10" />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500"></div>
                  </div>
                  <CardTitle className="font-display text-white group-hover:text-glow transition-all duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
