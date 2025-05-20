import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useRoute, Link } from "wouter";
import AnimatedHeader from "@/components/shared/AnimatedHeader";
import ScrollFadeSection from "@/components/shared/ScrollFadeSection";
import { services } from "@/lib/data";

export default function ServiceDetails() {
  const [, params] = useRoute<{ id: string }>("/services/:id");
  const serviceId = params?.id;
  
  const service = services.find(s => s.id === serviceId);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">Sorry, the service you're looking for doesn't exist.</p>
        <Link to="/services">
          <button className="bg-primary-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Back to Services
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.name} | Resume Pros Kenya</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      <ScrollFadeSection className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            
            <div className="lg:w-1/2">
              <AnimatedHeader className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                {service.name}
              </AnimatedHeader>
              
              <p className="text-xl text-primary-red font-bold mb-6">
                KSh {service.price.toLocaleString()}
              </p>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg mb-6">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-3">What You'll Get</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-primary-red mt-1 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Delivery Time</h3>
                <p>{service.deliveryTime}</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Process</h3>
                <ol className="space-y-2 list-decimal pl-4">
                  {service.process.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <div className="mt-8">
                <a 
                  href={`https://wa.me/254706874794?text=Hello%20*ResumeProsKenya*,%20👋%20I%20would%20like%20you%20to%20offer%20me%20*${encodeURIComponent(service.name)}*:%20https://resumeproskenya.vercel.app/services/${service.id}`}
                  className="bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md inline-flex items-center transition-colors"
                >
                  <i className="fab fa-whatsapp mr-2"></i> Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/services">
              <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors">
                <i className="fas fa-arrow-left mr-2"></i> Back to Services
              </button>
            </Link>
          </div>
        </div>
      </ScrollFadeSection>
    </>
  );
}
