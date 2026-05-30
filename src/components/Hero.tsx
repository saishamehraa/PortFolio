import { motion } from 'motion/react';
import { ArrowRight, Github, FileText } from 'lucide-react';
// @ts-ignore: Importing image asset without a corresponding type declaration
import heroImage from '../assets/544127d82d55a4f348f06cdb616614f799abf13f.png';

export function Hero() {
  return (
    <section
      id="home"
      className="group relative min-h-screen flex items-center justify-center overflow-hidden touch-none bg-[#05060D]"
    >
      {/* Background Image & Effects */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060D]/80 via-[#05060D]/90 to-[#05060D]" />
      </div>

      {/* Node Connection Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-[128px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#A68CFF] rounded-full mix-blend-screen filter blur-[128px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title / Name */}
          <motion.h1
            className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-[#F0F4FF] via-[#5CF0FF] to-[#A68CFF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(92,240,255,0.3)] px-4 tracking-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Saisha Mehra
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="space-y-4 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F0F4FF] font-light leading-relaxed">
              Building AI-Powered Systems for<br />
              <span className="font-semibold text-[#5CF0FF]">Security, Trust, and Transparency</span>
            </h2>
          </motion.div>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 sm:gap-x-6 text-[#A68CFF] text-sm sm:text-base md:text-lg font-medium px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span>AI Security</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CF0FF]" />
            <span>Multi-Agent Systems</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#5CF0FF]" />
            <br className="sm:hidden" />
            <span>Trust Orchestration</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CF0FF]" />
            <span>Cognitive Intelligence</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#ecosystem"
              className="w-full sm:w-auto px-8 py-4 bg-[#5CF0FF]/10 border border-[#5CF0FF]/50 rounded-lg font-orbitron flex items-center justify-center gap-3 text-[#5CF0FF] hover:bg-[#5CF0FF]/20 hover:shadow-[0_0_30px_rgba(92,240,255,0.3)] backdrop-blur-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Ecosystem
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/saishamehraa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#4DA6FF]/30 rounded-lg font-orbitron flex items-center justify-center gap-3 text-[#F0F4FF] hover:bg-[#4DA6FF]/10 hover:border-[#4DA6FF] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#A68CFF]/30 rounded-lg font-orbitron flex items-center justify-center gap-3 text-[#F0F4FF] hover:bg-[#A68CFF]/10 hover:border-[#A68CFF] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Resume
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
            className="w-6 h-10 border-2 border-[#5CF0FF]/50 rounded-full flex justify-center pt-2"
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
    </section>
  );
}