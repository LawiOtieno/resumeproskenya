import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Hero from "@/components/home/Hero";
import KeyValuePoints from "@/components/home/KeyValuePoints";
import ScrollFadeSection from "@/components/shared/ScrollFadeSection";
import AnimatedHeader from "@/components/shared/AnimatedHeader";
import { services, testimonials } from "@/lib/data";

export default function Home() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Select only 3 services for preview
  const featuredServices = services.slice(0, 3);
  
  // Select only 3 testimonials for preview
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Resume Pros Kenya | Professional Career Assistance</title>
        <meta name="description" content="Expertly crafted CVs, cover letters, LinkedIn profiles, and portfolio websites designed to get you noticed globally. Get your dream job with Resume Pros Kenya." />
      </Helmet>
      
      <ScrollFadeSection id="home" className="py-16 md:py-24 px-4 bg-[#f5f5f5]">
        <div className="container mx-auto">
          <Hero />
          <KeyValuePoints />
          
          {/* Featured Services Section */}
          <div className="mt-24">
            <AnimatedHeader className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">
              Our Services
            </AnimatedHeader>
            <p className="text-center text-lg mb-10">
              We offer professional career document writing services to help you stand out.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {featuredServices.map((service) => (
                <div key={service.id} className="service-card bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-48 object-cover" 
                  />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">{service.description}</p>
                    <p className="text-red-600 font-bold mb-4">KSh {service.price.toLocaleString()}</p>
                    <div className="flex space-x-2">
                      <Link href={`/services/${service.id}`}>
                        <button className="flex-1 glow-on-hover font-medium">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Link href="/services" className="inline-block py-3 px-6 bg-black text-white font-montserrat font-medium rounded-lg hover:bg-gray-800 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
          
          {/* Featured Testimonials Section */}
          <div className="mt-24">
            <AnimatedHeader className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">
              Client Reviews
            </AnimatedHeader>
            <p className="text-center text-lg mb-10">
              Hear what our satisfied clients have to say about our services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <div className="text-yellow-400 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i 
                            key={i} 
                            className={`fas ${i < Math.floor(testimonial.rating) ? 'fa-star' : i < testimonial.rating ? 'fa-star-half-alt' : 'far fa-star'}`}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 line-clamp-4">{testimonial.review}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Link href="/reviews" className="inline-block py-3 px-6 bg-black text-white font-montserrat font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Read More Reviews
              </Link>
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div className="text-center mt-16">
            <p className="text-lg">Explore our services, read client success stories, learn our story, or get in touch!</p>
          </div>
        </div>
      </ScrollFadeSection>
    </>
  );
}
