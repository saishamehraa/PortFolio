import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function FutureVision() {
  const socials = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/saishamehraa' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:saishamehra@example.com' },
  ];

  return (
    <section id="future" className="relative min-h-[80vh] flex items-center justify-center bg-[#050505] py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <h2 className="font-orbitron text-5xl sm:text-6xl md:text-7xl text-[#F0F4FF] tracking-wide font-bold leading-tight">
              The Future Requires Trustworthy Intelligence.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-12 lg:pl-24"
          >
            <p className="text-xl sm:text-2xl text-[#F0F4FF]/70 font-light leading-relaxed">
              Building systems that secure AI workflows.
            </p>
            
            <div className="flex flex-col gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#F0F4FF]/50 hover:text-[#5CF0FF] transition-colors duration-300 font-orbitron tracking-widest uppercase text-sm w-fit"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
