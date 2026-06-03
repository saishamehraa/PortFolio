import React from 'react';

export function BranchSplit() {
  return (
    <section id="branch" className="centered eco-section" data-active="all">
      <span className="eyebrow c sr">Architecture Evolution</span>
      <h2 className="sr sr-delay-1">Three Pathways,<br />One Foundation</h2>
      <p className="body-text centered sr sr-delay-2" style={{ maxWidth: '640px' }}>
        The ecosystem trifurcates from the CyberMesh core. Security defends execution, Cognitive maps perception, and Strategic drives organizational intelligence.
      </p>

      <div className="branch-visual sr sr-delay-3">
        <div className="branch-svg-wrap">
          <svg viewBox="0 0 600 240" fill="none" style={{ width: '100%', height: 'auto' }}>
            <line x1="300" y1="20" x2="300" y2="80" stroke="rgba(0,212,255,.3)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="300" cy="80" r="4" fill="var(--cyan)" />
            
            {/* Paths */}
            <path d="M 300 80 Q 300 140 160 140 L 100 140" stroke="rgba(0,212,255,.25)" strokeWidth="1" fill="none" />
            <path d="M 300 80 L 300 140" stroke="rgba(0,232,122,.25)" strokeWidth="1" fill="none" />
            <path d="M 300 80 Q 300 140 440 140 L 500 140" stroke="rgba(167,139,250,.25)" strokeWidth="1" fill="none" />
            
            {/* Animated Particles */}
            <circle r="3" fill="#00D4FF">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 300 20 L 300 80 Q 300 140 160 140 L 100 140" />
            </circle>
            <circle r="3" fill="#00E87A">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.2s" path="M 300 20 L 300 80 L 300 140" />
            </circle>
            <circle r="3" fill="#A78BFA">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.4s" path="M 300 20 L 300 80 Q 300 140 440 140 L 500 140" />
            </circle>

            {/* Boxes and Text */}
            <rect x="65" y="125" width="70" height="30" rx="4" fill="rgba(0,212,255,.05)" stroke="rgba(0,212,255,.3)" strokeWidth="1" />
            <text x="100" y="143" textAnchor="middle" fill="rgba(0,212,255,.8)" fontFamily="'JetBrains Mono',monospace" fontSize="9">Security</text>

            <rect x="250" y="125" width="100" height="30" rx="4" fill="rgba(0,232,122,.05)" stroke="rgba(0,232,122,.3)" strokeWidth="1" />
            <text x="300" y="143" textAnchor="middle" fill="rgba(0,232,122,.8)" fontFamily="'JetBrains Mono',monospace" fontSize="9">Strategic Layer</text>

            <rect x="465" y="125" width="70" height="30" rx="4" fill="rgba(167,139,250,.05)" stroke="rgba(167,139,250,.3)" strokeWidth="1" />
            <text x="500" y="143" textAnchor="middle" fill="rgba(167,139,250,.8)" fontFamily="'JetBrains Mono',monospace" fontSize="9">Human Layer</text>

            <text x="300" y="10" textAnchor="middle" fill="rgba(0,212,255,.5)" fontFamily="'JetBrains Mono',monospace" fontSize="8" letterSpacing=".1em">CyberMesh Core</text>
            <circle cx="300" cy="80" r="16" stroke="rgba(0,212,255,.15)" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
