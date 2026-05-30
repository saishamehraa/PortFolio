import React from 'react';

export function TrustFailure() {
  return (
    <section id="failure" className="centered" data-active="none" style={{ background: '#050505' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 1 }} viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="600" cy="350" r="5" fill="rgba(255,68,68,.6)">
          <animate attributeName="opacity" values=".6;.1;.6" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="220" r="3" fill="rgba(255,80,60,.4)">
          <animate attributeName="opacity" values=".4;.05;.4" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="820" cy="280" r="3" fill="rgba(255,68,68,.35)">
          <animate attributeName="opacity" values=".35;.05;.35" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="480" cy="500" r="3" fill="rgba(255,50,50,.4)">
          <animate attributeName="opacity" values=".4;.08;.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="750" cy="460" r="3" fill="rgba(255,80,60,.3)">
          <animate attributeName="opacity" values=".3;.06;.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <line x1="600" y1="350" x2="380" y2="220" stroke="rgba(255,68,68,.1)" strokeWidth=".5" strokeDasharray="3 8" />
        <line x1="600" y1="350" x2="820" y2="280" stroke="rgba(255,68,68,.08)" strokeWidth=".5" strokeDasharray="3 8" />
        <line x1="600" y1="350" x2="480" y2="500" stroke="rgba(255,68,68,.1)" strokeWidth=".5" strokeDasharray="3 8" />
        <line x1="600" y1="350" x2="750" y2="460" stroke="rgba(255,68,68,.07)" strokeWidth=".5" strokeDasharray="3 8" />
        <line x1="0" y1="180" x2="380" y2="180" stroke="rgba(255,68,68,.04)" strokeWidth=".5" />
        <line x1="380" y1="180" x2="400" y2="160" stroke="rgba(255,68,68,.04)" strokeWidth=".5" />
        <line x1="400" y1="160" x2="1200" y2="160" stroke="rgba(255,68,68,.04)" strokeWidth=".5" />
        <line x1="0" y1="380" x2="320" y2="380" stroke="rgba(255,68,68,.03)" strokeWidth=".5" />
        <line x1="320" y1="380" x2="350" y2="340" stroke="rgba(255,68,68,.03)" strokeWidth=".5" />
        <line x1="350" y1="340" x2="1200" y2="340" stroke="rgba(255,68,68,.03)" strokeWidth=".5" />
        <line x1="0" y1="560" x2="280" y2="560" stroke="rgba(255,68,68,.03)" strokeWidth=".5" />
        <line x1="280" y1="560" x2="300" y2="520" stroke="rgba(255,68,68,.03)" strokeWidth=".5" />
        <line x1="300" y1="520" x2="1200" y2="520" stroke="rgba(255,68,68,.03)" strokeWidth=".5" />
      </svg>
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <span className="eyebrow r sr">The Central Problem</span>
        <h2 className="sr sr-delay-1" style={{ maxWidth: '680px', margin: '0 auto' }}>
          Every Intelligent System<br />Fails the Same Way.
        </h2>
        <p style={{ marginTop: '24px', fontSize: '18px', color: 'rgba(138,147,156,.75)', fontWeight: 300 }} className="sr sr-delay-2">
          Not because it lacked intelligence.<br />Because it lacked <span style={{ color: 'rgba(255,80,80,.8)' }}>trust</span>.
        </p>
      </div>
    </section>
  );
}
