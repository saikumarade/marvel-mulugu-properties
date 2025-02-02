import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchSection />
      
      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600">
              Explore our handpicked selection of premium properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Luxury 3 BHK Villa with Pool
                </h3>
                <p className="text-gray-600 mb-4">
                  Spacious 3 BHK villa with private swimming pool and garden
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">₹1.5 Cr</span>
                  <button className="bg-primary/10 text-primary px-4 py-2 rounded-md hover:bg-primary/20 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Modern 3 BHK with Pool View
                </h3>
                <p className="text-gray-600 mb-4">
                  Contemporary 3 BHK flat overlooking community pool
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">₹1.2 Cr</span>
                  <button className="bg-primary/10 text-primary px-4 py-2 rounded-md hover:bg-primary/20 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Premium 3 BHK Pool Villa
                </h3>
                <p className="text-gray-600 mb-4">
                  Luxurious 3 BHK villa with infinity pool and modern amenities
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">₹1.8 Cr</span>
                  <button className="bg-primary/10 text-primary px-4 py-2 rounded-md hover:bg-primary/20 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Support?
            </h2>
            <p className="text-gray-600 mb-8">
              Our team is here to help you with any questions
            </p>
            <a
              href="tel:+918340902453"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              Call Us: +91 8340 902 453
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;