
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight, Code, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border/50">
      <div className="container mx-auto">
        <AnimatedElement animation="fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Code className="w-6 h-6 text-accent mr-2" />
                Beyond<span className="text-accent">Basics</span>
              </h3>
              <p className="text-foreground/70 mb-6">
                We build exceptional web applications with modern technologies and best practices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    Frontend Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    Backend Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    Mobile Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    System Architecture
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Subscribe</h4>
              <p className="text-foreground/70 mb-4">
                Get the latest updates on web development, design, and technology.
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-background border-border/50"
                />
                <Button size="icon" className="bg-accent hover:bg-accent/90">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedElement>

        <div className="border-t border-border/20 pt-8 text-center text-foreground/60 text-sm">
          <AnimatedElement animation="fade-in">
            <p className="flex items-center justify-center">
              © {currentYear} BeyondBasics. Built with <Heart className="w-4 h-4 text-accent mx-1" /> and Modern Web Tech.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
