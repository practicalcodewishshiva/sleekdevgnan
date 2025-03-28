
import { Users, Award, Calendar } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { label: "Completed Projects", value: "150+", icon: Award },
    { label: "Happy Clients", value: "85+", icon: Users },
    { label: "Years of Experience", value: "8+", icon: Calendar },
  ];

  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    },
    {
      name: "Jamie Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    },
    {
      name: "Sam Rodriguez",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&h=150",
    },
    {
      name: "Taylor Wilson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150",
    },
  ];

  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">About Devgnan</h2>
          <p className="text-lg text-foreground/70">
            We're a team of passionate designers, developers, and digital strategists dedicated to crafting exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-foreground/70 mb-4">
              Founded in 2016, Devgnan has evolved from a small web design studio into a full-service digital agency. We believe that exceptional design and technology should be accessible to businesses of all sizes.
            </p>
            <p className="text-foreground/70 mb-4">
              Our mission is to help ambitious brands stand out in the digital landscape through strategic design thinking and technical excellence. We're proud to have worked with clients across various industries, from startups to established enterprises.
            </p>
            <p className="text-foreground/70">
              What sets us apart is our commitment to collaboration, creativity, and measurable results. We don't just build beautiful websites—we create digital solutions that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our talented team brings diverse skills and perspectives to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-foreground/70">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
