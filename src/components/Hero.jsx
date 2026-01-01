import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#FFF8F0] overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50/50 rounded-l-[100px] -z-0" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-yellow/10 rounded-full blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-brand-red font-bold text-sm tracking-wider uppercase">
              100% Homemade
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Spice Up Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">
                Life & Meals
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Authentic Kerala style chicken pickle made with traditional recipes and premium spices. No preservatives, just pure taste.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#product" 
                className="px-8 py-4 bg-brand-red text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-2"
              >
                Order Now <ArrowRight size={20} />
              </a>
              <button 
                onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all"
              >
                View Details
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 mx-auto max-w-sm lg:max-w-md">
              <img 
                src="/assets/pickle_1.JPG" 
                alt="Jar of Pickle" 
                className="rounded-[40px] shadow-2xl rotate-3 border-8 border-white"
              />
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-28 h-28 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg z-20"
            >
              <div className="text-center leading-none">
                <span className="block text-xs font-bold text-brand-dark mb-1">Offer!</span>
                <span className="block text-sm font-bold text-gray-700 line-through">₹358</span>
                <span className="block text-2xl font-bold text-brand-dark">₹299</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
