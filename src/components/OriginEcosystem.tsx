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
            <div className="origin-title">Cybersecurity Curiosity</div>
            <div className="origin-sub">The foundation was built on understanding how complex systems fail under adversarial pressure and how defenses must evolve.</div>
          </div>
        </div>
        <div className="origin-step">
          <div className="origin-year">PHASE 2</div>
          <div className="origin-text">
            <div className="origin-title">AI Reasoning</div>
            <div className="origin-sub">As intelligent models grew, the focus shifted to understanding their decision-making processes and execution pathways.</div>
          </div>
        </div>
        <div className="origin-step">
          <div className="origin-year">PHASE 3</div>
          <div className="origin-text">
            <div className="origin-title">Trust Problems</div>
            <div className="origin-sub">It became clear that AI didn't just lack capability—it lacked enforceable boundaries and verifiable intent.</div>
          </div>
        </div>
        <div className="origin-step active-step">
          <div className="origin-year">PHASE 4</div>
          <div className="origin-text">
            <div className="origin-title">Multi-Agent Systems</div>
            <div className="origin-sub">To solve the trust gap, we developed orchestrated ecosystems where autonomous agents could cross-validate and secure each other.</div>
          </div>
        </div>
        <div className="origin-step" style={{ borderLeftColor: 'transparent' }}>
          <div className="origin-year">PHASE 5</div>
          <div className="origin-text">
            <div className="origin-title">Cognitive Intelligence</div>
            <div className="origin-sub">The final frontier extends beyond security—exploring how intelligence safely interacts with human perception and intent.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
