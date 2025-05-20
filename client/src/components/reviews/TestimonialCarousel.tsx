import { useState, useEffect, useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const slidesWrapperRef = useRef<HTMLDivElement>(null);
  const autoplayInterval = 5000; // 5 seconds
  const autoplayTimerRef = useRef<number | null>(null);

  // Set responsive slides per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setSlidesPerView(1); // Mobile: 1 slide at a time
      } else if (width < 1024) {
        setSlidesPerView(2); // Tablet: 2 slides at a time
      } else {
        setSlidesPerView(3); // Desktop: 3 slides at a time
      }
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, []);

  // Start autoplay
  useEffect(() => {
    autoplayTimerRef.current = window.setInterval(() => {
      goToNextSlide();
    }, autoplayInterval);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [currentIndex, testimonials.length, slidesPerView]);

  const goToSlide = (index: number) => {
    // Reset timer when manually changing slides
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      
      autoplayTimerRef.current = window.setInterval(() => {
        goToNextSlide();
      }, autoplayInterval);
    }
    
    // Ensure index is within bounds
    let newIndex = index;
    if (newIndex < 0) {
      newIndex = Math.max(0, testimonials.length - slidesPerView);
    } else if (newIndex > testimonials.length - slidesPerView) {
      newIndex = 0;
    }
    
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    goToSlide(currentIndex === testimonials.length - slidesPerView ? 0 : currentIndex + 1);
  };

  const goToPrevSlide = () => {
    goToSlide(currentIndex === 0 ? Math.max(0, testimonials.length - slidesPerView) : currentIndex - 1);
  };

  return (
    <div className="testimonial-carousel relative">
      {/* Testimonial Slides Container */}
      <div className="testimonial-slides overflow-hidden">
        <div 
          ref={slidesWrapperRef}
          className="testimonials-wrapper flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            width: `${(testimonials.length * 100) / slidesPerView}%`
          }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="testimonial-slide px-4"
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
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
                <p className="text-gray-700">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Carousel Controls */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.slice(0, testimonials.length - slidesPerView + 1).map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      {/* Arrow Navigation */}
      <button 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg focus:outline-none z-10"
        onClick={goToPrevSlide}
        aria-label="Previous testimonial"
      >
        <i className="fas fa-chevron-left text-gray-600"></i>
      </button>
      <button 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg focus:outline-none z-10"
        onClick={goToNextSlide}
        aria-label="Next testimonial"
      >
        <i className="fas fa-chevron-right text-gray-600"></i>
      </button>
    </div>
  );
}
