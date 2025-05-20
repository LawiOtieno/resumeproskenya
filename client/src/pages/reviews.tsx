import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AnimatedHeader from "@/components/shared/AnimatedHeader";
import ScrollFadeSection from "@/components/shared/ScrollFadeSection";
import { testimonials } from "@/lib/data";

export default function Reviews() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Client Reviews | Resume Pros Kenya</title>
        <meta name="description" content="Read success stories from our clients. Real testimonials from professionals who landed their dream jobs with our help." />
      </Helmet>
      
      <ScrollFadeSection id="reviews" className="py-16 md:py-24 px-4 bg-[#f5f5f5]">
        <div className="container mx-auto">
          <AnimatedHeader className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">
            Hear from Our Success Stories!
          </AnimatedHeader>
          
          <p className="text-xl text-center mb-16">Real clients. Real transformations.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 duration-300">
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
                <p className="text-gray-700 italic">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeSection>
    </>
  );
}
