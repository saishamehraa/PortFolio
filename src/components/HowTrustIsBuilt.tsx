import React from 'react';

export function HowTrustIsBuilt() {
  return (
    <section id="process" data-active="promptshield,sift,consent,codesage" style={{ paddingRight: '220px', paddingTop: '120px', paddingBottom: '120px' }}>
      <span className="eyebrow c sr">Architecture — Trust Layer</span>
      <h2 className="sr sr-delay-1" style={{ maxWidth: '560px' }}>How Trust<br />Is Built</h2>
      <div style={{ marginTop: '60px', width: '100%' }}>
        <div className="process-row sr">
          <div className="process-index">01</div>
          <div className="process-body">
            <div className="process-system">
              <a href="https://github.com/saishamehraa/PromptShield" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>PromptShield</a>
            </div>
            <div className="process-headline">Every decision begins with trust.</div>
            <div className="process-desc">Every intelligent decision begins with trusted input.</div>
          </div>
          <div className="process-node-dot"></div>
        </div>
        <div className="process-row sr sr-delay-1">
          <div className="process-index">02</div>
          <div className="process-body">
            <div className="process-system">
              <a href="https://github.com/saishamehraa/SIFTGuardian" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>SIFTGuardian</a>
            </div>
            <div className="process-headline">Signals become intelligence.</div>
            <div className="process-desc">Signals become intelligence when context is verified.</div>
          </div>
          <div className="process-node-dot" style={{ background: 'var(--emerald)' }}></div>
        </div>
        <div className="process-row sr sr-delay-2">
          <div className="process-index">03</div>
          <div className="process-body">
            <div className="process-system" style={{ color: 'var(--violet)' }}>
              <a href="https://github.com/saishamehraa/ConsentGuardian" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Consent Guardian</a>
            </div>
            <div className="process-headline">Boundaries become enforceable.</div>
            <div className="process-desc">Trust becomes enforceable when boundaries are explicit.</div>
          </div>
          <div className="process-node-dot" style={{ background: 'var(--violet)' }}></div>
        </div>
        <div className="process-row sr sr-delay-3">
          <div className="process-index">04</div>
          <div className="process-body">
            <div className="process-system">
              <a href="https://github.com/saishamehraa/CodeSage" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>CodeSage</a>
            </div>
            <div className="process-headline">Logic becomes explainable.</div>
            <div className="process-desc">Reasoning is valuable only when execution is explainable.</div>
          </div>
          <div className="process-node-dot"></div>
        </div>
      </div>
    </section>
  );
}
