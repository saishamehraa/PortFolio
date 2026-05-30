import React from 'react';

export function OriginEcosystem() {
  return (
    <section id="origin" data-active="none" style={{ paddingRight: '220px', background: '#050505', paddingTop: '100px' }}>
      <span className="eyebrow sr">From Security to Intelligence</span>
      <h2 className="sr sr-delay-1" style={{ maxWidth: '640px' }}>How the Ecosystem<br />Evolved</h2>
      
      <div className="origin-path sr sr-delay-2">
        <div className="origin-step">
          <div className="origin-year">PHASE 1</div>
          <div className="origin-text">
            <div className="origin-title">The Input Problem</div>
            <div className="origin-sub">The system began by solving prompt injection and jailbreaks. PromptShield was developed to validate intent before an LLM could parse a command.</div>
          </div>
        </div>
        <div className="origin-step">
          <div className="origin-year">PHASE 2</div>
          <div className="origin-text">
            <div className="origin-title">Context &amp; Constraints</div>
            <div className="origin-sub">Validating input wasn't enough. We needed threat intelligence (SIFTGuardian) and execution boundaries (Consent Guardian) to ensure the AI couldn't be tricked by external data or overstep permissions.</div>
          </div>
        </div>
        <div className="origin-step active-step">
          <div className="origin-year">PHASE 3</div>
          <div className="origin-text">
            <div className="origin-title">Orchestrating Trust</div>
            <div className="origin-sub">As the modules grew, they needed a central nervous system. SecRitual handled local reasoning, while CyberMesh was built to orchestrate the entire flow of trust across the network.</div>
          </div>
        </div>
        <div className="origin-step" style={{ borderLeftColor: 'transparent' }}>
          <div className="origin-year">PHASE 4</div>
          <div className="origin-text">
            <div className="origin-title">The Cognitive Frontier</div>
            <div className="origin-sub">With execution pathways secured, research expanded outward. How do models reason? (OpenMind). How does AI interact with human neural pathways safely? (NeuroAccess).</div>
          </div>
        </div>
      </div>
    </section>
  );
}
