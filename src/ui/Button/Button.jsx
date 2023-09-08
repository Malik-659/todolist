import React from "react";
import "./Button.css";

function Button({ color, children, colorText, className, onClick }) {
  return (
    <button
      className={`btn ${className}`}
      style={{ backgroundColor: color, color: colorText }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
