import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MessageSquareText } from 'lucide-react';

export function Contact() {
  const socials = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/saishamehraa',
      color: 'hover:border-white hover:bg-white/5 hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: '#',
      color: 'hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]',
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:saishamehra@example.com',
      color: 'hover:border-[#EA4335]/50 hover:bg-[#EA4335]/10 hover:text-[#EA4335]',
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex justify-center mb-8">
            <div className="p-5 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <MessageSquareText className="w-8 h-8 text-[#F0F4FF]/70" />
            </div>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4 inline-block tracking-wide mb-8">
            Let's Build Trustworthy AI Systems
          </h2>
          <p className="text-[#F0F4FF]/60 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Interested in collaborating on AI security, autonomous reasoning, or cognitive intelligence infrastructure? Reach out.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-10 py-5 rounded-xl border border-white/5 bg-[#050505] text-[#F0F4FF]/60 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.8)] ${social.color}`}
            >
              {social.icon}
              <span className="font-orbitron tracking-widest uppercase text-sm">{social.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}