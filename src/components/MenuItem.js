import React from "react";

const MenuItem = ({
  label,
  children,
  helperText,
  sectionTitle,
  hasIconLeft,
  hasIconRight
}) => (
    <li
      className={`og-menu-item
  ${sectionTitle ? "og-menu-item__section-title" : ""}
  ${hasIconLeft || hasIconRight ? "og-menu-item--has-icon" : ""}
  ${helperText ? "og-menu-item--has-helper-text" : ""}`}
    >
      <div className="og-menu-item__right-side">
        {hasIconLeft ? (
          <div className="og-menu-item__icon-left">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd" transform="translate(-3 -3)">
                <path d="m0 24h24v-24h-24z" />
                <path
                  d="m11 13h-8v-2h8v-8h2v8h8v2h-8v8h-2z"
                  fill="#000"
                  fill-opacity=".9"
                />
              </g>
            </svg>
          </div>
        ) : (
            ""
          )}
        <div className="og-menu__text">
          <label>{label || children}</label>
          {helperText ? <p>{helperText}</p> : ""}
        </div>
      </div>

      <div className="og-menu-left-side">
        {hasIconRight ? (
          <div className="og-menu-item__icon-right">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd" transform="translate(-3 -3)">
                <path d="m0 24h24v-24h-24z" />
                <path
                  d="m11 13h-8v-2h8v-8h2v8h8v2h-8v8h-2z"
                  fill="#000"
                  fill-opacity=".9"
                />
              </g>
            </svg>
          </div>
        ) : (
            ""
          )}
      </div>
    </li>
  );

export default MenuItem;
