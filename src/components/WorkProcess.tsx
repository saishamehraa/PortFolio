import { motion } from 'motion/react';
import {
  MessageSquare,
  Layout,
  Code,
  MessageCircle,
  Rocket,
} from 'lucide-react';

export function WorkProcess() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Understanding Requirements',
      description: 'Deep dive into your project needs and goals',
    },
    {
      icon: Layout,
      title: 'UI Layout',
      description: 'Design intuitive and modern user interfaces',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Build with clean, scalable code',
    },
    {
      icon: MessageCircle,
      title: 'Feedback',
      description: 'Iterate based on your input',
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Launch your project to production',
    },
  ];

  return (
    <section id="process" className="relative py-16 sm:py-20 lg:py-32">
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
            Work Process
          </h2>
          <p className="text-base sm:text-lg text-[#F0F4FF]/70 px-4">
            A streamlined approach to bringing your ideas to life
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4DA6FF] via-[#5CF0FF] to-[#A68CFF] hidden md:block" />

            {/* Steps */}
            <div className="space-y-8 sm:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Number Badge */}
                    <div className="hidden md:flex relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#4DA6FF] to-[#5CF0FF] flex items-center justify-center border-4 border-[#05060D] shadow-[0_0_20px_rgba(77,166,255,0.6)]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="font-orbitron text-lg sm:text-xl">
                          {index + 1}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      className="flex-1 bg-gradient-to-br from-[#4DA6FF]/5 to-[#A68CFF]/5 rounded-xl p-5 sm:p-6 lg:p-8 border border-[#4DA6FF]/20 backdrop-blur-sm hover:border-[#5CF0FF]/50 transition-all duration-300 group cursor-pointer"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 0 30px rgba(77,166,255,0.3)',
                      }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        {/* Icon */}
                        <motion.div
                          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br from-[#4DA6FF]/20 to-[#5CF0FF]/20 border border-[#4DA6FF]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#5CF0FF] transition-colors"
                          whileHover={{ rotate: 10 }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#5CF0FF] drop-shadow-[0_0_8px_rgba(92,240,255,0.6)]" />
                        </motion.div>

                        {/* Text */}
                        <div className="flex-1">
                          <h3 className="font-orbitron text-base sm:text-lg lg:text-xl mb-1.5 sm:mb-2 text-[#F0F4FF] group-hover:text-[#5CF0FF] transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-[#F0F4FF]/70">
                            {step.description}
                          </p>
                        </div>

                        {/* Mobile Number */}
                        <div className="md:hidden">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#4DA6FF] to-[#5CF0FF] flex items-center justify-center shadow-[0_0_10px_rgba(77,166,255,0.4)]">
                            <span className="font-orbitron text-xs sm:text-sm">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Connecting Arrow (Desktop) */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="hidden md:block absolute left-8 top-20 w-6 h-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#5CF0FF] shadow-[0_0_8px_rgba(92,240,255,0.8)]" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}