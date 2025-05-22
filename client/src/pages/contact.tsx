import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AnimatedHeader from "@/components/shared/AnimatedHeader";
import ScrollFadeSection from "@/components/shared/ScrollFadeSection";
import SocialMediaButton from "@/components/shared/SocialMediaButton";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Resume Pros Kenya</title>
        <meta name="description" content="Get in touch with Resume Pros Kenya. Let's craft your success story together!" />
      </Helmet>
      
      <ScrollFadeSection id="contact" className="py-16 md:py-24 px-4 bg-[#f5f5f5]">
        <div className="container mx-auto">
          <AnimatedHeader className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">
            Let's Get in Touch!
          </AnimatedHeader>
          
          <p className="text-xl text-center mb-8">Your dream job is just a message away.</p>
          <p className="text-center mb-12">Fill out our simple form below, or drop us a message directly on WhatsApp!</p>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-montserrat font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary-red mr-4 mt-1">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium">Email</h4>
                      <a href="mailto:ResumeProsKenya@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-red transition-colors">ResumeProsKenya@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-red mr-4 mt-1">
                      <FaWhatsapp className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium">WhatsApp</h4>
                      <a href="https://wa.me/254706874794?text=Hello%20*ResumeProsKenya*%20%F0%9F%91%8B%F0%9F%8F%BB" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-red transition-colors">+254 706874794</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-red mr-4 mt-1">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-medium">Location</h4>
                      <p className="text-gray-700">Ruaraka, Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-montserrat font-semibold mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-3 items-center">
                    <SocialMediaButton platform="facebook" url="https://facebook.com/resumeproskenya" />
                    <SocialMediaButton platform="twitter" url="https://x.com/resumeproskenya" />
                    <SocialMediaButton platform="instagram" url="https://instagram.com/resumeproskenya" />
                    <SocialMediaButton platform="linkedin" url="https://linkedin.com/company/resumeproskenya" />
                    <SocialMediaButton platform="tiktok" url="https://tiktok.com/@resumeproskenya" />
                    <SocialMediaButton platform="telegram" url="https://t.me/resumeproskenya" />
                    <SocialMediaButton platform="pinterest" url="https://pinterest.com/resumeproskenya" />
                    <SocialMediaButton platform="threads" url="https://threads.net/@resumeproskenya" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                {/* Google Form Embed */}
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLScO6EGcLu0Wty0MHXSSNQIjM4XtkXFW-_cdw3-4BSHqDaMc2Q/viewform?embedded=true" 
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  className="rounded"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-lg">We're here to help you shine. Reach out and let's craft your success story together!</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollFadeSection>
    </>
  );
}
