import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
// @ts-ignore: Importing image asset without a corresponding type declaration
import heroImage from '../assets/544127d82d55a4f348f06cdb616614f799abf13f.png';

export function Hero() {
  return (
    <section
      id="home"
      className="group relative min-h-screen flex items-center justify-center overflow-hidden touch-none"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060D]/50 via-[#05060D]/70 to-[#05060D] opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-700 max-md:opacity-100" />
      </div>

      {/* Content - Hidden initially on desktop, always visible on mobile */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-700">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main Title */}
          <motion.h1
            className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-[#4DA6FF] via-[#5CF0FF] to-[#A68CFF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(77,166,255,0.5)] px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Techie Interns
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-[#F0F4FF]/90 leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building clean web apps, intuitive UI/UX, and Python tools with speed
            and precision. Also debugging existing apps and adding new features into it.
          </motion.p>

          {/* Services List */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              'Web Apps',
              'Python Repos',
              'Portfolio Websites',
              'API Integration',
              'Feature Upgrades',
              'Bug Fixes',
              'PPts & Summaries',
            ].map((service, index) => (
              <motion.span
                key={service}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 text-[#5CF0FF] text-xs sm:text-sm md:text-base backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(77,166,255,0.6)',
                  borderColor: '#5CF0FF',
                }}
              >
                {service}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] rounded-lg font-orbitron flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(77,166,255,0.4)] hover:shadow-[0_0_30px_rgba(77,166,255,0.8)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#4DA6FF] rounded-lg font-orbitron flex items-center justify-center gap-2 hover:bg-[#4DA6FF]/10 hover:shadow-[0_0_20px_rgba(77,166,255,0.4)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#5CF0FF] rounded-full flex justify-center pt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-[#5CF0FF] rounded-full shadow-[0_0_8px_#5CF0FF]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Hover Hint - Visible initially, fades on hover */}  {/*
      <motion.div
        className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#5CF0FF] text-sm sm:text-base font-orbitron"
          >
            Hover to explore
          </motion.div>
          <motion.div
            className="w-8 h-8 border-2 border-[#5CF0FF] rounded-full flex items-center justify-center"
            animate={{ 
              boxShadow: [
                '0 0 10px rgba(92,240,255,0.3)',
                '0 0 20px rgba(92,240,255,0.6)',
                '0 0 10px rgba(92,240,255,0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-[#5CF0FF] rounded-full" />
          </motion.div>
        </div>
      </motion.div>          */}
    </section>
  );
}