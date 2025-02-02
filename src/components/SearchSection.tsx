import { useState } from "react";
import { motion } from "framer-motion";

const SearchSection = () => {
  const [priceRange, setPriceRange] = useState("");
  const [area, setArea] = useState("");

  return (
    <section id="search" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Perfect Property
          </h2>
          <p className="text-gray-600">
            Search through our exclusive collection of premium properties
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                Area
              </label>
              <select
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select Area</option>
                <option value="mulugu">Mulugu</option>
                <option value="warangal">Warangal</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                id="price"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select Price Range</option>
                <option value="0-5000000">Under ₹50 Lakhs</option>
                <option value="5000000-10000000">₹50 Lakhs - 1 Crore</option>
                <option value="10000000+">Above 1 Crore</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Search Properties
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;