import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Shield, BrainCircuit, Activity } from 'lucide-react';

export function Projects() {
  const projectCategories = [
    {
      title: "AI Security Ecosystem",
      icon: <Shield className="w-6 h-6 text-[#5CF0FF]" />,
      projects: [
        {
          title: 'PromptShield',
          description: 'Prompt Injection Defense System',
          tech: ['Python', 'AI Security', 'LLMs'],
          github: 'https://github.com/saishamehraa/PromptShield',
          demo: 'https://promptshield-vkdv.onrender.com/',
        },
        {
          title: 'SIFTGuardian',
          description: 'Threat Intelligence & Vulnerability Correlation',
          tech: ['Threat Intelligence', 'Analysis'],
          github: 'https://github.com/saishamehraa/Sift_Guardian',
          demo: '#',
        },
        {
          title: 'ConsentGuardian-AI',
          description: 'AI Governance & Authorization Framework',
          tech: ['Governance', 'Authorization', 'AI'],
          github: 'https://github.com/saishamehraa/ConsentGuardian-AI',
          demo: 'https://consentguardian-ai.onrender.com',
        },
        {
          title: 'CodeSage',
          description: 'Repository Intelligence & Security Analysis',
          tech: ['Static Analysis', 'Intelligence'],
          github: 'https://github.com/saishamehraa/CodeSage',
          demo: 'https://codesage-9u2l.onrender.com/',
        },
        {
          title: 'SecRitual',
          description: 'Trust Orchestration & Security Reasoning Engine',
          tech: ['Trust Reasoning', 'Orchestration'],
          github: 'https://github.com/saishamehraa/SecRitual',
          demo: 'https://secritual-ai.onrender.com',
        },
        {
          title: 'CyberMesh',
          description: 'Autonomous Infrastructure Response Layer',
          tech: ['Autonomous Response', 'Infrastructure'],
          github: 'https://github.com/saishamehraa/CyberMesh',
          demo: 'https://cybermesh-ai.onrender.com',
        }
      ]
    },
    {
      title: "Cognitive Intelligence Systems",
      icon: <BrainCircuit className="w-6 h-6 text-[#A68CFF]" />,
      projects: [
        {
          title: 'OpenMind-Nexus',
          description: 'Multi-Agent Cognitive Risk Intelligence Platform',
          tech: ['Multi-Agent', 'Cognitive Risk'],
          github: 'https://github.com/saishamehraa/OpenMind-Nexus',
          demo: 'https://openmind-nexus.onrender.com',
        },
        {
          title: 'NeuroAccess',
          description: 'AI Accessibility & Multi-LLM Workspace',
          tech: ['Accessibility', 'Multi-LLM'],
          github: 'https://github.com/saishamehraa/NeuroAccess',
          demo: 'https://neuroaccess-gk0c.onrender.com/',
        }
      ]
    },
    {
      title: "Security Utilities",
      icon: <Activity className="w-6 h-6 text-[#4DA6FF]" />,
      projects: [
        {
          title: 'PhishGuard',
          description: 'Fraud & Phishing Detection',
          tech: ['Fraud Detection', 'Security Utility'],
          github: 'https://github.com/saishamehraa/PhishGuard',
          demo: '#',
        }
      ]
    },
    {
      title: "Archive Projects / Early Experiments",
      icon: <Code2 className="w-6 h-6 text-[#F0F4FF]/50" />,
      projects: [
        {
          title: 'Birthdayyy',
          description: 'Early experimental project.',
          tech: ['Web'],
          github: 'https://github.com/saishamehraa/Birthdayyy',
          demo: 'https://gleeful-pothos-b1e30a.netlify.app/',
        },
        {
          title: 'PortFolio',
          description: 'Legacy Portfolio Site',
          tech: ['React', 'Web'],
          github: 'https://github.com/saishamehraa/PortFolio',
          demo: 'https://techieinterns.vercel.app/',
        },
        {
          title: 'Edu.java',
          description: 'Early educational application in Java.',
          tech: ['Java'],
          github: 'https://github.com/saishamehraa/Edu.java',
          demo: '#',
        },
        {
          title: 'StellinaPerfume',
          description: 'E-commerce experiment.',
          tech: ['E-commerce'],
          github: 'https://github.com/saishamehraa/StellinaPerfume',
          demo: '#',
        }
      ]
    }
  ];

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-32 bg-[#05060D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4 inline-block drop-shadow-[0_0_10px_rgba(92,240,255,0.3)]">
            Deployed Infrastructure
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] mx-auto mt-4 rounded-full opacity-50" />
        </motion.div>

        <div className="space-y-20">
          {projectCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="p-3 bg-[#0B0D1A] rounded-xl border border-[#4DA6FF]/20">
                  {category.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-orbitron text-[#F0F4FF]">{category.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#4DA6FF]/30 to-transparent ml-4" />
              </motion.div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-[#0B0D1A]/80 rounded-2xl overflow-hidden border border-[#4DA6FF]/10 hover:border-[#5CF0FF]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(92,240,255,0.1)] flex flex-col h-full"
                  >
                    <div className="p-6 sm:p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <Code2 className="w-8 h-8 text-[#5CF0FF] opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F0F4FF]/50 hover:text-[#5CF0FF] transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          {project.demo !== '#' && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#F0F4FF]/50 hover:text-[#5CF0FF] transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h4 className="text-xl font-orbitron text-[#F0F4FF] mb-2 group-hover:text-[#5CF0FF] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-[#F0F4FF]/70 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-[#4DA6FF]/10 text-[#4DA6FF] border border-[#4DA6FF]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}