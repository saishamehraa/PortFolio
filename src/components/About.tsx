import { motion } from 'motion/react';
import { Shield, BrainCircuit, Network } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Shield className="w-6 h-6 text-[#5CF0FF]" />,
      title: "AI Security Systems",
      desc: "Prompt injection defense and autonomous response."
    },
    {
      icon: <Network className="w-6 h-6 text-[#4DA6FF]" />,
      title: "Trust Orchestration",
      desc: "Deployment trust reasoning and AI governance."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-[#A68CFF]" />,
      title: "Cognitive Intelligence",
      desc: "Multi-agent cognitive risk analysis."
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            className="text-center mb-16 sm:mb-24"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4 inline-block tracking-wide">
              Architecture & Vision
            </h2>
          </motion.div>

          {/* Content Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="space-y-8 text-base sm:text-lg text-[#F0F4FF]/70 font-light"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p className="leading-relaxed text-2xl text-[#F0F4FF]/90 font-normal">
                I build <span className="text-[#5CF0FF] font-medium">AI-powered systems</span> focused on security, trust, transparency, and intelligent decision-making.
              </p>

              <p className="leading-relaxed">
                My work explores how <span className="text-[#A68CFF]">multi-agent reasoning</span>, cognitive intelligence, and autonomous orchestration can solve real-world security and information integrity challenges.
              </p>

              <p className="leading-relaxed">
                From prompt injection defense and deployment trust reasoning to cognitive risk analysis and explainable AI systems, I focus on building practical infrastructure for a <span className="text-[#4DA6FF] font-medium">more trustworthy AI future</span>.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-5 p-6 bg-[#050505] border border-white/5 rounded-xl transition-all duration-500 group shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 border border-transparent rounded-lg transition-colors duration-300 group-hover:border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[#F0F4FF] font-orbitron text-lg mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-[#F0F4FF]/60 text-sm sm:text-base leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}