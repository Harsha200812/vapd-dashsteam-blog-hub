
export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 min-h-screen flex items-center"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Professional Mobile
            <span className="text-emerald-300 block">Auto Detailing Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed animate-fade-in max-w-3xl mx-auto">
            Transform your vehicle with our cutting-edge steam cleaning technology and expert mobile detailing. We bring showroom-quality results directly to your doorstep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Schedule Service Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 backdrop-blur-sm">
              Explore Our Services
            </button>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-300 rounded-full flex justify-center bg-white bg-opacity-10 backdrop-blur-sm">
            <div className="w-1 h-3 bg-emerald-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
