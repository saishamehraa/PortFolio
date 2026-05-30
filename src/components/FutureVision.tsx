import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function FutureVision() {
  const socials = [
    { name: 'GitHub', icon: <Github className="w-6 h-6" />, href: 'https://github.com/saishamehraa' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, href: '#' },
    { name: 'Email', icon: <Mail className="w-6 h-6" />, href: 'mailto:saishamehra@example.com' },
  ];

  return (
    <section id="future" className="relative min-h-[100vh] flex flex-col justify-center bg-[#050505] py-40 overflow-hidden">
      <div className="container mx-auto px-8 sm:px-12 lg:px-24 w-full max-w-[2000px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-32">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-150px" }}
            className="w-full lg:w-[60%] space-y-16"
          >
            <p className="font-mono text-sm tracking-[0.3em] text-[#00D4FF] uppercase mb-12">
              Looking Forward
            </p>
            <h2 className="font-inter text-6xl sm:text-7xl md:text-[7rem] lg:text-[8rem] text-[#F2F2F2] leading-[0.95] tracking-tight font-light">
              The Future<br />Requires<br />Trustworthy<br />Intelligence.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-150px" }}
            className="w-full lg:w-[40%] flex flex-col gap-16 lg:pl-16 border-l border-white/5"
          >
            <p className="font-inter text-3xl md:text-4xl text-[#8A939C] font-light leading-relaxed max-w-lg">
              Building systems that secure AI workflows.
            </p>
            
            <div className="flex flex-col gap-10">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 text-[#F2F2F2]/50 hover:text-[#00D4FF] transition-colors duration-500 font-mono tracking-[0.2em] uppercase text-xl md:text-2xl w-fit group"
                >
                  <div className="p-4 rounded-full border border-white/10 group-hover:border-[#00D4FF]/50 transition-colors duration-500 bg-[#0A0A0A]">
                    {social.icon}
                  </div>
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
