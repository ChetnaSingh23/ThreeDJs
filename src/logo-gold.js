import React from "react";
import homeIcon from './home.png'
// Usage:
// <LogoGold width={200} />  // Customizable size
export const LogoGold = ({ width = 180, height = 40 }) => (
  <div style={{ display: "flex", alignItems: "center", height }}>
    <img 
      src={homeIcon} 
      alt="Home Icon" 
      style={{ height: 24, marginRight: 2 }} 
    />
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="GoldenCity Logo"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <text 
        x="0" 
        y="30" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="24"
        fill="url(#goldGradient)"
      >
        GoldenCity
      </text>
    </svg>
  </div>
);
