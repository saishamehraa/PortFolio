import { EcosystemMinimap } from './components/EcosystemMinimap';
import { Vision } from './components/Vision';
import { TrustMatters } from './components/TrustMatters';
import { TrustFailure } from './components/TrustFailure';
import { HowTrustIsBuilt } from './components/HowTrustIsBuilt';
import { OrchestrationFlow } from './components/OrchestrationFlow';
import { SecurityIntelligence } from './components/SecurityIntelligence';
import { BranchSplit } from './components/BranchSplit';
import { CognitiveIntelligence } from './components/CognitiveIntelligence';
import { OriginEcosystem } from './components/OriginEcosystem';
import { FutureVision } from './components/FutureVision';
import './styles/globals.css';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F0F4FF] overflow-x-hidden selection:bg-[#5CF0FF]/30 selection:text-white">
      {/* Global Intelligence Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30" />
      
      {/* Persistent Living Map */}
      <EcosystemMinimap />

      <div className="relative z-10 flex flex-col">
        <Vision />
        <TrustMatters />
        <TrustFailure />
        <HowTrustIsBuilt />
        <OrchestrationFlow />
        <SecurityIntelligence />
        <BranchSplit />
        <CognitiveIntelligence />
        <OriginEcosystem />
        <FutureVision />
      </div>
    </div>
  );
}
