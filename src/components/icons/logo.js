import React from 'react';

const IconLogo = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 84 96"
  >
    <title>Logo</title>

    <g transform="translate(-8, -2)">
      <g transform="translate(11, 5)">
        {/* Hexagon */}
        <polygon
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />

        {/* Letter P */}
        <path
          fill="currentColor"
          d="
            M28 30
            L28 62
            L34 62
            L34 48
            L40 48
            C48 48 52 44 52 38
            C52 32 48 30 40 30
            Z

            M34 35
            L40 35
            C45 35 47 36.5 47 38.5
            C47 40.5 45 43 40 43
            L34 43
            Z
          "
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;
