"use client";

import { useAppContext } from "@/app/context/AppContext";
import Link from "next/link";
import React from "react";

function Logo({ isClickable, isRed }) {
  const { navigateTo, handleHomeReset } = useAppContext();

  const color = isRed ? "#E60023" : "#767676";

  return (
    <div
      className={`mx-2  ${isClickable && "cursor-pointer"}`}
      onClick={() => {
        isClickable && handleHomeReset();
        isClickable && navigateTo("/");
      }}
    >
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={color}
          width="24px"
          height="24px"
          className="h-full max-w-[24px]"
        >
          <path d="M7.55 23.12c-.15-1.36-.04-2.67.25-3.93L9 14.02a7 7 0 0 1-.34-2.07c0-1.68.8-2.88 2.08-2.88.88 0 1.53.62 1.53 1.8q0 .57-.22 1.28l-.53 1.73q-.15.5-.15.91c0 1.2.92 1.88 2.09 1.88 2.08 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.11-5.06-5.11-3.36 0-5.49 2.19-5.49 5.23 0 1.23.38 2.37 1.11 3.15-.24.4-.5.48-.88.48-1.2 0-2.34-1.7-2.34-4 0-3.99 3.2-7.16 7.68-7.16 4.7 0 7.66 3.28 7.66 7.33 0 4.07-2.88 7.13-5.98 7.13a3.8 3.8 0 0 1-3.07-1.47l-.61 2.5c-.33 1.28-.83 2.5-1.62 3.67A12 12 0 0 0 24 11.99 12 12 0 1 0 7.55 23.12"></path>
        </svg>
      </a>
    </div>
  );
}

export default Logo;
