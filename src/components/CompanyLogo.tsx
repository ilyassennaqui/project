import React from "react";

interface CompanyLogoProps {
  className?: string;
  size?: number; // width and height in px
}

export default function CompanyLogo({ className = "", size = 48 }: CompanyLogoProps) {
  return (
    <svg
      id="ikralum-logo-svg"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`inline-block select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Curving paths for the text to follow */}
        {/* Top arch: runs from middle-left to middle-right over the top (clockwise) */}
        <path
          id="ikralum-top-path"
          d="M 28 100 A 72 72 0 1 1 172 100"
          fill="none"
        />
        {/* Bottom arch: runs from middle-right to middle-left under the bottom (counter-clockwise/upside down correction) */}
        {/* Since Arabic reads right-to-left, keeping it aligned with an arching baseline */}
        <path
          id="ikralum-bottom-path"
          d="M 172 104 A 72 72 0 0 1 28 104"
          fill="none"
        />
      </defs>

      {/* Main cyan/sky-blue circular background */}
      <circle cx="100" cy="100" r="96" fill="#009df0" />

      {/* Outer subtle concentric circle stroke */}
      <circle cx="100" cy="100" r="91" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6,4" className="opacity-40" />

      {/* THREE OVERLAPPING WHITE WINDOW/DOOR PANELS IN THE CENTER */}
      {/* Background/Base panels with deep blue outline and pristine white fill */}
      <g id="center-profiles" transform="translate(10, 5)">
        {/* Panel 1 (Back left) */}
        <rect
          x="60"
          y="62"
          width="46"
          height="82"
          fill="#ffffff"
          stroke="#0055a5"
          strokeWidth="3.5"
          className="transition-all duration-300"
        />
        {/* Panel 2 (Middle) */}
        <rect
          x="70"
          y="70"
          width="46"
          height="82"
          fill="#ffffff"
          stroke="#0055a5"
          strokeWidth="3.5"
          className="transition-all duration-300"
        />
        {/* Panel 3 (Front right) */}
        <rect
          x="88"
          y="80"
          width="46"
          height="82"
          fill="#ffffff"
          stroke="#0055a5"
          strokeWidth="3.5"
          className="transition-all duration-300"
        />
      </g>

      {/* CURVED FRENCH TEXT: Cooperative Professionnelle IKRALUM */}
      <text fill="#ffffff" fontSize="13.2" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.05em">
        <textPath href="#ikralum-top-path" startOffset="50%" textAnchor="middle">
          Cooperative Professionnelle IKRALUM
        </textPath>
      </text>

      {/* CURVED ARABIC TEXT: التعاونية الحرفية إكرالوم */}
      {/* Traditional Naskh/Kufic look rendered in pure legible white */}
      <text fill="#ffffff" fontSize="15.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.02em">
        <textPath href="#ikralum-bottom-path" startOffset="50%" textAnchor="middle">
          التعاونية الحرفية إكرالوم
        </textPath>
      </text>
    </svg>
  );
}
