import { motion } from 'motion/react';
import { ExternalLink, Github, Shield, Database, Activity, Cpu } from 'lucide-react';

export function SupportingModules() {
  const modules = [
    {
      title: 'PromptShield',
      subtitle: 'AI Prompt Security Firewall',
      description: 'Detects prompt injections, jailbreak attempts, and sensitive information leakage.',
      tech: ['Prompt Security', 'AI Safety', 'Jailbreak Defense'],
      github: 'https://github.com/saishamehraa/PromptShield',
      demo: 'https://promptshield-vkdv.onrender.com/',
      icon: <Shield className="w-5 h-5 text-[#5CF0FF]" />,
      accentColor: '#5CF0FF'
    },
    {
      title: 'SIFTGuardian',
      subtitle: 'Threat Intelligence Correlation',
      description: 'Correlates dependency vulnerabilities, exploit activity, and security telemetry.',
      tech: ['Threat Intelligence', 'Vulnerability Analysis', 'Security Monitoring'],
      github: 'https://github.com/saishamehraa/Sift_Guardian',
      demo: '#',
      icon: <Activity className="w-5 h-5 text-[#4DA6FF]" />,
      accentColor: '#4DA6FF'
    },
    {
      title: 'Consent Guardian',
      subtitle: 'AI Governance & Authorization',
      description: 'Analyzes permissions and access governance to ensure workflows operate within trust constraints.',
      tech: ['Governance', 'Authorization', 'Trust Boundaries'],
      github: 'https://github.com/saishamehraa/ConsentGuardian-AI',
      demo: 'https://consentguardian-ai.onrender.com',
      icon: <Database className="w-5 h-5 text-[#A68CFF]" />,
      accentColor: '#A68CFF'
    },
    {
      title: 'CodeSage',
      subtitle: 'Repository Intelligence',
      description: 'Performs deep code reasoning and vulnerability discovery through AI-powered analysis.',
      tech: ['Code Analysis', 'DevSecOps', 'AI Reasoning'],
      github: 'https://github.com/saishamehraa/CodeSage',
      demo: 'https://codesage-9u2l.onrender.com/',
      icon: <Cpu className="w-5 h-5 text-[#F0F4FF]" />,
      accentColor: '#F0F4FF'
    }
  ];

  return (
    <section id="modules" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-orbitron text-2xl sm:text-3xl text-[#F0F4FF]/70 tracking-wide font-light">
            Supporting Intelligence Modules
          </h2>
          <div className="w-16 h-px bg-white/20 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((sys, idx) => (
            <motion.div
              key={sys.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="group bg-[#050505] border border-white/5 rounded-xl p-8 flex flex-col hover:border-white/20 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-lg border border-transparent group-hover:border-white/10 transition-colors duration-300">
                  {sys.icon}
                </div>
                <div className="flex gap-3">
                  <a href={sys.github} target="_blank" rel="noopener noreferrer" className="text-[#F0F4FF]/30 hover:text-white transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </a>
                  {sys.demo !== '#' && (
                    <a href={sys.demo} target="_blank" rel="noopener noreferrer" className="text-[#F0F4FF]/30 hover:text-white transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-orbitron text-xl text-[#F0F4FF] tracking-wide mb-2">
                {sys.title}
              </h3>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: sys.accentColor }}>
                {sys.subtitle}
              </h4>
              
              <p className="text-[#F0F4FF]/60 text-sm font-light leading-relaxed mb-8 flex-1">
                {sys.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {sys.tech.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider font-medium text-[#F0F4FF]/40">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
