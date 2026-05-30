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
            <div className="process-system">PromptShield</div>
            <div className="process-headline">Every decision begins with trust.</div>
            <div className="process-desc">Prompt interactions are validated before reasoning begins. Intent is verified before execution is permitted.</div>
          </div>
          <div className="process-node-dot"></div>
        </div>
        <div className="process-row sr sr-delay-1">
          <div className="process-index">02</div>
          <div className="process-body">
            <div className="process-system">SIFTGuardian</div>
            <div className="process-headline">Signals become intelligence.</div>
            <div className="process-desc">Threat context is correlated across sources. Raw data becomes structured, actionable threat intelligence.</div>
          </div>
          <div className="process-node-dot" style={{ background: 'var(--emerald)' }}></div>
        </div>
        <div className="process-row sr sr-delay-2">
          <div className="process-index">03</div>
          <div className="process-body">
            <div className="process-system" style={{ color: 'var(--violet)' }}>Consent Guardian</div>
            <div className="process-headline">Boundaries become enforceable.</div>
            <div className="process-desc">Trust constraints are applied before execution. What a system can do is bounded by what it has been permitted to do.</div>
          </div>
          <div className="process-node-dot" style={{ background: 'var(--violet)' }}></div>
        </div>
        <div className="process-row sr sr-delay-3">
          <div className="process-index">04</div>
          <div className="process-body">
            <div className="process-system">CodeSage</div>
            <div className="process-headline">Logic becomes explainable.</div>
            <div className="process-desc">Code paths are analyzed and reasoned about transparently. Every action has a traceable justification.</div>
          </div>
          <div className="process-node-dot"></div>
        </div>
      </div>
    </section>
  );
}
