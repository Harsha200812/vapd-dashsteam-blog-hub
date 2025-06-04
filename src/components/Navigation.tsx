
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b-2 border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold text-gray-800 tracking-wide">VAP'D DASHSTEAM</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-emerald-50 rounded-lg">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-emerald-50 rounded-lg">
                Services
              </a>
              <a href="#blog" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-emerald-50 rounded-lg">
                Blog
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-emerald-50 rounded-lg">
                About Us
              </a>
              <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg shadow-md hover:shadow-lg">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-emerald-100">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300">
                Services
              </a>
              <a href="#blog" className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300">
                Blog
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300">
                About Us
              </a>
              <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 mt-2">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
