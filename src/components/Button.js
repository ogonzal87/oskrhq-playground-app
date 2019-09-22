import React from "react";

const Button = ({ type, size, children }) => (
  <button className={`og-button--${type} og-button--${size}`}>
    {children}
  </button>
);

export default Button;
