import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ProductCard({ image, title, price, originalPrice, whatsAppMessage }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 max-w-sm mx-auto h-full flex flex-col">
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-50 flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
          BESTSELLER
        </div>
      </div>
      
      <div className="space-y-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-500 text-sm mt-1">Authentic homemade recipe</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold text-brand-red">₹{price}</span>
              {originalPrice && (
                <span className="text-gray-400 text-sm line-through ml-2">₹{originalPrice}</span>
              )}
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-brand-yellow">★</span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(`https://wa.me/+916374696407?text=${encodeURIComponent(whatsAppMessage)}`, "_blank")}
            className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-200"
          >
            <MessageCircle size={20} />
            Order via WhatsApp
          </motion.button>
        </div>
      </div>
    </div>
  );
}
