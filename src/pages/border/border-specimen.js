import React from "react";

const BorderSpecimen = ({ name, children }) => (
  <div className={`border-specimen ${name}`}>{children || name}</div>
);

export default BorderSpecimen;
