import React from 'react';

export function Vision() {
  return (
    <section id="vision" data-active="all" style={{ paddingRight: '220px' }}>
      <span className="eyebrow c sr">AI Security Research Lab — Est. 2024</span>
      <h1 className="sr sr-delay-1">
        Building Trust Infrastructure for <span className="accent-c">Intelligent Systems</span>
      </h1>
      <p className="body-text sr sr-delay-2">
        An operational ecosystem of interconnected intelligence modules — each one a live node in a larger architecture securing the execution pathway from prompt to action.
      </p>
      <div className="btns sr sr-delay-3">
        <a href="#trust" className="btn-p">Explore Ecosystem</a>
        <a href="#" className="btn-o">View GitHub ↗</a>
      </div>

      <svg style={{ position: 'absolute', right: '240px', top: '0', bottom: '0', width: '40%', height: '100%', opacity: 0.7 }} viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="300" r="52" stroke="rgba(0,212,255,0.18)" strokeWidth="1" fill="rgba(0,212,255,0.03)" />
        <circle cx="200" cy="300" r="80" stroke="rgba(0,212,255,0.08)" strokeWidth="1" strokeDasharray="4 7" />
        <circle cx="200" cy="300" r="110" stroke="rgba(0,212,255,0.04)" strokeWidth="1" />
        <text x="200" y="296" textAnchor="middle" fill="rgba(0,212,255,0.8)" fontFamily="'JetBrains Mono',monospace" fontSize="9" letterSpacing=".08em">CyberMesh</text>
        <text x="200" y="310" textAnchor="middle" fill="rgba(0,212,255,0.35)" fontFamily="'JetBrains Mono',monospace" fontSize="7">ORCHESTRATION</text>
        <circle cx="200" cy="300" r="10" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.4)" strokeWidth="1">
          <animate attributeName="r" values="9;12;9" dur="3s" repeatCount="indefinite" />
        </circle>
        <line x1="200" y1="248" x2="200" y2="170" stroke="rgba(0,212,255,0.14)" strokeWidth=".5" />
        <line x1="245" y1="277" x2="310" y2="220" stroke="rgba(0,255,122,0.12)" strokeWidth=".5" />
        <line x1="245" y1="323" x2="310" y2="390" stroke="rgba(0,255,122,0.1)" strokeWidth=".5" />
        <line x1="155" y1="323" x2="90" y2="390" stroke="rgba(167,139,250,0.12)" strokeWidth=".5" />
        <line x1="155" y1="277" x2="90" y2="220" stroke="rgba(0,212,255,0.1)" strokeWidth=".5" />
        <circle cx="200" cy="155" r="22" fill="rgba(0,232,122,0.04)" stroke="rgba(0,232,122,0.22)" strokeWidth=".5" />
        <circle cx="200" cy="155" r="5" fill="rgba(0,232,122,0.8)">
          <animate attributeName="opacity" values="1;.4;1" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <text x="200" y="132" textAnchor="middle" fill="rgba(0,232,122,.7)" fontFamily="'JetBrains Mono',monospace" fontSize="8">PromptShield</text>
        <circle cx="323" cy="210" r="18" fill="rgba(0,232,122,0.03)" stroke="rgba(0,232,122,0.18)" strokeWidth=".5" />
        <circle cx="323" cy="210" r="4" fill="rgba(0,232,122,0.6)">
          <animate attributeName="opacity" values=".6;.2;.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="323" y="192" textAnchor="middle" fill="rgba(0,232,122,.5)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">SIFTGuardian</text>
        <circle cx="323" cy="400" r="18" fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.18)" strokeWidth=".5" />
        <circle cx="323" cy="400" r="4" fill="rgba(0,212,255,0.6)">
          <animate attributeName="opacity" values=".6;.2;.6" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <text x="323" y="382" textAnchor="middle" fill="rgba(0,212,255,.5)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">CodeSage</text>
        <circle cx="77" cy="400" r="18" fill="rgba(167,139,250,0.03)" stroke="rgba(167,139,250,0.18)" strokeWidth=".5" />
        <circle cx="77" cy="400" r="4" fill="rgba(167,139,250,0.6)">
          <animate attributeName="opacity" values=".6;.2;.6" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <text x="77" y="382" textAnchor="middle" fill="rgba(167,139,250,.5)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">Consent Guard.</text>
        <circle cx="77" cy="210" r="18" fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.15)" strokeWidth=".5" />
        <circle cx="77" cy="210" r="4" fill="rgba(0,212,255,0.45)">
          <animate attributeName="opacity" values=".4;.1;.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <text x="77" y="192" textAnchor="middle" fill="rgba(0,212,255,.4)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">SecRitual</text>
        
        <circle r="3" fill="#00D4FF">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M200,248 L200,177" />
          <animate attributeName="opacity" values="0;.9;0" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" fill="#00E87A">
          <animateMotion dur="2.2s" repeatCount="indefinite" begin=".7s" path="M245,277 L310,222" />
          <animate attributeName="opacity" values="0;.8;0" dur="2.2s" repeatCount="indefinite" begin=".7s" />
        </circle>
        <circle r="2.5" fill="#A78BFA">
          <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.4s" path="M155,323 L90,392" />
          <animate attributeName="opacity" values="0;.7;0" dur="2.8s" repeatCount="indefinite" begin="1.4s" />
        </circle>
      </svg>
    </section>
  );
}
