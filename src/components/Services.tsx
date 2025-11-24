import { motion } from 'motion/react';
import {
  Globe,
  Code2,
  User,
  Puzzle,
  Plug,
  FileText,
  Brain,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Custom Web App Development',
      description: 'Modern, responsive web applications built with latest technologies',
    },
    {
      icon: Code2,
      title: 'Python Repositories & Tools',
      description: 'Lightweight backend tools and automation scripts',
    },
    {
      icon: User,
      title: 'Personal Portfolio Websites',
      description: 'Beautiful, professional portfolios that showcase your work',
    },
    {
      icon: Puzzle,
      title: 'Feature Add-ons & Upgrades',
      description: 'Enhance existing projects with new capabilities',
    },
    {
      icon: Plug,
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs',
    },
    {
      icon: FileText,
      title: 'Documentation & Presentations',
      description: 'Clear technical documentation and compelling presentations',
    },
    {
      icon: Brain,
      title: 'Bug Fixes & Debugging',
      description: 'Identify and resolve issues to improve performance',
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-32">
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
            Services I Offer
          </h2>
          <p className="text-base sm:text-lg text-[#F0F4FF]/70 px-4">
            Specialized development services tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group relative bg-gradient-to-br from-[#4DA6FF]/5 to-[#A68CFF]/5 rounded-xl p-5 sm:p-6 lg:p-8 border border-[#4DA6FF]/20 backdrop-blur-sm hover:border-[#5CF0FF]/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 30px rgba(77,166,255,0.3)',
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4DA6FF]/0 via-[#5CF0FF]/20 to-[#4DA6FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-br from-[#4DA6FF]/20 to-[#5CF0FF]/20 border border-[#4DA6FF]/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:border-[#5CF0FF] transition-colors"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#5CF0FF] drop-shadow-[0_0_8px_rgba(92,240,255,0.6)]" />
                </motion.div>

                {/* Content */}
                <h3 className="font-orbitron text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 text-[#F0F4FF] group-hover:text-[#5CF0FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#F0F4FF]/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#4DA6FF]/30 rounded-tr-lg group-hover:border-[#5CF0FF] transition-colors" />
                <div className="absolute bottom-2 left-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#4DA6FF]/30 rounded-bl-lg group-hover:border-[#5CF0FF] transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}