
export const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">About VAP'D DASHSTEAM</h3>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              VAP'D DASHSTEAM is a premier mobile car detailing service dedicated to bringing professional-grade car care directly to our customers. Founded with a passion for automotive excellence and customer convenience, we've revolutionized the car care industry with our innovative steam cleaning technology.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our mission is to provide exceptional car detailing services that not only enhance your vehicle's appearance but also protect your investment. We believe in using eco-friendly methods that are safe for both your car and the environment.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Cars Detailed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Professional steam cleaning technology</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Eco-friendly and chemical-free processes</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Mobile service for ultimate convenience</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Experienced and certified technicians</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=400&q=80" 
                alt="Professional team"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=80" 
                alt="Car detailing process"
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&q=80" 
                alt="Steam cleaning"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=80" 
                alt="Finished car"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
