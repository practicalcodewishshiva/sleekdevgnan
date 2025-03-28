
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Redesign",
    category: "Web Design",
    description: "A complete overhaul of an outdated e-commerce platform, focusing on improved UX and conversion optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&h=300&q=80",
    tags: ["UI/UX", "E-commerce", "Shopify"],
  },
  {
    title: "Financial Analytics Dashboard",
    category: "Web Application",
    description: "Custom financial dashboard providing real-time analytics and reporting for investment professionals.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&h=300&q=80",
    tags: ["React", "Data Visualization", "FinTech"],
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description: "Patient-centered mobile application providing telemedicine services and health monitoring tools.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=300&q=80",
    tags: ["iOS", "Android", "Healthcare"],
  },
  {
    title: "Corporate Brand Refresh",
    category: "Branding",
    description: "Complete brand overhaul for a technology firm, including identity design, guidelines, and digital assets.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=300&q=80",
    tags: ["Branding", "Identity Design", "Strategy"],
  },
];

const categories = ["All", "Web Design", "Web Application", "Mobile Development", "Branding"];

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Featured Work</h2>
          <p className="text-lg text-foreground/70">
            Explore our portfolio of successful projects delivered with excellence and client satisfaction.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-accent hover:underline"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-accent hover:underline text-lg"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
