
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealSections = () => {
      const sections = sectionsRef.current?.querySelectorAll('.reveal');
      if (!sections) return;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
          section.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealSections);
    // Initial check for sections in view on load
    revealSections();

    return () => {
      window.removeEventListener('scroll', revealSections);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" ref={sectionsRef}>
      <Navbar />
      <HeroSection />
      <div className="reveal">
        <ServicesSection />
      </div>
      <div className="reveal">
        <WorkSection />
      </div>
      <div className="reveal">
        <AboutSection />
      </div>
      <div className="reveal">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
