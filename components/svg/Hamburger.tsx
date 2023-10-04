import React from "react";

export default async function Hamburger() {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18L20 18"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#fff"
        stroke-width="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#fff"
        stroke-width="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
