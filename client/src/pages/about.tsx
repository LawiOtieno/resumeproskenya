import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AnimatedHeader from "@/components/shared/AnimatedHeader";
import ScrollFadeSection from "@/components/shared/ScrollFadeSection";

export default function About() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Resume Pros Kenya</title>
        <meta name="description" content="Learn about Resume Pros Kenya, our journey, mission and why we're passionate about helping professionals excel in their career journeys." />
      </Helmet>
      
      <ScrollFadeSection id="about" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <AnimatedHeader className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-16">
            Our Story – Your Career Journey Partner
          </AnimatedHeader>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <p className="mb-6 text-lg">At Resume Pros Kenya, we believe that every professional deserves a resumé that truly reflects their skills, experience, and potential. A well-crafted resumé is more than just a document—it's a powerful tool that can open doors to life-changing opportunities. That's why we are dedicated to helping job seekers stand out in today's competitive job market.</p>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-montserrat font-semibold mb-3">Meet Our Founder</h3>
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  {/* <img 
                    src="https://i.imgur.com/4oLdf55.jpg" 
                    alt="Lawrence Otieno - CEO & Co-Founder" 
                    className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4"
                  /> */}
                  <div>
                    <h4 className="text-xl font-montserrat font-medium text-red-600">Lawrence Otieno</h4>
                    <p className="text-gray-700 font-medium mb-2">CEO & Co-Founder</p>
                    <p className="text-gray-600">With a background in Mathematics, <span className="text-red-600">Career Assistance</span>, Website Development, and grassroots community outreach, Lawrence leads our team with a passion for closing the career gap. His hands-on approach ensures every client—from students to excutives/professionals—receive personalized support and innovative solutions.</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-montserrat font-semibold mb-4">Our Journey</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-circle text-primary-red text-xs mt-1.5 mr-3"></i>
                  <p>We started with a passion for empowering job seekers, recognizing that many talented professionals struggle to secure interviews due to poorly structured resumés.</p>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-primary-red text-xs mt-1.5 mr-3"></i>
                  <p>Our mission was clear: to provide high-quality, customized resumés, cover letters, LinkedIn profiles, and portfolio websites that align with modern hiring trends.</p>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-primary-red text-xs mt-1.5 mr-3"></i>
                  <p>What began as a small initiative has now grown into a trusted career service, helping clients across Kenya and internationally.</p>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Resume Pros Kenya Team" 
                className="rounded-lg shadow-xl w-full"
              />
              
              <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                <h3 className="text-2xl font-montserrat font-semibold mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="text-primary-red mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p>Tailored Career Documents – We customize every resumé to highlight your strengths and meet industry standards.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary-red mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p>Fast Turnaround Time – Get your resumé within 3 to 72 hours without compromising on quality.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary-red mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p>Proven Success – Our services boast a 98% interview success rate, helping professionals land their dream jobs.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary-red mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p>Global Reach – We've worked with clients in Kenya, USA, UK, Canada, UAE, Ghana, Nigeria, and Egypt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg font-montserrat italic">We are more than just a resumé-writing service—we are career transformation specialists. Whether you're a fresh graduate, a seasoned professional, or switching careers, we're here to craft a winning resumé that helps you land your next opportunity. <span className="font-semibold">Your success is our priority! 🚀</span></p>
            
            <div className="mt-8">
              <h3 className="text-xl font-montserrat font-semibold mb-4">Our Mission</h3>
              <p className="max-w-3xl mx-auto">Our mission is to deliver fast, reliable, and personalized career assistance that helps you stand out in a competitive market.</p>
            </div>
          </div>
        </div>
      </ScrollFadeSection>
    </>
  );
}
