import { useAppContext } from "@/app/context/AppContext";
import React from "react";

const PinFolder = ({ folderName }) => {
  const { savedPins, navigateTo } = useAppContext();

  const translateXValues = ["0px", "20px", "40px", "60px", "80px"];
  const savedPinsLength = savedPins[folderName].length;
  const fivePinsForFolderDisplay = savedPins[folderName].slice(0, 5);

  // const urlForFolderName = "profile/" + folderName.split(" ").join("@");
  const urlForFolderName = "profile/" + encodeURIComponent(folderName);

  return (
    <div
      onClick={() => navigateTo(urlForFolderName)}
      className="w-[250px] flex flex-col justify-items-start p-2 cursor-pointer mb-4"
    >
      <div className="h-[157px] w-[117px] relative">
        {fivePinsForFolderDisplay.map((pin, index) => (
          <img
            style={{ zIndex: savedPinsLength - index }}
            key={pin.uniqueId}
            className={`absolute h-full w-full object-cover rounded-xl translate-x-[${translateXValues[index]}] border-white border-2`}
            src={pin.src}
            alt=""
          />
        ))}
      </div>
      <h3 className="text-lg font-semibold mt-1">{folderName}</h3>
      <p className="text-xs">{savedPins[folderName].length} pins</p>
    </div>
  );
};

export default PinFolder;
