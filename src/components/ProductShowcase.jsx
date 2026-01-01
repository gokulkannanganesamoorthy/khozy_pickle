import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Spicy Chicken Pickle",
    image: "/assets/pickle_1.JPG",
    price: 299,
    originalPrice: 358,
    whatsAppMessage: "I'm interested in buying Spicy Chicken Pickle (₹299)"
  },
  {
    id: 2,
    title: "Kasini Pickle",
    image: "/assets/kasini.PNG",
    price: 120,
    originalPrice: 150,
    whatsAppMessage: "I'm interested in buying Kasini Pickle (₹120)"
  }
];

export default function ProductShowcase() {
  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Signature Pickles</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Made in small batches to ensure the highest quality and authentic taste.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Khozy Pickle?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-red-50 transition-colors duration-300 border border-gray-100 hover:border-red-100 group">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌶️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Perfectly Spiced</h3>
              <p className="text-gray-600 leading-relaxed">
                Not too hot, not too mild. A perfect balance of Kashmiri chili and traditional spices.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-yellow-50 transition-colors duration-300 border border-gray-100 hover:border-yellow-100 group">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🍗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Meat</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only farm-fresh, boneless chicken cubes that are fried to perfection.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-green-50 transition-colors duration-300 border border-gray-100 hover:border-green-100 group">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Natural</h3>
              <p className="text-gray-600 leading-relaxed">
                No artificial preservatives or colors. Just like how grandma used to make it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
