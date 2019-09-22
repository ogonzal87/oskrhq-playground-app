import React from "react";
import Card from "../../components/Card";

const ElevationPage = () => (
  <div className="elevation-page">
    <h2>Elevation</h2>

    <div className="elevation-page-grid">
      <Card height="200px" styles="elevation-100 elevation-specimen">
        100
      </Card>
      <Card height="200px" styles="elevation-shadow elevation-specimen">
        Shadow
      </Card>
    </div>
  </div>
);

export default ElevationPage;
