import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import SocialMediaButton from "@/components/shared/SocialMediaButton";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when changing pages
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white shadow-md transition-shadow ${
      isScrolled ? "shadow-lg" : ""
    }`}>
      {/* Upper Nav Bar */}
      <div className="bg-black text-white py-2 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <a href="mailto:ResumeProsKenya@gmail.com" className="flex items-center mr-4 text-sm hover:text-red-500 transition-colors">
              <FaEnvelope className="mr-2" size={14} />
              ResumeProsKenya@gmail.com
            </a>
            <a href="https://wa.me/254706874794" className="flex items-center text-sm hover:text-red-500 transition-colors">
              <FaWhatsapp className="mr-2" size={14} />
              +254 706874794
            </a>
          </div>
          
          {/* Social Media Icons with Neumorphic Design */}
          <div className="flex space-x-3">
            <SocialMediaButton platform="facebook" url="https://facebook.com/resumeproskenya" />
            <SocialMediaButton platform="twitter" url="https://x.com/resumeproskenya" />
            <SocialMediaButton platform="instagram" url="https://instagram.com/resumeproskenya" />
            <SocialMediaButton platform="linkedin" url="https://linkedin.com/company/resumeproskenya" />
            <SocialMediaButton platform="tiktok" url="https://tiktok.com/@resumeproskenya" />
          </div>
        </div>
      </div>
      
      {/* Main Navigation Bar */}
      <div className="container mx-auto py-3 px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="https://i.imgur.com/4oLdf55.jpg" 
              alt="Resume Pros Kenya Logo" 
              className="h-12 mr-3"
            />
            <span className="text-2xl font-bold font-montserrat text-black hidden sm:inline-block">
              Resume<span className="text-red-600">Pros</span>Kenya
            </span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
          
          {/* Navigation Links - Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className={`font-montserrat font-medium py-2 hover:text-red-600 transition-colors ${location === '/' ? 'text-red-600' : ''}`}>Home</Link></li>
              <li><Link href="/services" className={`font-montserrat font-medium py-2 hover:text-red-600 transition-colors ${location === '/services' ? 'text-red-600' : ''}`}>Our Services</Link></li>
              <li><Link href="/reviews" className={`font-montserrat font-medium py-2 hover:text-red-600 transition-colors ${location === '/reviews' ? 'text-red-600' : ''}`}>Clients Reviews</Link></li>
              <li><Link href="/about" className={`font-montserrat font-medium py-2 hover:text-red-600 transition-colors ${location === '/about' ? 'text-red-600' : ''}`}>About Us</Link></li>
              <li><Link href="/contact" className={`font-montserrat font-medium py-2 hover:text-red-600 transition-colors ${location === '/contact' ? 'text-red-600' : ''}`}>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Menu - Collapsed */}
        <nav className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}>
          <ul className="flex flex-col space-y-2 py-2">
            <li><Link href="/" className={`block font-montserrat font-medium py-2 px-3 hover:text-red-600 transition-colors ${location === '/' ? 'text-red-600' : ''}`}>Home</Link></li>
            <li><Link href="/services" className={`block font-montserrat font-medium py-2 px-3 hover:text-red-600 transition-colors ${location === '/services' ? 'text-red-600' : ''}`}>Our Services</Link></li>
            <li><Link href="/reviews" className={`block font-montserrat font-medium py-2 px-3 hover:text-red-600 transition-colors ${location === '/reviews' ? 'text-red-600' : ''}`}>Clients Reviews</Link></li>
            <li><Link href="/about" className={`block font-montserrat font-medium py-2 px-3 hover:text-red-600 transition-colors ${location === '/about' ? 'text-red-600' : ''}`}>About Us</Link></li>
            <li><Link href="/contact" className={`block font-montserrat font-medium py-2 px-3 hover:text-red-600 transition-colors ${location === '/contact' ? 'text-red-600' : ''}`}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
