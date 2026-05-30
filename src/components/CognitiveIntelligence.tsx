import React from 'react';

export function CognitiveIntelligence() {
  return (
    <section id="cognitive" className="centered" data-active="openmind,neuro" style={{ paddingRight: '220px' }}>
      <span className="eyebrow v sr">Human Layer / Research Track</span>
      <h2 className="sr sr-delay-1" style={{ maxWidth: '780px' }}>Mapping the<br />Cognitive Boundary</h2>
      <p className="body-text centered sr sr-delay-2" style={{ maxWidth: '640px' }}>
        While the security track defends execution, the cognitive track explores how intelligence interacts with humans, intent, and reality.
      </p>

      <div className="cog-nodes sr sr-delay-3">
        <div className="cog-node">
          <div className="cog-orb">
            <div className="cog-ring"></div>
            <div className="cog-ring2"></div>
            <div className="cog-orb-core"></div>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="38" stroke="rgba(167,139,250,.2)" strokeWidth="1" strokeDasharray="2 4" fill="none" />
            </svg>
          </div>
          <div className="cog-label">OpenMind</div>
          <div className="cog-desc">Transparency in reasoning structures and model decision weighting.</div>
        </div>
        <div className="cog-node">
          <div className="cog-orb">
            <div className="cog-ring" style={{ animationDuration: '15s' }}></div>
            <div className="cog-ring2" style={{ animationDuration: '25s' }}></div>
            <div className="cog-orb-core" style={{ opacity: 0.8, transform: 'scale(1.2)' }}></div>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="38" stroke="rgba(167,139,250,.2)" strokeWidth="1" strokeDasharray="2 4" fill="none" />
            </svg>
          </div>
          <div className="cog-label">NeuroAccess</div>
          <div className="cog-desc">Brain-computer interface security protocols and neural privacy.</div>
        </div>
      </div>
    </section>
  );
}
