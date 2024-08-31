"use client";

import { useRouter } from "next/navigation";
import React from "react";

function TextButton({ title, href, handleHomeReset }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        href && router.push(href);
        handleHomeReset && handleHomeReset();
      }}
      className="px-4 h-[48px] flex items-center rounded-full hover:bg-gray-200"
    >
      <span className="font-medium">{title}</span>
    </button>
  );
}

export default TextButton;
