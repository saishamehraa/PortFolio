import React from 'react';

export function SecurityIntelligence() {
  return (
    <section id="security" data-active="secritual,cybermesh" style={{ paddingRight: '220px' }}>
      <div className="security-split">
        <div className="sr">
          <span className="eyebrow c">Security Intelligence</span>
          <h2>Defend the<br />Execution Pathway</h2>
          <div className="security-bullets">
            <div className="security-bullet">Dynamic threat reasoning and adaptive response</div>
            <div className="security-bullet">Cross-module orchestration and signal routing</div>
            <div className="security-bullet">Continuous trust propagation across system state</div>
            <div className="security-bullet">Auditable execution pathways with traceable justification</div>
          </div>
        </div>
        <svg viewBox="0 0 380 380" fill="none" className="sr sr-delay-1" style={{ width: '100%' }}>
          <circle cx="190" cy="190" r="140" fill="rgba(0,212,255,0.02)" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />
          <circle cx="190" cy="190" r="100" stroke="rgba(0,212,255,0.08)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="190" cy="190" r="60" stroke="rgba(0,212,255,0.12)" strokeWidth="1" />
          <circle cx="190" cy="190" r="28" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.35)" strokeWidth="1">
            <animate attributeName="r" values="26;30;26" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <text x="190" y="186" textAnchor="middle" fill="rgba(0,212,255,.75)" fontFamily="'JetBrains Mono',monospace" fontSize="8" letterSpacing=".07em">CyberMesh</text>
          <text x="190" y="198" textAnchor="middle" fill="rgba(0,212,255,.3)" fontFamily="'JetBrains Mono',monospace" fontSize="6.5">ORCHESTRATION</text>
          <circle cx="190" cy="82" r="22" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.22)" strokeWidth=".5" />
          <circle cx="190" cy="82" r="5" fill="rgba(0,212,255,.8)">
            <animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="190" y="63" textAnchor="middle" fill="rgba(0,212,255,.7)" fontFamily="'JetBrains Mono',monospace" fontSize="7.5">SecRitual</text>
          <circle cx="289" cy="140" r="16" fill="rgba(0,232,122,0.03)" stroke="rgba(0,232,122,0.18)" strokeWidth=".5" />
          <circle cx="289" cy="140" r="4" fill="rgba(0,232,122,.6)">
            <animate attributeName="opacity" values=".6;.15;.6" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <text x="289" y="122" textAnchor="middle" fill="rgba(0,232,122,.45)" fontFamily="'JetBrains Mono',monospace" fontSize="7">PromptShield</text>
          <circle cx="289" cy="255" r="16" fill="rgba(0,232,122,0.03)" stroke="rgba(0,232,122,0.15)" strokeWidth=".5" />
          <circle cx="289" cy="255" r="4" fill="rgba(0,232,122,.5)">
            <animate attributeName="opacity" values=".5;.12;.5" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <text x="289" y="275" textAnchor="middle" fill="rgba(0,232,122,.4)" fontFamily="'JetBrains Mono',monospace" fontSize="7">SIFTGuardian</text>
          <circle cx="91" cy="255" r="16" fill="rgba(167,139,250,0.03)" stroke="rgba(167,139,250,0.15)" strokeWidth=".5" />
          <circle cx="91" cy="255" r="4" fill="rgba(167,139,250,.5)">
            <animate attributeName="opacity" values=".5;.12;.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <text x="91" y="275" textAnchor="middle" fill="rgba(167,139,250,.4)" fontFamily="'JetBrains Mono',monospace" fontSize="7">Consent Guard.</text>
          <circle cx="91" cy="140" r="16" fill="rgba(0,212,255,0.03)" stroke="rgba(0,212,255,0.15)" strokeWidth=".5" />
          <circle cx="91" cy="140" r="4" fill="rgba(0,212,255,.45)">
            <animate attributeName="opacity" values=".45;.1;.45" dur="3.8s" repeatCount="indefinite" />
          </circle>
          <text x="91" y="122" textAnchor="middle" fill="rgba(0,212,255,.38)" fontFamily="'JetBrains Mono',monospace" fontSize="7">CodeSage</text>
          <line x1="190" y1="162" x2="190" y2="104" stroke="rgba(0,212,255,.2)" strokeWidth=".5" strokeDasharray="3 5" />
          <line x1="269" y1="146" x2="214" y2="170" stroke="rgba(0,232,122,.12)" strokeWidth=".5" strokeDasharray="3 5" />
          <line x1="269" y1="249" x2="214" y2="210" stroke="rgba(0,232,122,.1)" strokeWidth=".5" strokeDasharray="3 5" />
          <line x1="111" y1="249" x2="166" y2="210" stroke="rgba(167,139,250,.12)" strokeWidth=".5" strokeDasharray="3 5" />
          <line x1="111" y1="146" x2="166" y2="170" stroke="rgba(0,212,255,.1)" strokeWidth=".5" strokeDasharray="3 5" />
          <circle r="2.5" fill="#00D4FF">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M190,162 L190,104" />
            <animate attributeName="opacity" values="0;.9;0" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle r="2" fill="#00E87A">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin=".6s" path="M269,146 L214,170" />
            <animate attributeName="opacity" values="0;.8;0" dur="1.8s" repeatCount="indefinite" begin=".6s" />
          </circle>
        </svg>
      </div>
    </section>
  );
}
