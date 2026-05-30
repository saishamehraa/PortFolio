import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function Metrics() {
  const metrics = [
    { value: "9+", label: "Deployed Projects" },
    { value: "6", label: "AI Security Systems" },
    { value: "3", label: "Multi-Agent Platforms" },
    { value: "Multiple", label: "Hackathon Submissions" }
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#0B0D1A] border-y border-[#4DA6FF]/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4DA6FF]/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Terminal Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-1/3 bg-[#05060D] rounded-xl border border-[#5CF0FF]/20 font-mono text-[#5CF0FF] p-6 shadow-[0_0_20px_rgba(92,240,255,0.05)]"
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#5CF0FF]/10">
              <Terminal className="w-5 h-5" />
              <span className="text-sm">system_status.sh</span>
            </div>
            <div className="space-y-2 text-sm sm:text-base opacity-80">
              <p>{">"} INITIALIZING TELEMETRY...</p>
              <p>{">"} SCANNING WORKSPACE...</p>
              <p className="text-[#F0F4FF] mt-4 font-semibold tracking-wide">
                Focused on AI Security,<br/>Trust & Transparency
              </p>
              <p className="animate-pulse">{">"} _</p>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          >
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col justify-center border-l-2 border-[#4DA6FF]/30 pl-4 sm:pl-6 py-2 group hover:border-[#5CF0FF] transition-colors">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-orbitron text-[#F0F4FF] mb-1 group-hover:text-[#5CF0FF] transition-colors drop-shadow-[0_0_8px_rgba(240,244,255,0.5)]">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm text-[#A68CFF] uppercase tracking-wider font-semibold">
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
