"use client";

import { useAppContext } from "@/app/context/AppContext";
import React from "react";

function FolderIcon({ folderName }) {
  const { savedPins } = useAppContext();

  const translateXValues = ["0px", "20px", "40px", "60px", "80px"];
  const savedPinsLength = savedPins[folderName].length;
  const fivePinsForFolderDisplay = savedPins[folderName].slice(0, 5);

  return (
    <div className="h-[157px] w-[117px] relative mb-2">
      {fivePinsForFolderDisplay.map((pin, index) => {
        const translateXStyle = `translateX(${translateXValues[index]})`;

        return (
          <img
            style={{
              zIndex: savedPinsLength - index,
              transform: translateXStyle,
            }}
            key={pin.uniqueId}
            className={`absolute h-full w-full object-cover rounded-xl  border-white border-2`}
            src={pin.src}
            alt={`Image description: ${pin.description}`}
          />
        );
      })}
    </div>
  );
}

export default FolderIcon;
