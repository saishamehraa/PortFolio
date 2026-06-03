import React from 'react';

export function StrategicIntelligence() {
  return (
    <section id="strategic" className="centered eco-section" data-active="stratdean">
      <span className="eyebrow e sr">Strategic Layer / Organizational Track</span>
      <h2 className="sr sr-delay-1" style={{ maxWidth: '780px' }}>Transforming Knowledge<br />Into Execution</h2>
      <p className="body-text centered sr sr-delay-2" style={{ maxWidth: '640px' }}>
        Moving beyond security and cognition, the strategic track explores how organizations convert intelligence into coordinated execution and decision support.
      </p>

      <div className="cog-nodes sr sr-delay-3">
        <div className="cog-node">
          <div className="cog-orb">
            <div className="cog-ring" style={{ borderColor: 'rgba(0,232,122,0.5)', animationDuration: '10s' }}></div>
            <div className="cog-ring2" style={{ borderColor: 'rgba(0,232,122,0.3)', animationDuration: '20s' }}></div>
            <div className="cog-orb-core" style={{ backgroundColor: '#00E87A', opacity: 0.9, transform: 'scale(1.3)', boxShadow: '0 0 20px rgba(0,232,122,0.4)' }}></div>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="38" stroke="rgba(0,232,122,.2)" strokeWidth="1" strokeDasharray="2 4" fill="none" />
            </svg>
          </div>
          <div className="cog-label" style={{ color: '#00E87A' }}>
            <a href="https://github.com/saishamehraa/StratDean" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>StratDean</a>
          </div>
          <div className="cog-desc">AI Chief of Staff & Organizational Intelligence</div>
        </div>
      </div>
    </section>
  );
}
