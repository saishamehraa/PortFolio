import { motion } from 'motion/react';

export function TechStack() {
  const technologies = [
    { name: 'HTML', color: '#E34F26' },
    { name: 'CSS', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Vite', color: '#646CFF' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776AB' },
    { name: 'REST APIs', color: '#4DA6FF' },
    { name: 'UI/UX Design', color: '#5CF0FF' },
    { name: 'LLMs', color: '#38B2AC' },
    { name: 'Prompting', color: '#F05032' },
    { name: 'Gen AI', color: '#FD4499' },
    { name: 'Bug Finder & Fixer', color: '#12B8FF' },
  ];

  return (
    <section id="stack" className="relative py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4">
            Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-[#F0F4FF]/70 px-4">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative aspect-square bg-gradient-to-br from-[#4DA6FF]/5 to-[#A68CFF]/5 rounded-xl border border-[#4DA6FF]/20 backdrop-blur-sm hover:border-[#5CF0FF]/50 transition-all duration-300 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 30px ${tech.color}40`,
                }}
              >
                {/* Animated Glow Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}, transparent)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                  {/* Tech Name */}
                  <motion.div
                    className="text-center"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className="font-orbitron text-base sm:text-lg text-[#F0F4FF] group-hover:text-[#5CF0FF] transition-colors drop-shadow-[0_0_8px_rgba(92,240,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(92,240,255,0.6)]"
                    >
                      {tech.name}
                    </span>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: tech.color }}
                    animate={{
                      boxShadow: [
                        `0 0 0px ${tech.color}`,
                        `0 0 10px ${tech.color}`,
                        `0 0 0px ${tech.color}`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className="absolute bottom-2 left-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: tech.color }}
                    animate={{
                      boxShadow: [
                        `0 0 0px ${tech.color}`,
                        `0 0 10px ${tech.color}`,
                        `0 0 0px ${tech.color}`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  />
                </div>

                {/* Corner Accents */}
                <div
                  className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#4DA6FF]/30 rounded-tl-xl group-hover:border-[#5CF0FF] transition-colors"
                  style={{
                    borderColor: `${tech.color}50`,
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#4DA6FF]/30 rounded-br-xl group-hover:border-[#5CF0FF] transition-colors"
                  style={{
                    borderColor: `${tech.color}50`,
                  }}
                />

                {/* Holographic Scan Effect */}
                <motion.div
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#5CF0FF]/50 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ top: '0%' }}
                  whileHover={{
                    top: ['0%', '100%'],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.p
          className="text-center mt-12 text-[#F0F4FF]/60 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Always learning and adapting to new technologies
        </motion.p>
      </div>
    </section>
  );
}