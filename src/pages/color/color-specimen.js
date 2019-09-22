import React from "react";

const ColorSpecimen = ({ name, children }) => (
  <div className={`color-specimen ${name}`}>{children || name}</div>
);

export default ColorSpecimen;
