
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Users, ArrowRight } from "lucide-react";
import AnimatedElement from "./AnimatedElement";
import { toast } from "@/components/ui/use-toast";

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: string;
  description: string;
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    postedDate: "2023-12-15",
    description: "We're looking for a senior React developer to build scalable, performant web applications."
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    postedDate: "2023-12-10",
    description: "Create intuitive user experiences and stunning interfaces for our clients' projects."
  },
  {
    id: 3,
    title: "Project Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    postedDate: "2023-12-05",
    description: "Oversee project timelines, coordinate teams, and ensure successful delivery of client projects."
  }
];

const CareersSection = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const handleApply = (job: JobPosition) => {
    toast({
      title: "Application Started",
      description: `You've started an application for ${job.title}`,
      duration: 5000,
    });
    setSelectedJob(job);
  };

  return (
    <section id="careers" className="section py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-[100px]"></div>
        <div className="dot-grid w-full h-full opacity-10"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        <AnimatedElement animation="fade-in" className="mb-12 text-center">
          <h2 className="text-4xl font-display font-bold mb-4 relative inline-block">
            <span className="gradient-text">Careers</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our talented team of creators, innovators, and problem-solvers shaping the digital future.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <AnimatedElement animation="slide-up" delay={100} className="lg:col-span-3">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden group hover:border-accent/50 transition-all duration-300">
              <CardHeader className="bg-card/70 backdrop-blur-sm">
                <CardTitle className="flex justify-between items-center">
                  <span>Open Positions</span>
                  <span className="text-sm font-normal text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {jobPositions.length} open roles
                  </span>
                </CardTitle>
                <CardDescription>
                  Discover your next career opportunity
                </CardDescription>
              </CardHeader>
              <div className="divide-y divide-border/40 max-h-[560px] overflow-y-auto">
                {jobPositions.map((job, index) => (
                  <AnimatedElement 
                    key={job.id} 
                    animation="fade-in" 
                    delay={200 + (index * 100)}
                    className="block"
                  >
                    <div 
                      className={`p-6 transition-all duration-300 hover:bg-card/80 cursor-pointer relative ${selectedJob?.id === job.id ? 'bg-accent/5 border-l-4 border-accent' : ''}`}
                      onClick={() => setSelectedJob(job)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                        <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">
                            {job.type}
                          </span>
                          <span className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-accent/80" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-accent/80" />
                          <span>Posted {formatDate(job.postedDate)}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                      <Button 
                        size="sm" 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(job);
                        }}
                        className="bg-accent hover:bg-accent/90 transition-all duration-300"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </Card>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="fade-in" delay={300}>
          <div className="text-center">
            <h3 className="text-2xl font-display font-semibold mb-6">Why Join DevGnan?</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <AnimatedElement animation="slide-up" delay={400} className="p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/40 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-accent/10 rounded-lg text-accent">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-display font-semibold mb-2">Collaborative Culture</h4>
                <p className="text-sm text-muted-foreground">Work with talented professionals in a supportive, inclusive environment.</p>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={500} className="p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/40 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-accent/10 rounded-lg text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                </div>
                <h4 className="font-display font-semibold mb-2">Innovation & Growth</h4>
                <p className="text-sm text-muted-foreground">Continuous learning, challenging projects, and cutting-edge technologies.</p>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={600} className="p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/40 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-accent/10 rounded-lg text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h4 className="font-display font-semibold mb-2">Competitive Benefits</h4>
                <p className="text-sm text-muted-foreground">Flexible work arrangements, health benefits, and professional development.</p>
              </AnimatedElement>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default CareersSection;
