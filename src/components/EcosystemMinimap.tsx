import React, { useEffect } from 'react';

export function EcosystemMinimap() {
  useEffect(() => {
    // Porting the IntersectionObserver logic from reference.html
    const sections = document.querySelectorAll('section');
    const nodes = document.querySelectorAll('.eco-dot');
    const names = document.querySelectorAll('.eco-name');
    
    // Scroll Reveal Logic
    const srObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting) {
          e.target.classList.add('in');
        }
      });
    }, { threshold: 0.15 });
    
    document.querySelectorAll('.sr').forEach(el => srObserver.observe(el));

    // Nav Logic
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting) {
          const activeModules = e.target.getAttribute('data-active');
          
          nodes.forEach(n => {
            n.classList.remove('active', 'dim');
            if (activeModules === 'none') {
              n.classList.add('dim');
            } else if (activeModules === 'all') {
              // all active, no dim
            } else if (activeModules) {
              const isActive = activeModules.split(',').includes(n.id.replace('nav-', ''));
              if(isActive) n.classList.add('active');
              else n.classList.add('dim');
            }
          });

          names.forEach(n => {
            n.classList.remove('active-c', 'active-v', 'dim');
            if (activeModules === 'none') {
              n.classList.add('dim');
            } else if (activeModules === 'all') {
              // no dim
            } else if (activeModules) {
              const rawId = n.previousElementSibling?.id.replace('nav-', '');
              const isActive = activeModules.split(',').includes(rawId || '');
              if (isActive) {
                if (n.classList.contains('c-name')) n.classList.add('active-c');
                if (n.classList.contains('v-name')) n.classList.add('active-v');
              } else {
                n.classList.add('dim');
              }
            }
          });
        }
      });
    }, { threshold: 0.5 });
    
    sections.forEach(s => navObserver.observe(s));

    return () => {
      srObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  return (
    <>
      <nav>
        <div className="logo">SYSTEM_CORE // v2.4.1</div>
        <div className="nav-status">
          <div className="status-dot"></div>
          TELEMETRY LIVE
        </div>
      </nav>

      <div id="eco-nav">
        <div className="eco-header">ECOSYSTEM TRACKER</div>
        
        <div className="eco-track-label sec">SECURITY TRACK</div>
        <div className="eco-node">
          <div id="nav-promptshield" className="eco-dot cyan"></div>
          <div className="eco-name c-name">PromptShield</div>
        </div>
        <div className="eco-node">
          <div id="nav-sift" className="eco-dot cyan"></div>
          <div className="eco-name c-name">SIFTGuardian</div>
        </div>
        <div className="eco-node">
          <div id="nav-consent" className="eco-dot violet"></div>
          <div className="eco-name v-name">Consent Guard.</div>
        </div>
        <div className="eco-node">
          <div id="nav-codesage" className="eco-dot cyan"></div>
          <div className="eco-name c-name">CodeSage</div>
        </div>
        
        <div className="eco-divider"></div>
        
        <div className="eco-node">
          <div id="nav-secritual" className="eco-dot cyan"></div>
          <div className="eco-name c-name">SecRitual</div>
        </div>
        <div className="eco-node">
          <div id="nav-cybermesh" className="eco-dot cyan"></div>
          <div className="eco-name c-name">CyberMesh</div>
        </div>
        
        <div className="eco-divider"></div>
        <div className="eco-track-label cog">COGNITIVE TRACK</div>
        
        <div className="eco-node">
          <div id="nav-openmind" className="eco-dot violet"></div>
          <div className="eco-name v-name">OpenMind Nexus</div>
        </div>
        <div className="eco-node">
          <div id="nav-neuro" className="eco-dot violet"></div>
          <div className="eco-name v-name">NeuroAccess</div>
        </div>
      </div>
    </>
  );
}
