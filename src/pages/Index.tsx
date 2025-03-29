
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CareersSection from "@/components/CareersSection";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    // Set document title
    document.title = "DevGnan | Modern Web Development";
    
    // Mark page as loaded for animations
    setTimeout(() => {
      setPageLoaded(true);
    }, 300);
    
    // Smooth scroll setup for anchor links with improved behavior
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          // Adding a slight delay for a more polished feel
          setTimeout(() => {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }, 50);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Enhanced scroll animation for all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            const htmlElement = entry.target as HTMLElement;
            htmlElement.style.opacity = '1';
            
            // Add staggered animation to children
            const animElements = entry.target.querySelectorAll('.stagger-anim');
            animElements.forEach((el, index) => {
              const htmlEl = el as HTMLElement;
              setTimeout(() => {
                htmlEl.classList.add('animate-fade-in');
                htmlEl.style.opacity = '1';
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "-100px 0px" }
    );
    
    // First set all sections to invisible except hero
    document.querySelectorAll('section').forEach((section) => {
      if (section.id !== 'hero') {
        const htmlSection = section as HTMLElement;
        htmlSection.style.opacity = '0';
        observer.observe(section);
      }
    });
    
    // Add parallax scroll effect
    const handleParallaxScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-scroll');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.1';
        const htmlElement = element as HTMLElement;
        const yPos = scrollY * parseFloat(speed);
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallaxScroll);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleParallaxScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      className={`min-h-screen flex flex-col overflow-x-hidden bg-background transition-opacity duration-700 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`} 
      ref={sectionsRef}
    >
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <CareersSection />
      <ContactSection />
      <Footer />
      
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-accent via-purple-500 to-indigo-500"
          style={{
            width: '0%',
            transition: 'width 0.1s ease-out',
            willChange: 'width'
          }}
          id="scroll-progress"
        ></div>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          // Add scroll progress indicator
          window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('scroll-progress').style.width = scrolled + '%';
          });
        `
      }} />
    </div>
  );
};

export default Index;
