import { motion } from 'motion/react';
import { Shield, BrainCircuit, Activity, Cpu, Code2 } from 'lucide-react';

export function OriginEcosystem() {
  const evolutionSteps = [
    { year: '2019', label: 'Cybersecurity', icon: <Shield className="w-10 h-10 text-[#8A939C]" /> },
    { year: '2021', label: 'AI Systems', icon: <Cpu className="w-10 h-10 text-[#00D4FF]/50" /> },
    { year: '2023', label: 'Security Modules', icon: <Code2 className="w-10 h-10 text-[#00D4FF]" /> },
    { year: '2024', label: 'Trust Orchestration', icon: <Activity className="w-10 h-10 text-[#00FF88]" /> },
    { year: '2025', label: 'Cognitive Intelligence', icon: <BrainCircuit className="w-10 h-10 text-[#A78BFA]" /> },
  ];

  return (
    <section id="origin" className="relative min-h-[120vh] flex flex-col justify-center bg-[#050505] py-40 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-8 sm:px-12 lg:px-24 w-full max-w-[1800px]">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <p className="font-mono text-sm tracking-[0.3em] text-[#A78BFA] uppercase mb-8">
            Origin of the Ecosystem
          </p>
          <h2 className="font-inter text-5xl sm:text-6xl md:text-[6.5rem] text-[#F2F2F2] leading-[1.05] font-light tracking-tight max-w-4xl">
            From Security to<br />Intelligence
          </h2>
        </motion.div>

        {/* Visual Evolution Path */}
        <div className="relative w-full flex flex-col md:flex-row items-start justify-between gap-16 md:gap-0 mt-32">
          
          {/* Horizontal Line connecting them on Desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/10 z-0" />

          {evolutionSteps.map((step, idx) => (
            <motion.div 
              key={step.year}
              className="relative z-10 flex flex-col items-start md:items-center w-full md:w-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-24 h-24 rounded-full border border-white/10 bg-[#0A0A0A] flex items-center justify-center mb-12 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
                {step.icon}
              </div>
              
              <div className="text-left md:text-center">
                <p className="font-mono text-2xl text-[#F2F2F2] font-bold tracking-widest mb-4">{step.year}</p>
                <h3 className="font-inter text-xl md:text-3xl text-[#8A939C] font-light max-w-[200px]">
                  {step.label}
                </h3>
              </div>

              {/* Mobile connecting line */}
              {idx !== evolutionSteps.length - 1 && (
                <div className="md:hidden absolute left-12 top-24 bottom-0 w-px h-full bg-white/10 -z-10" />
              )}
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
