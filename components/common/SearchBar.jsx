"use client";

import { useAppContext } from "@/app/context/AppContext";
import React from "react";

function SearchBar({ placeholderText }) {
  const { searchValue, handleSearchChange } = useAppContext();
  return (
    <div className="w-[70%] h-[48px] px-1 flex items-center bg-gray-100 rounded-full pl-5 pr-3 mr-4">
      <svg
        aria-label="Search icon"
        height="16"
        role="img"
        viewBox="0 0 24 24"
        width="16"
        fill="#767676"
        className="mr-2"
      >
        <path d="M10 16a6 6 0 1 1 .01-12.01A6 6 0 0 1 10 16m13.12 2.88-4.26-4.26a10 10 0 1 0-4.24 4.24l4.26 4.26a3 3 0 1 0 4.24-4.24"></path>
      </svg>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={placeholderText}
        className="w-full bg-transparent focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
