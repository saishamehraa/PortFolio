import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const socials = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/saishamehraa' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:saishamehra@example.com' },
  ];

  return (
    <section id="contact" className="relative py-32 lg:py-48 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl text-[#F0F4FF] tracking-wide font-light mb-8">
            Let's Build Trustworthy<br />AI Systems
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-transparent text-[#F0F4FF]/50 hover:text-[#F0F4FF] hover:border-white/30 transition-all duration-500"
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