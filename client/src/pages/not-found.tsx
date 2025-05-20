import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";

export default function NotFound() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Resume Pros Kenya</title>
        <meta name="description" content="The page you're looking for doesn't exist. Navigate back to Resume Pros Kenya's homepage." />
      </Helmet>
      
      <div className="container mx-auto py-32 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <img 
            src="https://i.imgur.com/4oLdf55.jpg" 
            alt="Resume Pros Kenya Logo" 
            className="h-20 mx-auto mb-8"
          />
          
          <h1 className="text-8xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-3xl font-montserrat font-semibold mb-6">Page Not Found</h2>
          <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist or has been moved.</p>
          
          <div className="space-y-4">
            <p className="text-gray-600">Here are some helpful links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
                Go Back Home
              </Link>
              <Link href="/services" className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                View Our Services
              </Link>
              <Link href="/contact" className="border border-red-600 text-red-600 font-semibold py-3 px-6 rounded-lg hover:bg-red-50 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
