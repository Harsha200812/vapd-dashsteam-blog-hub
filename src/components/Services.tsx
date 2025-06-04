
export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Premium Mobile Detailing",
      description: "Comprehensive interior and exterior detailing delivered to your location with professional-grade equipment and meticulous attention to detail.",
      icon: "🚗",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Advanced Steam Technology",
      description: "Cutting-edge steam cleaning that sanitizes and cleans without harsh chemicals, providing eco-friendly care for all vehicle surfaces.",
      icon: "🔥",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Professional Paint Protection",
      description: "Premium ceramic coating and paint protection services designed to preserve your vehicle's finish and maintain showroom appearance.",
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Deep Interior Sanitization",
      description: "Thorough cleaning and sanitization using steam technology to eliminate bacteria, odors, and allergens for a healthy cabin environment.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              What We Offer
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Premium Services</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience professional mobile car care services powered by innovative technology and eco-friendly methods. We deliver exceptional results that exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-emerald-100">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent group-hover:from-emerald-900/80 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 text-4xl bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors inline-flex items-center group">
                  Learn More 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Request Your Quote
          </button>
        </div>
      </div>
    </section>
  );
};
