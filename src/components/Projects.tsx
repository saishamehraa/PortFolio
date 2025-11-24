import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'NeuroAccess: AI-Powered Multi-LLM Web Platform',
      description:
        'A sophisticated web platform integrating multiple Large Language Models for diverse AI-powered functionalities.',
      tags: ['React', 'API Integration', 'AI/LLMs'],
      gradient: 'from-[#4DA6FF] to-[#5CF0FF]',
    },
    {
      title: 'PhishGuard: Website Phishing Detection Tool',
      description:
        'Advanced security tool using machine learning to detect and prevent phishing attempts with high accuracy.',
      tags: ['Python', 'API Integration', 'Machine Learning', 'Security'],
      gradient: 'from-[#5CF0FF] to-[#A68CFF]',
    },
    {
      title: 'Edu.java: Educational Desktop App',
      description:
        'Interactive desktop application designed for educational purposes with an intuitive user interface.',
      tags: ['Java', 'Desktop App', 'UI/UX'],
      gradient: 'from-[#A68CFF] to-[#4DA6FF]',
    },
    {
      title: 'Portfolio Website Template',
      description:
        'Modern, responsive portfolio template with neon aesthetic and smooth animations for showcasing work.',
      tags: ['React', 'Tailwind', 'Responsive'],
      gradient: 'from-[#4DA6FF] to-[#A68CFF]',
    },
  ];

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-32">
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
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-[#F0F4FF]/70 px-4">
            Showcasing recent work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-gradient-to-br from-[#4DA6FF]/5 to-[#A68CFF]/5 rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#4DA6FF]/20 backdrop-blur-sm hover:border-[#5CF0FF]/50 transition-all duration-300 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 40px rgba(77,166,255,0.4)',
              }}
            >
              {/* Animated Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1.5 }}
              />

              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-t-2 border-r-2 border-[#4DA6FF]/30 rounded-tr-2xl group-hover:border-[#5CF0FF] transition-colors" />
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-b-2 border-l-2 border-[#4DA6FF]/30 rounded-bl-2xl group-hover:border-[#5CF0FF] transition-colors" />

              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="font-orbitron text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-[#F0F4FF] group-hover:text-[#5CF0FF] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#F0F4FF]/70 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 text-xs sm:text-sm text-[#5CF0FF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(77,166,255,0.6)] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-[#4DA6FF] rounded-lg text-sm hover:bg-[#4DA6FF]/10 hover:border-[#5CF0FF] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.button>
                </div>
              </div>

              {/* Holographic Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-[#5CF0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}