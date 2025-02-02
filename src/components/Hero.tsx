import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Marvel Constructions by Ashraf
            </h1>
            <p className="text-2xl text-white/90 mb-6">Your dream home, our commitment</p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Premium plots and luxury homes in Mulugu
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#search"
              className="inline-block bg-primary text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Explore Properties
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;