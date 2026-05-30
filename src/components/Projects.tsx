import { motion } from 'motion/react';
import { ExternalLink, Github, Shield, BrainCircuit, Activity, Hexagon, Terminal, Network, Cpu } from 'lucide-react';

export function Projects() {
  const securitySystems = [
    {
      title: 'PromptShield',
      subtitle: 'AI Prompt Security Firewall',
      description: 'Detects prompt injections, jailbreak attempts, and sensitive information leakage through intelligent prompt analysis and security reasoning.',
      tech: ['LLM Security', 'Prompt Injection', 'Reasoning'],
      github: 'https://github.com/saishamehraa/PromptShield',
      demo: 'https://promptshield-vkdv.onrender.com/',
      icon: <Shield className="w-5 h-5 text-[#5CF0FF]" />,
      accentColor: '#5CF0FF'
    },
    {
      title: 'SIFTGuardian',
      subtitle: 'Threat Intelligence Correlation Engine',
      description: 'Correlates dependency vulnerabilities, exploit activity, and security telemetry to identify emerging threats before production impact.',
      tech: ['Threat Intelligence', 'Telemetry', 'Vulnerability Analysis'],
      github: 'https://github.com/saishamehraa/Sift_Guardian',
      demo: '#',
      icon: <Activity className="w-5 h-5 text-[#4DA6FF]" />,
      accentColor: '#4DA6FF'
    },
    {
      title: 'Consent Guardian',
      subtitle: 'AI Governance & Authorization Platform',
      description: 'Analyzes permissions, consent boundaries, and access governance to ensure AI workflows operate within approved trust constraints.',
      tech: ['Governance', 'Authorization', 'Trust Constraints'],
      github: 'https://github.com/saishamehraa/ConsentGuardian-AI',
      demo: 'https://consentguardian-ai.onrender.com',
      icon: <Hexagon className="w-5 h-5 text-[#A68CFF]" />,
      accentColor: '#A68CFF'
    },
    {
      title: 'CodeSage',
      subtitle: 'Repository Intelligence & Security Analysis',
      description: 'Performs deep code reasoning, vulnerability discovery, and remediation generation through AI-powered security analysis.',
      tech: ['Static Analysis', 'Remediation Generation', 'Intelligence'],
      github: 'https://github.com/saishamehraa/CodeSage',
      demo: 'https://codesage-9u2l.onrender.com/',
      icon: <Terminal className="w-5 h-5 text-[#F0F4FF]" />,
      accentColor: '#F0F4FF'
    },
    {
      title: 'SecRitual',
      subtitle: 'AI Security Reasoning & Trust Orchestration Platform',
      description: 'An explainable security decision engine where multiple AI agents debate risk, synthesize evidence, and generate trust-backed deployment verdicts.',
      tech: ['Agent Consensus', 'Trust Intelligence', 'Explainable Security', 'Foundry IQ Grounding'],
      github: 'https://github.com/saishamehraa/SecRitual',
      demo: 'https://secritual-ai.onrender.com',
      icon: <BrainCircuit className="w-5 h-5 text-[#5CF0FF]" />,
      accentColor: '#5CF0FF'
    },
    {
      title: 'CyberMesh',
      subtitle: 'Autonomous Infrastructure Response Network',
      description: 'Coordinates security intelligence across interconnected systems, propagates threat states, synchronizes telemetry, and orchestrates autonomous response.',
      tech: ['Infrastructure Security', 'Autonomous Response', 'Runtime Intelligence', 'Distributed Coordination'],
      github: 'https://github.com/saishamehraa/CyberMesh',
      demo: 'https://cybermesh-ai.onrender.com',
      icon: <Network className="w-5 h-5 text-[#A68CFF]" />,
      accentColor: '#A68CFF'
    }
  ];

  const cognitiveSystems = [
    {
      title: 'NeuroAccess',
      subtitle: 'AI Accessibility & Multi-LLM Workspace',
      description: 'A unified AI environment that enables model comparison, prompt engineering, workflow optimization, and intelligent model selection.',
      tech: ['AI Accessibility', 'Prompt Engineering', 'Model Evaluation', 'Multi-LLM Intelligence'],
      github: 'https://github.com/saishamehraa/NeuroAccess',
      demo: 'https://neuroaccess-gk0c.onrender.com/',
      icon: <Cpu className="w-5 h-5 text-[#4DA6FF]" />,
      accentColor: '#4DA6FF'
    }
  ];

  const utilitySystems = [
    {
      title: 'PhishGuard',
      subtitle: 'Phishing & Fraud Detection Platform',
      description: 'Detects malicious websites, phishing attempts, and online fraud indicators using AI-assisted security analysis.',
      tech: ['Fraud Detection', 'Security Utility', 'Phishing Analysis'],
      github: 'https://github.com/saishamehraa/PhishGuard',
      demo: '#',
      icon: <Shield className="w-5 h-5 text-[#5CF0FF]" />,
      accentColor: '#5CF0FF'
    }
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4 inline-block tracking-wide">
            Systems Portfolio
          </h2>
        </motion.div>

        {/* FEATURED: OPENMIND NEXUS */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-[#050505] border border-white/5 rounded-2xl p-10 lg:p-16 overflow-hidden transition-all duration-300 hover:border-[#A68CFF]/40 hover:shadow-[0_0_50px_rgba(166,140,255,0.08)]"
          >
            {/* Accent Line Illumination */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-gradient-to-r from-transparent via-[#A68CFF] to-transparent transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-[#A68CFF]/5 group-hover:border-[#A68CFF]/30 transition-all duration-300">
                    <BrainCircuit className="w-6 h-6 text-[#A68CFF]" />
                  </div>
                  <span className="text-[#A68CFF] font-orbitron tracking-widest text-sm uppercase font-semibold">Featured Cognitive Platform</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron text-[#F0F4FF] mb-3 tracking-tight">OpenMind Nexus</h3>
                <h4 className="text-xl text-[#F0F4FF]/50 font-light mb-8 uppercase tracking-widest">Multi-Agent Cognitive Risk Intelligence</h4>
                
                <p className="text-lg text-[#F0F4FF]/80 leading-relaxed mb-10 max-w-3xl">
                  OpenMind Nexus applies multi-agent reasoning to cognitive security, analyzing misinformation, manipulation patterns, echo chamber dynamics, and trust signals to create explainable information intelligence workflows.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {['Cognitive Security', 'Information Integrity', 'Bias Detection', 'Explainable Intelligence'].map(tech => (
                    <span key={tech} className="px-4 py-2 text-sm font-medium rounded bg-white/5 text-[#F0F4FF]/70 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex lg:flex-col gap-4 lg:min-w-[180px]">
                <a
                  href="https://openmind-nexus.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#A68CFF]/5 border border-[#A68CFF]/30 rounded-xl font-orbitron text-[#A68CFF] hover:bg-[#A68CFF]/15 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" /> Launch
                </a>
                <a
                  href="https://github.com/saishamehraa/OpenMind-Nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-transparent border border-white/10 rounded-xl font-orbitron text-[#F0F4FF]/70 hover:text-[#F0F4FF] hover:bg-white/5 transition-all duration-300"
                >
                  <Github className="w-5 h-5" /> Source
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SYSTEM CATEGORIES */}
        <div className="space-y-32">
          
          {/* AI SECURITY & TRUST SYSTEMS */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-2xl sm:text-3xl font-orbitron text-[#F0F4FF] mb-12 pb-6 border-b border-white/10 flex items-center gap-5 tracking-wide"
            >
              <Shield className="w-8 h-8 text-[#5CF0FF]" /> AI Security & Trust Systems
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {securitySystems.map((sys, idx) => (
                <SystemCard key={idx} sys={sys} index={idx} borderHover="hover:border-[#5CF0FF]/40" shadowHover="hover:shadow-[0_0_30px_rgba(92,240,255,0.05)]" />
              ))}
            </div>
          </div>

          {/* COGNITIVE INTELLIGENCE SYSTEMS (Remaining) */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-2xl sm:text-3xl font-orbitron text-[#F0F4FF] mb-12 pb-6 border-b border-white/10 flex items-center gap-5 tracking-wide"
            >
              <BrainCircuit className="w-8 h-8 text-[#A68CFF]" /> Cognitive Intelligence Systems
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {cognitiveSystems.map((sys, idx) => (
                <SystemCard key={idx} sys={sys} index={idx} borderHover="hover:border-[#A68CFF]/40" shadowHover="hover:shadow-[0_0_30px_rgba(166,140,255,0.05)]" />
              ))}
            </div>
          </div>

          {/* SECURITY UTILITIES */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-2xl sm:text-3xl font-orbitron text-[#F0F4FF] mb-12 pb-6 border-b border-white/10 flex items-center gap-5 tracking-wide"
            >
              <Terminal className="w-8 h-8 text-[#4DA6FF]" /> Security Utilities
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {utilitySystems.map((sys, idx) => (
                <SystemCard key={idx} sys={sys} index={idx} borderHover="hover:border-[#4DA6FF]/40" shadowHover="hover:shadow-[0_0_30px_rgba(77,166,255,0.05)]" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable card component for systems (Removed scale/bounce, added pure border/shadow illumination)
function SystemCard({ sys, index, borderHover, shadowHover }: { sys: any, index: number, borderHover: string, shadowHover: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative bg-[#050505] rounded-xl overflow-hidden border border-white/5 transition-all duration-300 ${borderHover} ${shadowHover} flex flex-col h-full`}
    >
      {/* Accent Line Illumination */}
      <div 
        className="absolute top-0 left-0 w-full h-[1px] bg-transparent transition-colors duration-300"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${sys.accentColor}80, transparent)` }}
      />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#050505] opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10" />

      <div className="p-8 flex-1 flex flex-col relative z-20">
        <div className="flex justify-between items-start mb-8">
          <div className="p-3 bg-white/5 rounded-lg border border-transparent group-hover:border-white/10 transition-colors duration-300">
            {sys.icon}
          </div>
          <div className="flex gap-4">
            <a href={sys.github} target="_blank" rel="noopener noreferrer" className="text-[#F0F4FF]/30 hover:text-white transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            {sys.demo !== '#' && (
              <a href={sys.demo} target="_blank" rel="noopener noreferrer" className="text-[#F0F4FF]/30 hover:text-white transition-colors duration-300">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h4 className="text-xl sm:text-2xl font-orbitron text-[#F0F4FF] mb-2 tracking-wide">{sys.title}</h4>
        <h5 className="text-xs font-medium text-[#F0F4FF]/50 mb-6 uppercase tracking-widest">{sys.subtitle}</h5>
        
        <p className="text-[#F0F4FF]/70 text-sm sm:text-base leading-relaxed mb-10 flex-1 font-light">
          {sys.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
          {sys.tech.map((tech: string, techIndex: number) => (
            <span key={techIndex} className="px-3 py-1.5 text-xs font-medium rounded bg-white/5 text-[#F0F4FF]/60 border border-transparent group-hover:border-white/5 transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}