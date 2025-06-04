
export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Mobile Car Detailing",
      description: "Complete interior and exterior detailing service that comes to your location. We bring professional equipment and expertise to ensure your car looks showroom fresh.",
      icon: "🚗",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Steam Wash Technology",
      description: "Revolutionary steam cleaning technology that sanitizes and cleans without harsh chemicals. Eco-friendly and safe for all vehicle surfaces.",
      icon: "🔥",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Paint Protection",
      description: "Professional ceramic coating and paint protection services to keep your vehicle's finish looking new for years to come.",
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Interior Sanitization",
      description: "Deep cleaning and sanitization of your vehicle's interior using steam technology to eliminate bacteria, odors, and allergens.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional mobile car care services designed to keep your vehicle looking its best. We use cutting-edge technology and eco-friendly methods.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 text-4xl">{service.icon}</div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};
