import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 border-t border-[#4DA6FF]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <motion.div
          className="text-center space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-orbitron text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4">
              Techie Interns
            </h3>
          </motion.div>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-lg text-[#F0F4FF]/70 px-4">
            Quiet development, powerful results.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 py-4 sm:py-6">
            <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#4DA6FF] to-transparent" />
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 10px rgba(92,240,255,0.3)',
                  '0 0 20px rgba(92,240,255,0.6)',
                  '0 0 10px rgba(92,240,255,0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-2 h-2 rounded-full bg-[#5CF0FF]"
            />
            <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-[#4DA6FF] to-transparent" />
          </div>

          {/* Copyright */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#F0F4FF]/50 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span>© 2025 Techie Interns. Built with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#5CF0FF] fill-[#5CF0FF]" />
            </motion.div>
            <span>and code.</span>
          </motion.div>

          {/* Version */}
          <motion.p
            className="text-xs text-[#F0F4FF]/30 font-orbitron pt-2 sm:pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            v2025.1.0
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4DA6FF]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#5CF0FF]/5 rounded-full blur-3xl -z-10" />
      </div>
    </footer>
  );
}