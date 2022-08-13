import * as React from "react";

const ChevronDownIcon = () => (
  <svg width={10} height={11} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 4.09 5 6.59l2.5-2.5"
      stroke="url(#a)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={5}
        y1={4.09}
        x2={5}
        y2={6.59}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#820AD1" />
        <stop offset={1} stopColor="#39005F" />
      </linearGradient>
    </defs>
  </svg>
);

export default ChevronDownIcon;
