import React from "react";
import BorderSpecimen from "./border-specimen";

const BorderPage = () => (
  <div className="border-page">
    <h2>Borders</h2>
    <h3>100</h3>
    <div className="border-page-grid">
      <BorderSpecimen name="border-100" />
      <div className="border-specimen-in-dark">
        <BorderSpecimen name="border-100-in-dark" />
      </div>
    </div>

    <h3>Thick</h3>
    <div className="border-page-grid">
      <BorderSpecimen name="border-thick" />
      <div className="border-specimen-in-dark">
        <BorderSpecimen name="border-thick-in-dark" />
      </div>
    </div>
  </div>
);

export default BorderPage;

// control: $og-color-border-control, // used to for control elements
// control-focused: $og-color-border-control-focused, // used to for control elements
// control-in-dark: $og-color-border-control-in-dark, // used to for control elements
// brand: $og-color-border-brand,
//brand-in-dark: $og-color-border-brand-in-dark
