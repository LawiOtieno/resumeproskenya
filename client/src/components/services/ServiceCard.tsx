import { Link } from "wouter";

interface ServiceProps {
  service: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

export default function ServiceCard({ service }: ServiceProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello *ResumeProsKenya*, 👋 I would like you to offer me *${service.name}*: https://resumeproskenya.com/services/${service.id}`
  );

  return (
    <div className="service-card bg-white rounded-lg overflow-hidden shadow-lg">
      <img 
        src={service.image} 
        alt={service.name} 
        className="w-full h-48 object-cover" 
      />
      
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-700 mb-4">{service.description}</p>
        <p className="text-red-600 font-bold mb-4">KSh {service.price.toLocaleString()}</p>
        
        <div className="flex space-x-2">
          <Link href={`/services/${service.id}`}>
            <button className="flex-1 glow-on-hover font-medium">
              View Details
            </button>
          </Link>
          <a 
            href={`https://wa.me/254706874794?text=${whatsappMessage}`}
            className="flex-1 bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            <i className="fab fa-whatsapp mr-2"></i> Order
          </a>
        </div>
      </div>
    </div>
  );
}
