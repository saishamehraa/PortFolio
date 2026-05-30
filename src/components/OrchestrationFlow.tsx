import React from 'react';

export function OrchestrationFlow() {
  return (
    <section id="flow" className="centered" data-active="secritual,cybermesh" style={{ background: 'linear-gradient(180deg,#050505,#060b0e)', paddingRight: '220px' }}>
      <span className="eyebrow c sr">Orchestration</span>
      <h2 className="sr sr-delay-1">How Systems<br />Work Together</h2>
      <div className="flow-wrap sr sr-delay-2">
        <div className="flow-box">
          <div className="flow-label">LAYER 01</div>
          <div className="flow-title">Modules</div>
          <div className="flow-nodes">PromptShield<br />SIFTGuardian<br />Consent Guardian<br />CodeSage</div>
        </div>
        <div className="flow-connector">
          <div className="flow-line">
            <div className="flow-arrow-tip"></div>
            <div className="sig"></div>
            <div className="sig sig2"></div>
            <div className="sig sig3"></div>
          </div>
        </div>
        <div className="flow-box" style={{ borderColor: 'rgba(0,212,255,0.2)' }}>
          <div className="flow-label">LAYER 02</div>
          <div className="flow-title">Reasoning</div>
          <div className="flow-nodes">SecRitual</div>
        </div>
        <div className="flow-connector">
          <div className="flow-line">
            <div className="flow-arrow-tip"></div>
            <div className="sig" style={{ animationDelay: '.3s' }}></div>
            <div className="sig sig2" style={{ animationDelay: '1.15s' }}></div>
            <div className="sig sig3" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        <div className="flow-box" style={{ borderColor: 'rgba(0,212,255,0.35)' }}>
          <div className="flow-label">LAYER 03</div>
          <div className="flow-title">Orchestration</div>
          <div className="flow-nodes">CyberMesh</div>
        </div>
      </div>
    </section>
  );
}
