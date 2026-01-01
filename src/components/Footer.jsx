import { Phone, Heart, Instagram, Mail, ArrowRight, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <img src="/assets/logo.png" alt="Khozy Pickle" className="h-12 w-auto" />
               <span className="font-bold text-2xl tracking-tight">Khozy Pickle</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing the authentic taste of homemade pickles to your doorstep. Crafted with traditional recipes and premium ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Shop</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#product" className="hover:text-brand-red transition-colors">All Pickles</a></li>
              <li><a href="#product" className="hover:text-brand-red transition-colors">Spicy Chicken Pickle</a></li>
              <li><a href="#product" className="hover:text-brand-red transition-colors">Kasini Pickle</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="https://wa.me/+916374696407" className="hover:text-brand-red transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Returns & Refunds</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Khozy Pickle. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-2 md:mt-0">
            <span>Made with</span>
            <Heart size={14} className="text-brand-red fill-current" />
            <span>by Gokul Kannan Ganesamoorthy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
