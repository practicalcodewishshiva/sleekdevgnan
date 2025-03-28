
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
    <section id="services" className="section bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedElement animation="fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block py-1 px-4 bg-accent/20 rounded-full text-accent text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="mb-4 font-display">Services That Drive Results</h2>
            <p className="text-lg text-foreground/70">
              We provide end-to-end development solutions tailored to your business needs,
              helping you build exceptional digital products.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={index} animation="fade-in" delay={100 * index} className="h-full">
              <Card className="card-hover h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-display">{service.title}</CardTitle>
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
