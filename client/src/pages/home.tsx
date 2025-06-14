import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ScrollSection from "@/components/scroll-section";
import PersistentMouse from "@/components/persistent-mouse";
import Footer from "@/components/footer";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      // Debounce scroll events for better performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = ['scroll1', 'scroll2', 'scroll3', 'final'];
        const newVisibleSections = new Set<string>();

        sections.forEach(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementVisible = 150;
            
            if (rect.top < window.innerHeight - elementVisible) {
              newVisibleSections.add(sectionId);
            }
          }
        });

        setVisibleSections(newVisibleSections);
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="section-content" style={{ overflow: 'visible', position: 'relative' }}>
      {/* Homepage Section */}
      <section className="min-h-screen flex flex-col" id="homepage">
        <Navigation />
        <HeroSection />
      </section>

      {/* Scroll Sections */}
      <ScrollSection
        id="scroll1"
        text="Keep scrolling"
        isVisible={visibleSections.has('scroll1')}
      />

      <ScrollSection
        id="scroll2"
        text="Again..."
        isVisible={visibleSections.has('scroll2')}
      />

      <ScrollSection
        id="scroll3"
        text="One last effort"
        isVisible={visibleSections.has('scroll3')}
      />

      <ScrollSection
        id="final"
        text="Here at Welfare Capital, this is what we do - we scroll, and scroll, all day, every day."
        isVisible={visibleSections.has('final')}
        isFinal={true}
      />

      {/* Test: Mouse persistante pendant le scroll */}
      <PersistentMouse />
    </div>
  );
}
