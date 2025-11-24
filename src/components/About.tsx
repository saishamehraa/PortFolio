import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    'responsive and modern web apps',
    'Python scripts or custom repos',
    'portfolio websites',
    'AI or API integrations',
    'improvements to your existing projects',
    'clear summarization & presentations',
    'bug fixes and debugging',
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.h2
            className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Techie Interns
          </motion.h2>

          {/* Content Card */}
          <motion.div
            className="relative bg-gradient-to-br from-[#4DA6FF]/5 to-[#A68CFF]/5 rounded-2xl p-6 sm:p-8 lg:p-12 border border-[#4DA6FF]/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4DA6FF]/0 via-[#4DA6FF]/10 to-[#4DA6FF]/0 blur-xl -z-10" />

            <div className="space-y-6">
              <motion.p
                className="text-base sm:text-lg leading-relaxed text-[#F0F4FF]/90"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-[#5CF0FF]">Techie Interns</span> is a
                small, independent developer workspace focused on building fast,
                user-friendly web apps and lightweight backend tools. The goal is
                simple: <span className="text-[#5CF0FF]">clean interfaces</span>,{' '}
                <span className="text-[#5CF0FF]">smooth user experience</span>,
                and <span className="text-[#5CF0FF]">scalable features</span>.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg leading-relaxed text-[#F0F4FF]/90"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I work quietly in the background — designing UI, writing code,
                integrating APIs, and refining products until they feel effortless
                to use.
              </motion.p>

              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-[#5CF0FF]">
                  If you're looking for:
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#5CF0FF] flex-shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(92,240,255,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(92,240,255,0.8)] transition-all" />
                      <span className="text-sm sm:text-base md:text-lg text-[#F0F4FF]/90 group-hover:text-[#5CF0FF] transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-center pt-6 text-[#F0F4FF]/90 italic"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
              >
                …I'd be happy to build it for you.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}