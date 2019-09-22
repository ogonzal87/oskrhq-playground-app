import React from "react";
import Card from "../../components/Card";

const ShapePage = () => (
  <div className="shape-page">
    <h1>Shape</h1>
    <div className="shape-page-grid">
      <Card height="200px" styles="shape-brick shape-specimen">
        Brick
      </Card>
      <Card height="200px" styles="shape-block shape-specimen">
        Block
      </Card>
      <div className="shape-square shape-specimen">Square</div>
      <div className="shape-circle shape-specimen">Circle</div>
    </div>

    <h2>Containers</h2>
    <div className="shape-page-grid">
      <Card
        height="200px"
        styles="shape-brick shape-specimen shape-container-surface"
      >
        Surface
      </Card>

      <Card
        height="200px"
        styles="shape-brick shape-specimen shape-container-canvas"
      >
        Canvas
      </Card>

      <Card
        height="200px"
        styles="shape-brick shape-specimen shape-container-canvas-shaded"
      >
        Canvas Shaded
      </Card>

      <Card
        height="200px"
        styles="shape-brick shape-specimen shape-container-in-dark"
      >
        in-dark
      </Card>
    </div>

    <h2>Attached Shapes</h2>
    <div className="shape-page-grid">
      <Card
        height="200px"
        styles="shape-block shape-specimen shape-attached-top"
      >
        Attached Top
      </Card>

      <Card
        height="200px"
        styles="shape-block shape-specimen shape-attached-bottom"
      >
        Attached Bottom
      </Card>

      <Card
        height="200px"
        styles="shape-block shape-specimen shape-attached-left"
      >
        Attached Left
      </Card>

      <Card
        height="200px"
        styles="shape-block shape-specimen shape-attached-right"
      >
        Attached Right
      </Card>

      <Card
        height="200px"
        styles="shape-block shape-specimen shape-attributed-top-left"
      >
        Attibuted Top left
      </Card>

      <Card
        height="200px"
        styles="shape-block shape-specimen shape-attributed-top-right"
      >
        Attibuted Top right
      </Card>

      <Card
        height="200px"
        styles="shape-block shape-specimen shape-attributed-bottom-left"
      >
        Attibuted bottom left
      </Card>

      <Card
        height="200px"
        styles="shape-block shape-specimen shape-attributed-bottom-right"
      >
        Attibuted bottom right
      </Card>
    </div>
  </div>
);

export default ShapePage;
