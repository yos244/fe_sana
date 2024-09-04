import React from 'react';
import './Button.css';

function Button({ label }) {
  return (
    <button className="store-button">
      {label}
    </button>
  );
}

export default Button;
