
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-lg font-bold">VAP'D DASHSTEAM</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Premium mobile car detailing and steam wash services that come to you. Professional quality, eco-friendly methods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Mobile Car Detailing</span></li>
              <li><span className="text-gray-400">Steam Wash Technology</span></li>
              <li><span className="text-gray-400">Paint Protection</span></li>
              <li><span className="text-gray-400">Interior Sanitization</span></li>
              <li><span className="text-gray-400">Ceramic Coating</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <span className="text-gray-400">(555) 123-VAPD</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <span className="text-gray-400">info@vapddashsteam.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📍</span>
                <span className="text-gray-400">Greater Metropolitan Area</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">🕒</span>
                <span className="text-gray-400">Mon-Sat: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 VAP'D DASHSTEAM. All rights reserved. | 
            <span className="hover:text-white transition-colors cursor-pointer"> Privacy Policy</span> | 
            <span className="hover:text-white transition-colors cursor-pointer"> Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
