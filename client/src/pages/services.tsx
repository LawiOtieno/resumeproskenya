import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import AnimatedHeader from "@/components/shared/AnimatedHeader";
import ServiceCard from "@/components/services/ServiceCard";
import ScrollFadeSection from "@/components/shared/ScrollFadeSection";
import { services } from "@/lib/data";

export default function Services() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Resume Pros Kenya</title>
        <meta name="description" content="Professional CV writing, cover letters, LinkedIn profiles, and more. Find the right career service package tailored to your needs." />
      </Helmet>
      
      <ScrollFadeSection id="services" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <AnimatedHeader className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16">
            Our Services
          </AnimatedHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </ScrollFadeSection>
    </>
  );
}
