import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
             <img src="/assets/logo.png" alt="ASM Foods" className="h-10 w-auto" />
             <span className="font-bold text-2xl text-brand-red tracking-tight">ASM Foods</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-brand-red font-medium transition-colors">Home</a>
            <a href="#product" className="text-gray-800 hover:text-brand-red font-medium transition-colors">Our Pickle</a>
            <button 
              onClick={() => window.location.href="https://wa.me/+916374696407"}
              className="bg-brand-red text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              Buy Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-brand-red focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-red-50 hover:text-brand-red">Home</a>
              <a href="#product" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-red-50 hover:text-brand-red">Our Pickle</a>
              <button 
                onClick={() => window.location.href="https://wa.me/+916374696407"}
                className="w-full mt-4 bg-brand-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                Buy Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
