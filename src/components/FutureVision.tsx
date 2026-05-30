import React from 'react';

export function FutureVision() {
  return (
    <>
      <section id="future" data-active="all" style={{ paddingRight: '220px', paddingBottom: '120px' }}>
        <div className="sr">
          <span className="eyebrow c">The Horizon</span>
          <h2>The Ecosystem<br />is <span className="accent-c">Expanding.</span></h2>
          <p className="body-text">
            Security is not a feature. It is an architecture. We are building the foundational modules for a future where machine intelligence operates transparently, safely, and entirely within the boundaries of human trust.
          </p>
          <div className="btns">
            <a href="mailto:contact@lab.com" className="btn-p">Partner with Lab</a>
            <a href="#" className="btn-o">Read Research ↗</a>
          </div>
        </div>
        <div className="sr sr-delay-2" style={{ width: '100%', height: '100%', position: 'relative' }}>
          <svg viewBox="0 0 400 400" fill="none" style={{ width: '100%', height: '100%' }}>
            <circle cx="200" cy="200" r="120" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />
            <circle cx="200" cy="200" r="160" stroke="rgba(0,212,255,0.04)" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="200" cy="200" r="80" fill="rgba(0,212,255,0.02)" stroke="rgba(0,212,255,0.12)" strokeWidth="1" />
            <circle cx="200" cy="200" r="12" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.4)" strokeWidth="1">
              <animate attributeName="r" values="10;14;10" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="115" cy="115" r="3" fill="var(--cyan)">
              <animate attributeName="opacity" values="1;.2;1" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="285" cy="115" r="3" fill="var(--emerald)">
              <animate attributeName="opacity" values="1;.2;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="115" cy="285" r="3" fill="var(--violet)">
              <animate attributeName="opacity" values="1;.2;1" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="285" cy="285" r="3" fill="var(--cyan)">
              <animate attributeName="opacity" values="1;.2;1" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <line x1="115" y1="115" x2="200" y2="200" stroke="rgba(0,212,255,.1)" strokeWidth=".5" />
            <line x1="285" y1="115" x2="200" y2="200" stroke="rgba(0,232,122,.1)" strokeWidth=".5" />
            <line x1="115" y1="285" x2="200" y2="200" stroke="rgba(167,139,250,.1)" strokeWidth=".5" />
            <line x1="285" y1="285" x2="200" y2="200" stroke="rgba(0,212,255,.1)" strokeWidth=".5" />
          </svg>
        </div>
      </section>
      <footer>
        <div className="footer-mono">© 2024 AI Security Research Lab.</div>
        <div className="footer-mono" style={{ color: 'rgba(0,212,255,.5)' }}>SYSTEM_STATUS: NOMINAL</div>
      </footer>
    </>
  );
}
