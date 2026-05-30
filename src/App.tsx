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
    <>
      <EcosystemMinimap />
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
    </>
  );
}
