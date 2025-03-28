
import { Users, Award, Calendar, Code, Terminal, GitBranch } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const AboutSection = () => {
  const stats = [
    { label: "Projects Delivered", value: "150+", icon: Code },
    { label: "Happy Clients", value: "85+", icon: Users },
    { label: "Code Commits", value: "12K+", icon: GitBranch },
  ];

  const team = [
    {
      name: "Alex Morgan",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    },
    {
      name: "Jamie Chen",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    },
    {
      name: "Sam Rodriguez",
      role: "Backend Engineer",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&h=150",
    },
    {
      name: "Taylor Wilson",
      role: "DevOps Specialist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150",
    },
  ];

  return (
    <section id="about" className="section bg-secondary/30 dot-grid">
      <div className="container mx-auto">
        <AnimatedElement animation="fade-in">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block py-1 px-4 bg-accent/20 rounded-full text-accent text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="mb-4 font-display">The Minds Behind the Code</h2>
            <p className="text-lg text-foreground/70">
              We're a team of passionate developers, designers, and digital strategists dedicated to crafting exceptional digital experiences.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedElement animation="slide-left">
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-display">Our Approach</h3>
              <p className="text-foreground/70 mb-4">
                At Beyond Basics, we believe in the power of clean code, thoughtful design, and performance-driven development. We don't just build websites and apps – we create digital experiences that solve real problems.
              </p>
              <p className="text-foreground/70 mb-4">
                Our development process emphasizes collaboration, transparency, and attention to detail. We work closely with our clients to understand their unique needs and deliver solutions that exceed expectations.
              </p>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 mt-6">
                <div className="flex items-center">
                  <Terminal className="w-5 h-5 text-accent mr-2" />
                  <span className="text-sm font-mono text-foreground/80">$ npm create beyond-basics-app</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-right" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-sm text-center border border-border/50">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold mb-1 font-display gradient-text">{stat.value}</div>
                  <div className="text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>

        <div className="text-center mb-12">
          <AnimatedElement animation="fade-in">
            <h3 className="text-2xl font-semibold mb-4 font-display">Meet Our Team</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our talented team brings diverse skills and perspectives to every project.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <AnimatedElement key={index} animation="fade-in" delay={index * 100}>
              <div className="text-center group">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20 group-hover:border-accent transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold font-display">{member.name}</h4>
                <p className="text-foreground/70">{member.role}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
