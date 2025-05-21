import React from 'react';
import { Link } from 'react-router-dom';
import './PlusButton.css';

const PlusButton = ({ to, children }) => {
  return (
    <Link to={to} className="plus-button">
      <svg 
        className="plus-icon"
        width="18" /* Increased size slightly */
        height="18" 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M8 1V15M1 8H15" 
          stroke="currentColor" 
          strokeWidth="2.5" /* Made stroke slightly bolder */
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className="plus-button-text">{children || "Create New Jam"}</span>
    </Link>
  );
};

export default PlusButton;
