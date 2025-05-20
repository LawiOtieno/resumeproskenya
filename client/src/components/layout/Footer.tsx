import { Link } from "wouter";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTiktok,
  FaTelegram, 
  FaPinterest
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img 
                src="https://i.imgur.com/4oLdf55.jpg" 
                alt="Resume Pros Kenya Logo" 
                className="h-14 mr-3 rounded"
              />
              <span className="text-2xl font-bold font-montserrat">
                Resume<span className="text-red-600">Pros</span>Kenya
              </span>
            </Link>
            <p className="mt-2 mb-4 text-gray-400">Elevating careers through professional Career Assistance.</p>
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://facebook.com/resumeproskenya" 
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="https://x.com/resumeproskenya" 
                className="w-9 h-9 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={16} />
              </a>
              <a 
                href="https://instagram.com/resumeproskenya" 
                className="w-9 h-9 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-full flex items-center justify-center transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a 
                href="https://linkedin.com/company/resumeproskenya" 
                className="w-9 h-9 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a 
                href="https://tiktok.com/@resumeproskenya" 
                className="w-9 h-9 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok size={16} />
              </a>
              <a 
                href="https://t.me/resumeproskenya" 
                className="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram size={16} />
              </a>
              {/* <a 
                href="https://pinterest.com/resumeproskenya" 
                className="w-9 h-9 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <FaPinterest size={16} />
              </a> */}
              <a 
                href="https://threads.net/@resumeproskenya" 
                className="w-9 h-9 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <SiThreads size={16} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div>
              <h4 className="font-montserrat font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Ruaraka, Nairobi, Kenya</li>
                <li><a href="mailto:ResumeProsKenya@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">ResumeProsKenya@gmail.com</a></li>
                <li><a href="https://wa.me/254706874794?text=Hello%20*ResumeProsKenya*%20%F0%9F%91%8B%F0%9F%8F%BB" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">+254 706874794</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Resume Pros Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}