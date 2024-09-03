"use client";

import { useAppContext } from "@/app/context/AppContext";
import React, { useState } from "react";
import TextButton from "../common/TextButton";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AddFolder from "../common/AddFolder";

function SaveModal() {
  const {
    savedPins,
    selectedSaveFolder,
    handleSelectedSaveFolderChange,
    isSaveModalDisplayed,
    closeSaveModal,
    handleSaveButton,
  } = useAppContext();

  const folderNames = Object.keys(savedPins);

  // TEMPORARY ONLY
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  if (!isSaveModalDisplayed) return null;
  return (
    <section className="fixed inset-0 z-50 bg-[#3A3A3A] bg-opacity-30  backdrop-blur-sm flex justify-center items-center ">
      <div className="w-[300px] bg-white rounded-2xl px-2 py-4">
        <h2 className="w-full my-5 mx-auto text-center text-lg font-semibold">
          Save
        </h2>
        <AddFolder />

        <form>
          <span className="text-sm text-gray-800 font-semibold ml-4">
            Choose folder: <span className="text-red-700">(required)</span>
          </span>

          <div
            className={`absolute bg-red-600 text-white text-sm rounded py-1 px-2 mb-2 transform translate-y-[-25px] translate-x-[200px] whitespace-nowrap transition-opacity duration-300 ease-in-out ${
              isTooltipVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Click on a folder first!
          </div>

          <div className="flex flex-col justify-items-start max-h-52 overflow-auto space-y-2 mt-4 mb-8 px-4 custom-scrollbar">
            {folderNames.map((folder, index) => (
              <label
                key={index}
                className={`flex justify-center cursor-pointer px-4 py-3 rounded-3xl border transition-colors w-full ${
                  selectedSaveFolder === folder
                    ? `bg-[#DE3636] text-white`
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <input
                  type="radio"
                  id={folder}
                  name="folder"
                  value={folder}
                  className="hidden"
                  checked={selectedSaveFolder === folder}
                  onChange={() => handleSelectedSaveFolderChange(folder)}
                />
                {folder}
              </label>
            ))}
          </div>
          <div className="flex justify-around mb-4 px-2">
            <div className="absolute bg-gray-700 text-white text-sm rounded py-1 px-2 bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              TESTdawdawdawdawwda
            </div>
            <button
              onClick={() => {
                closeSaveModal();
                setIsTooltipVisible(false);
              }}
              className="p-2 bg-slate-300 rounded-full w-full mx-2 hover:bg-slate-400 "
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => {
                selectedSaveFolder && closeSaveModal();
                handleSaveButton(e, selectedSaveFolder);
                !selectedSaveFolder && setIsTooltipVisible(true);
                selectedSaveFolder && setIsTooltipVisible(false);
              }}
              className="p-2 bg-[#DE3636] hover:bg-red-700 rounded-full w-full mx-2 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SaveModal;
