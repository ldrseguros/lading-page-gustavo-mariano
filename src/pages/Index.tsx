import { useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CasesSection from "@/components/CasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InsuranceSection from "@/components/InsuranceSection";
import StrategicAnalysisSection from "@/components/StrategicAnalysisSection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const insuranceRef = useRef<HTMLDivElement>(null);
  const strategicAnalysisRef = useRef<HTMLDivElement>(null);

  // Função para scroll suave para seções
  const scrollToSection = (sectionId: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      cases: casesRef,
      testimonials: testimonialsRef,
      videos: videosRef,
      contact: contactRef,
      top: topRef,
      insurance: insuranceRef,
      "strategic-analysis": strategicAnalysisRef,
    };

    const sectionRef = sectionRefs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll automático para a seção "about" quando o botão na hero é clicado
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animação de fade-in para as seções ao scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-fade");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          section.classList.add("visible");
        }
      });
    };

    // Inicializa a verificação
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden" ref={topRef}>
      <Navbar scrollToSection={scrollToSection} />

      <Hero scrollToSection={scrollToAbout} />

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={casesRef}>
        <CasesSection />
      </div>

      <div ref={testimonialsRef}>
        <TestimonialsSection />
      </div>

      <div ref={videosRef}>
        <VideoSection />
      </div>

      <div ref={insuranceRef}>
        <InsuranceSection />
      </div>

      <div ref={strategicAnalysisRef}>
        <StrategicAnalysisSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer />

      {/* CTA flutuante sempre visível */}
      <FloatingCTA />
    </div>
  );
};

export default Index;
