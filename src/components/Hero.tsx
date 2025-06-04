export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Background image simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Premium Mobile Car
            <span className="text-blue-300 block">Detailing & Steam Wash</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-fade-in">
            Professional car care services that come to you. Experience the ultimate in convenience and quality with VAP'D DASHSTEAM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Book a Service Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
