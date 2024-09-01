"use client";

import { useAppContext } from "@/app/context/AppContext";
import React from "react";

function TextButton({ title, href, handleHomeReset, bgColor }) {
  const { navigateTo } = useAppContext();

  return (
    <button
      onClick={() => {
        href && navigateTo(href);
        handleHomeReset && handleHomeReset();
      }}
      className={`px-4 h-[48px] items-center rounded-full hover:bg-gray-200 min-w-max md:flex hidden ${bgColor}`}
    >
      <span className="font-medium">{title}</span>
    </button>
  );
}

export default TextButton;
