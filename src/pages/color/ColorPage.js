import React from "react";
import ColorSpecimen from "./color-specimen";

const ColorPage = ({ children, styles }) => (
  <div>
    <h1>Color</h1>

    <p className="og-text-style-text-m-open">
      Just like paint, color is applied on to surfaces. Here you will find all
      the catergories (surfaces) in which color is applied and also the name of
      the corresponding Design Token.
    </p>

    <h2>Backgrounds</h2>
    <div className="color-page-grid">
      <ColorSpecimen name="background-brand" />
      <ColorSpecimen name="background-brand-active" />
      <ColorSpecimen name="background-brand-hover" />
      <ColorSpecimen name="background-brand-in-dark" />
      <ColorSpecimen name="background-brand-in-dark-active" />
      <ColorSpecimen name="background-brand-in-dark-hover" />

      <ColorSpecimen name="background-canvas" />
      <ColorSpecimen name="background-canvas-tinted" />
      <ColorSpecimen name="background-canvas-shaded" />
      <ColorSpecimen name="background-canvas-dark" />

      <ColorSpecimen name="background-scrim" />
    </div>

    <br />
    <br />

    <h2>Text</h2>
    <div className="color-page-grid">
      <ColorSpecimen name="text-primary" />
      <ColorSpecimen name="text-primary-disabled" />

      <ColorSpecimen name="text-secondary" />
      {/* <ColorSpecimen name="text-secondary-disabled">*/}

      <ColorSpecimen name="text-link" />
      <ColorSpecimen name="text-link-active" />

      <ColorSpecimen name="text-negative" />
      <ColorSpecimen name="text-negative-active" />
      {/* <ColorSpecimen name="text-negative-disabled">*/}

      <ColorSpecimen name="text-positive" />
      <ColorSpecimen name="text-positive-active" />
      {/* <ColorSpecimen name="text-negative-disabled">*/}

      <ColorSpecimen name="text-info" />
      <ColorSpecimen name="text-info-active" />
      {/* <ColorSpecimen name="text-negative-disabled">*/}


      <ColorSpecimen name="text-primary-in-dark" />
      {/* <ColorSpecimen name="text-primary-in-dark-active">*/}
      <ColorSpecimen name="text-primary-in-dark-disabled" />

      <ColorSpecimen name="text-secondary-in-dark" />
      {/* <ColorSpecimen name="text-secondary-in-dark-active">*/}
      {/* <ColorSpecimen name="text-secondary-in-dark-disabled">*/}

      <ColorSpecimen name="text-link-in-dark" />
      <ColorSpecimen name="text-link-in-dark-active" />
      {/* <ColorSpecimen name="text-link-in-dark-disabled">*/}

      <ColorSpecimen name="text-negative-in-dark" />
      <ColorSpecimen name="text-negative-in-dark-active" />
      {/* <ColorSpecimen name="text-negative-in-dark-disabled">*/}

      <ColorSpecimen name="text-positive-in-dark" />
      <ColorSpecimen name="text-positive-in-dark-active" />
      {/* <ColorSpecimen name="text-negative-in-dark-disabled">*/}

      <ColorSpecimen name="text-info-in-dark" />
      <ColorSpecimen name="text-info-in-dark-active" />
      {/* <ColorSpecimen name="text-negative-in-dark-disabled">*/}
    </div>

    <br />
    <br />

    <h2>Border</h2>
    <h3>Primary</h3>
    <div className="border-page-grid">
      <ColorSpecimen name="border-primary" />
      <div className="border-specimen-in-dark">
        <ColorSpecimen name="border-primary-in-dark" />
      </div>
    </div>

    <h3>Secondary</h3>
    <div className="border-page-grid">
      <ColorSpecimen name="border-secondary" />
      <div className="border-specimen-in-dark">
        <ColorSpecimen name="border-secondary-in-dark" />
      </div>
    </div>

    <h3>Brand</h3>
    <div className="border-page-grid">
      <ColorSpecimen name="border-brand" />
      <div className="border-specimen-in-dark">
        <ColorSpecimen name="border-brand-in-dark" />
      </div>
    </div>

    <br />
    <br />

    <h2>Icon</h2>
    <div className="color-page-grid">
      <ColorSpecimen name="icon-default">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-accent-2">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-accent-3">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-accent-4">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-positive">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-negative">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-neutral">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-default-in-dark">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-positive-in-dark">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-negative-in-dark">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
      <ColorSpecimen name="icon-neutral-in-dark">
        <svg
          height="20"
          viewBox="0 0 14 20"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 2h-11v20l7-6 7 6v-17c0-1.656-1.344-3-3-3m0 2c.551 0 1 .449 1 1v12.651l-3.698-3.17-1.302-1.116-1.302 1.116-3.698 3.17v-13.651z"
            fill="#fff"
            fill-opacity=".9"
            fill-rule="evenodd"
            transform="translate(-5 -2)"
          />
        </svg>
      </ColorSpecimen>
    </div>
  </div>
);

export default ColorPage;
