import React from 'react';

export function Vision() {
  return (
    <section id="vision" data-active="all" className="eco-section" style={{ overflow: 'visible' }}>
      <span className="eyebrow c sr">AI Security Research Lab</span>
      <h1 className="sr sr-delay-1">
        Building Trust Infrastructure for <span className="accent-c">Intelligent Systems</span>
      </h1>
      <p className="body-text sr sr-delay-2">
        An operational ecosystem of interconnected intelligence modules — each one a live node in a larger architecture securing the execution pathway from prompt to action.
      </p>
      <div className="btns sr sr-delay-3">
        <a href="#trust" className="btn-p">Explore Ecosystem</a>
        <a href="https://github.com/saishamehraa" className="btn-o">View GitHub ↗</a>
      </div>

      <svg className="hero-svg" style={{ position: 'absolute', right: '120px', top: '0', bottom: '0', width: '45%', height: '100%', maxHeight: '100vh', opacity: 0.7, transform: 'translateY(250px)', zIndex: 10 }} viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* CyberMesh Core */}
        <circle cx="200" cy="300" r="52" stroke="rgba(0,212,255,0.18)" strokeWidth="1" fill="rgba(0,212,255,0.03)" />
        <circle cx="200" cy="300" r="80" stroke="rgba(0,212,255,0.08)" strokeWidth="1" strokeDasharray="4 7" />
        <circle cx="200" cy="300" r="110" stroke="rgba(0,212,255,0.04)" strokeWidth="1" />
        <a href="https://github.com/saishamehraa/CyberMesh" target="_blank" rel="noopener noreferrer"><text x="200" y="325" textAnchor="middle" fill="rgba(0,212,255,0.8)" fontFamily="'JetBrains Mono',monospace" fontSize="9" letterSpacing=".08em">CyberMesh</text></a>
        <text x="200" y="338" textAnchor="middle" fill="rgba(0,212,255,0.35)" fontFamily="'JetBrains Mono',monospace" fontSize="7">ORCHESTRATION</text>
        <circle cx="200" cy="300" r="10" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.4)" strokeWidth="1">
          <animate attributeName="r" values="9;12;9" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Lines */}
        <line x1="200" y1="248" x2="200" y2="218" stroke="rgba(0,212,255,0.14)" strokeWidth=".5" />
        <line x1="200" y1="352" x2="200" y2="382" stroke="rgba(0,212,255,0.14)" strokeWidth=".5" />
        <line x1="148" y1="300" x2="78" y2="300" stroke="rgba(0,212,255,0.14)" strokeWidth=".5" />
        <line x1="252" y1="300" x2="322" y2="300" stroke="rgba(0,212,255,0.14)" strokeWidth=".5" />
        <line x1="200" y1="418" x2="200" y2="452" stroke="rgba(0,212,255,0.14)" strokeWidth=".5" />
        <line x1="200" y1="488" x2="200" y2="522" stroke="rgba(167,139,250,0.14)" strokeWidth=".5" />

        <line x1="167" y1="260" x2="84" y2="157" stroke="rgba(167,139,250,0.12)" strokeWidth=".5" />
        <line x1="233" y1="260" x2="316" y2="157" stroke="rgba(0,232,122,0.12)" strokeWidth=".5" />
        <line x1="89" y1="128" x2="181" y2="72" stroke="rgba(0,232,122,0.12)" strokeWidth=".5" />
        <line x1="311" y1="128" x2="219" y2="72" stroke="rgba(0,232,122,0.12)" strokeWidth=".5" />

        {/* Nodes */}
        {/* Security Track (Cyan) */}
        <circle cx="200" cy="200" r="18" fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.18)" strokeWidth=".5" />
        <circle cx="200" cy="200" r="4" fill="rgba(0,212,255,0.6)">
          <animate attributeName="opacity" values=".6;.2;.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <a href="https://github.com/saishamehraa/PromptShield" target="_blank" rel="noopener noreferrer"><text x="200" y="182" textAnchor="middle" fill="rgba(0,212,255,.7)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">PromptShield</text></a>

        <circle cx="60" cy="300" r="18" fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.18)" strokeWidth=".5" />
        <circle cx="60" cy="300" r="4" fill="rgba(0,212,255,0.6)">
          <animate attributeName="opacity" values=".6;.2;.6" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <a href="https://github.com/saishamehraa/SecRitual" target="_blank" rel="noopener noreferrer"><text x="60" y="282" textAnchor="middle" fill="rgba(0,212,255,.7)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">SecRitual</text></a>

        <circle cx="340" cy="300" r="18" fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.18)" strokeWidth=".5" />
        <circle cx="340" cy="300" r="4" fill="rgba(0,212,255,0.6)">
          <animate attributeName="opacity" values=".6;.2;.6" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <a href="https://github.com/saishamehraa/CodeSage" target="_blank" rel="noopener noreferrer"><text x="340" y="282" textAnchor="middle" fill="rgba(0,212,255,.7)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">CodeSage</text></a>

        <circle cx="200" cy="400" r="18" fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.18)" strokeWidth=".5" />
        <circle cx="200" cy="400" r="4" fill="rgba(0,212,255,0.6)">
          <animate attributeName="opacity" values=".6;.2;.6" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <a href="https://github.com/saishamehraa/ConsentGuardian-AI" target="_blank" rel="noopener noreferrer"><text x="200" y="382" textAnchor="middle" fill="rgba(0,212,255,.7)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">Consent Guard.</text></a>

        <circle cx="200" cy="470" r="18" fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.18)" strokeWidth=".5" />
        <circle cx="200" cy="470" r="4" fill="rgba(0,212,255,0.6)">
          <animate attributeName="opacity" values=".6;.2;.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <a href="https://github.com/saishamehraa/SIFTGuardian" target="_blank" rel="noopener noreferrer"><text x="200" y="452" textAnchor="middle" fill="rgba(0,212,255,.7)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">SIFTGuardian</text></a>

        {/* Cognitive Track (Violet) */}
        <circle cx="70" cy="140" r="22" fill="rgba(167,139,250,0.04)" stroke="rgba(167,139,250,0.22)" strokeWidth=".5" />
        <circle cx="70" cy="140" r="5" fill="rgba(167,139,250,0.8)">
          <animate attributeName="opacity" values="1;.4;1" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <a href="https://github.com/saishamehraa/OpenMind-Nexus" target="_blank" rel="noopener noreferrer"><text x="70" y="112" textAnchor="middle" fill="rgba(167,139,250,.8)" fontFamily="'JetBrains Mono',monospace" fontSize="8">OpenMind Nexus</text></a>

        <circle cx="200" cy="540" r="18" fill="rgba(167,139,250,0.03)" stroke="rgba(167,139,250,0.18)" strokeWidth=".5" />
        <circle cx="200" cy="540" r="4" fill="rgba(167,139,250,0.6)">
          <animate attributeName="opacity" values=".6;.2;.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <a href="https://github.com/saishamehraa/NeuroAccess" target="_blank" rel="noopener noreferrer"><text x="200" y="522" textAnchor="middle" fill="rgba(167,139,250,.7)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">NeuroAccess</text></a>

        {/* Strategic Track (Emerald) */}
        <circle cx="330" cy="140" r="22" fill="rgba(0,232,122,0.04)" stroke="rgba(0,232,122,0.22)" strokeWidth=".5" />
        <circle cx="330" cy="140" r="5" fill="rgba(0,232,122,0.8)">
          <animate attributeName="opacity" values="1;.4;1" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <a href="https://github.com/saishamehraa/StratDean" target="_blank" rel="noopener noreferrer"><text x="330" y="112" textAnchor="middle" fill="rgba(0,232,122,.8)" fontFamily="'JetBrains Mono',monospace" fontSize="8">StratDean</text></a>

        <circle cx="200" cy="60" r="22" fill="rgba(0,232,122,0.04)" stroke="rgba(0,232,122,0.22)" strokeWidth=".5" />
        <circle cx="200" cy="60" r="5" fill="rgba(0,232,122,0.8)">
          <animate attributeName="opacity" values="1;.4;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <a href="https://github.com/saishamehraa/OrbitRing" target="_blank" rel="noopener noreferrer"><text x="200" y="32" textAnchor="middle" fill="rgba(0,232,122,.8)" fontFamily="'JetBrains Mono',monospace" fontSize="8">OrbitRing</text></a>

        {/* Animated Particles */}
        <circle r="2.5" fill="#A78BFA">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M167,260 L84,157" />
          <animate attributeName="opacity" values="0;.8;0" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle r="2.5" fill="#00E87A">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s" path="M233,260 L316,157" />
          <animate attributeName="opacity" values="0;.8;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle r="2" fill="#00E87A">
          <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M89,128 L181,72" />
          <animate attributeName="opacity" values="0;.8;0" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle r="2" fill="#00E87A">
          <animateMotion dur="2s" repeatCount="indefinite" begin="1.5s" path="M311,128 L219,72" />
          <animate attributeName="opacity" values="0;.8;0" dur="2s" repeatCount="indefinite" begin="1.5s" />
        </circle>
        
        <circle r="2" fill="#00D4FF">
          <animateMotion dur="1.5s" repeatCount="indefinite" path="M200,248 L200,218" />
          <animate attributeName="opacity" values="0;.8;0" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle r="2" fill="#00D4FF">
          <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.3s" path="M148,300 L78,300" />
          <animate attributeName="opacity" values="0;.8;0" dur="1.8s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle r="2" fill="#00D4FF">
          <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.6s" path="M252,300 L322,300" />
          <animate attributeName="opacity" values="0;.8;0" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        
        <circle r="2" fill="#00D4FF">
          <animateMotion dur="2s" repeatCount="indefinite" path="M200,352 L200,382" />
          <animate attributeName="opacity" values="0;.8;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="2" fill="#00D4FF">
          <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M200,418 L200,452" />
          <animate attributeName="opacity" values="0;.8;0" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle r="2" fill="#A78BFA">
          <animateMotion dur="2s" repeatCount="indefinite" begin="2s" path="M200,488 L200,522" />
          <animate attributeName="opacity" values="0;.8;0" dur="2s" repeatCount="indefinite" begin="2s" />
        </circle>
      </svg>
    </section>
  );
}
