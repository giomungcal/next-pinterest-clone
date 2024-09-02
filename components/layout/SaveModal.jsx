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

function SaveModal() {
  const {
    savedPins,
    selectedSaveFolder,
    handleSelectedSaveFolderChange,
    isSaveModalDisplayed,
    closeSaveModal,
    handleSaveButton,
    handleAddNewFolder,
  } = useAppContext();

  const folderNames = Object.keys(savedPins);

  if (!isSaveModalDisplayed) return null;

  return (
    <section className="fixed inset-0 z-20 bg-[#3A3A3A] bg-opacity-30  backdrop-blur-sm flex justify-center items-center ">
      <div className="w-[300px] bg-white rounded-2xl px-2 py-4">
        <h2 className="w-full my-5 mx-auto text-center text-lg font-semibold">
          Save
        </h2>
        <form className="block m-4">
          <span className="text-sm text-gray-500 font-semibold">
            Add a new folder (optional):
          </span>
          <input
            onSubmit={(e) => handleAddNewFolder(e)}
            placeholder="haircuts, mood board.."
            type="text"
            className="mt-2 bg-gray-200 text-black rounded-full px-4 py-2 placeholder:text-gray-500 w-full"
          />
        </form>

        <form>
          <div className="flex flex-col justify-items-start space-y-2 mt-4 mb-8 px-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-sm text-gray-800 font-semibold">
                    Choose folder:{" "}
                    <span className="text-red-700">(required)</span>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

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
            <button
              onClick={() => closeSaveModal()}
              className="p-2 bg-slate-300 rounded-full w-full mx-2 hover:bg-slate-400 "
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => {
                selectedSaveFolder && closeSaveModal();
                handleSaveButton(e, selectedSaveFolder);
              }}
              className="p-2 bg-[#DE3636] hover:bg-red-700 rounded-full w-full mx-2 text-white"
            >
              Save
            </button>
          </div>
        </form>

        {/* <div className="flex flex-col space-y-2 mt-4 mb-8 px-4">
          <span className="text-sm text-gray-800 font-semibold">
            Choose folder: <span className="text-red-700">(required)</span>
          </span>
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
          <button
            onClick={() => closeSaveModal()}
            className="p-2 bg-slate-300 rounded-full w-full mx-2 hover:bg-slate-400 "
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={() => {
              selectedSaveFolder && closeSaveModal();
              handleSaveButton(selectedSaveFolder);
            }}
            className="p-2 bg-[#DE3636] hover:bg-red-700 rounded-full w-full mx-2 text-white"
          >
            Save
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default SaveModal;
