
import { Code, PenTool, BarChart, Smartphone, Puzzle, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web Design",
    description: "Stunning, functional websites that captivate your audience and drive conversions.",
    icon: PenTool,
  },
  {
    title: "Web Development",
    description: "Custom, responsive websites built with the latest technologies for optimal performance.",
    icon: Code,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance usability and delight your customers.",
    icon: Puzzle,
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that boost your online presence and ROI.",
    icon: BarChart,
  },
  {
    title: "Brand Strategy",
    description: "Comprehensive brand strategies that position your business for long-term success.",
    icon: Zap,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70">
            We provide end-to-end solutions tailored to your business needs,
            helping you stand out in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
