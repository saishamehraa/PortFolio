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
    <section id="about" className="relative py-16 sm:py-20 lg:py-32 bg-[#05060D]">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4 inline-block drop-shadow-[0_0_10px_rgba(92,240,255,0.3)]">
              Architecture & Vision
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] mx-auto mt-4 rounded-full opacity-50" />
          </motion.div>

          {/* Content Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="space-y-6 text-base sm:text-lg text-[#F0F4FF]/90 font-light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="leading-relaxed text-xl text-[#F0F4FF]">
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
              className="grid gap-4 sm:gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 sm:p-6 bg-[#0B0D1A]/80 border border-[#4DA6FF]/10 rounded-xl backdrop-blur-sm hover:border-[#5CF0FF]/30 hover:bg-[#111426] transition-all duration-300 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#05060D] border border-[#4DA6FF]/20 rounded-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(92,240,255,0.2)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[#F0F4FF] font-semibold text-lg mb-1 tracking-wide">{item.title}</h3>
                    <p className="text-[#F0F4FF]/70 text-sm sm:text-base leading-relaxed">{item.desc}</p>
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