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

        {/* Features & Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-gray-100 pt-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🌶️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Perfectly Spiced</h3>
                <p className="text-gray-600 mt-2">
                  Not too hot, not too mild. A perfect balance of Kashmiri chili and traditional spices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🍗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Premium Meat</h3>
                <p className="text-gray-600 mt-2">
                  We use only farm-fresh, boneless chicken cubes that are fried to perfection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🌿</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">100% Natural</h3>
                <p className="text-gray-600 mt-2">
                  No artificial preservatives or colors. Just like how grandma used to make it.
                </p>
              </div>
            </div>
          </div>
          
          <div id="details" className="h-full">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Ingredients</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chicken (Boneless), Ginger, Garlic, Curry Leaves, Chili Powder, Turmeric, Vinegar, Salt, Gingelly Oil, Fenugreek, Mustard Seeds.
              </p>
              <div className="p-4 bg-white rounded-xl border border-gray-100">
                 <p className="text-sm text-gray-500 italic">
                   * New Kasini Pickle ingredients coming soon!
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
