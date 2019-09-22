import React from "react";

function MotionPage() {
  return (
    <div style={{ margin: "0 auto", width: "1024px" }}>
      <h2>Motion</h2>
      <h3 className="og-usage-title">Speed</h3>
      <div className="og-motion-specimens-container">
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-duration(fast-83)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-duration1" />
        </div>
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-duration(fast-167)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-duration2" />
        </div>
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-duration(moderate-334)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-duration3" />
        </div>
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-duration(moderate-500)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-duration4" />
        </div>
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-duration(slow-834)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-duration5" />
        </div>
      </div>

      <h3 className="og-usage-title">Easing</h3>
      <p>*With a slow animation of 834ms to clearly see the cubic-bezier</p>

      <div className="og-motion-specimens-container">
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-easing(standard)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-easing1" />
        </div>
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-easing(in)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-easing2" />
        </div>
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-easing(out)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-easing3" />
        </div>
        {/* <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-easing(excite)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-easing4" />
        </div>
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-easing(overshoot)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-easing5" />
        </div>
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-easing(anticipate)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-easing6" />
        </div>
 */}
      </div>

      <h3 className="og-usage-title">Delay</h3>
      <div className="og-motion-specimens-container">
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-delay(hurry)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-delay1" />
        </div>
      </div>
      <div className="og-motion-specimens-container">
        <div className="og-motion-specimen-container">
          <div className="og-motion-specimen-code">
            <code>og-delay(wait)</code>
          </div>
          <div className="og-motion-specimen og-motion-specimen-delay2" />
        </div>
      </div>
    </div>
  );
}

export default MotionPage;
