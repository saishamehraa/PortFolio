import { motion } from 'motion/react';
import { Send, MessageCircle, Hash, Mail } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Send,
      platform: 'Telegram',
      handle: '@blue_meet_hues',
      link: 'https://t.me/blue_meet_hues',
      color: '#0088cc',
    },
    {
      icon: MessageCircle,
      platform: 'Discord',
      handle: 'altruistic28',
      link: 'https://discord.com/users/932714385196060683',
      color: '#5865F2',
    },
    {
      icon: Hash,
      platform: 'Reddit',
      handle: 'Techieiinterns',
      link: 'https://www.reddit.com/user/Techieiinterns',
      color: '#FF4500',
    },
    {
      icon: Mail,
      platform: 'Email',
      handle: 'techieiinterns@gmail.com',
      link: 'mailto:techieiinterns@gmail.com',
      color: '#EA4335',
    },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-32">
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
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-[#F0F4FF]/70 px-4">
            Let's discuss your next project
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-[#4DA6FF]/10 to-[#A68CFF]/10 rounded-2xl p-6 sm:p-8 lg:p-12 border border-[#4DA6FF]/30 backdrop-blur-lg overflow-hidden">
            {/* Glassmorphism Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4DA6FF]/5 via-transparent to-[#A68CFF]/5 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg3NywxNjYsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

            {/* Animated Glow */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#4DA6FF]/20 via-[#5CF0FF]/20 to-[#A68CFF]/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <motion.p
                className="text-center text-base sm:text-lg md:text-xl text-[#F0F4FF]/80 mb-8 sm:mb-12 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I'm available for freelance projects and collaborations. Reach out
                through any of these channels:
              </motion.p>

              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.platform}
                      href={method.link}
                      className="group relative bg-gradient-to-br from-[#4DA6FF]/5 to-[#A68CFF]/5 rounded-xl p-5 sm:p-6 border border-[#4DA6FF]/20 backdrop-blur-sm hover:border-[#5CF0FF]/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: `0 0 30px ${method.color}40`,
                      }}
                    >
                      {/* Icon */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                        <motion.div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#4DA6FF]/20 to-[#5CF0FF]/20 border border-[#4DA6FF]/30 flex items-center justify-center group-hover:border-[#5CF0FF] transition-colors"
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon
                            className="w-5 h-5 sm:w-6 sm:h-6 text-[#5CF0FF] drop-shadow-[0_0_8px_rgba(92,240,255,0.6)]"
                            style={{ color: method.color }}
                          />
                        </motion.div>
                        <div>
                          <h3 className="font-orbitron text-base sm:text-lg text-[#F0F4FF] group-hover:text-[#5CF0FF] transition-colors">
                            {method.platform}
                          </h3>
                        </div>
                      </div>

                      {/* Handle */}
                      <p className="text-xs sm:text-sm md:text-base text-[#F0F4FF]/70 pl-0 sm:pl-16 group-hover:text-[#5CF0FF]/90 transition-colors break-all">
                        {method.handle}
                      </p>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-[#5CF0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.a>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div
                className="text-center mt-8 sm:mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-[#F0F4FF]/60 text-xs sm:text-sm md:text-base px-4">
                  Response time: Usually within 24 hours
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}