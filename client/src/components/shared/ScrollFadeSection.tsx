import { useEffect, useRef, ReactNode } from "react";

interface ScrollFadeSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function ScrollFadeSection({ children, id, className = "" }: ScrollFadeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add("visible");
          }
        });
      }, 
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    
    // Cleanup
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className={`section-fade ${className}`}
    >
      {children}
    </section>
  );
}
