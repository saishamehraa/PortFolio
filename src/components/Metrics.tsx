import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function Metrics() {
  const metrics = [
    { value: "9+", label: "Deployed Projects" },
    { value: "6", label: "AI Security Systems" },
    { value: "3+", label: "Multi-Agent Platforms" },
    { value: "Multiple", label: "Hackathon Submissions" }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-transparent border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Terminal Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex-shrink-0 w-full lg:w-1/3 bg-[#050505] rounded-xl border border-white/10 font-mono text-white/50 p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
              <Terminal className="w-5 h-5 text-white/40" />
              <span className="text-sm tracking-widest uppercase">system_status.sh</span>
            </div>
            <div className="space-y-3 text-sm sm:text-base opacity-80 tracking-wide font-light">
              <p>{">"} INITIALIZING TELEMETRY...</p>
              <p>{">"} SCANNING WORKSPACE...</p>
              <p className="text-[#F0F4FF]/90 mt-6 font-semibold tracking-widest uppercase">
                Focused on AI Security,<br/>Trust & Transparency
              </p>
              <p className="animate-pulse text-[#5CF0FF] mt-2">{">"} _</p>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full grid grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
          >
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col justify-center border-l border-white/10 pl-6 sm:pl-8 py-2 group hover:border-[#4DA6FF]/40 transition-colors duration-500">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-orbitron text-[#F0F4FF]/80 mb-2 group-hover:text-[#F0F4FF] transition-colors duration-500 tracking-wide">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm text-[#F0F4FF]/40 uppercase tracking-widest font-semibold group-hover:text-[#F0F4FF]/60 transition-colors duration-500">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
