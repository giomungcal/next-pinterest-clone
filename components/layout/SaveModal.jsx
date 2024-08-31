"use client";

import { useAppContext } from "@/app/context/AppContext";
import React, { useState } from "react";
import TextButton from "../common/TextButton";

function SaveModal() {
  const { savedPins, selectedFolder, setSelectedFolder } = useAppContext();

  const folderNames = Object.keys(savedPins);

  return (
    <section className="fixed inset-0 z-20 bg-[#3A3A3A] bg-opacity-30  backdrop-blur-sm flex justify-center items-center ">
      <div className="w-[300px] bg-white rounded-2xl">
        <form className="block m-4">
          <span>Add a new folder:</span>
          <input
            placeholder="enter here"
            type="text"
            className="mt-2 bg-gray-200 text-black rounded-full px-3 py-2 placeholder:text-gray-500 w-full"
          />
        </form>
        <div className="flex flex-col space-y-2 my-4 px-4">
          <span>Choose folder:</span>
          {folderNames.map((folder, index) => (
            <label
              key={index}
              className={`flex justify-center cursor-pointer px-4 py-3 rounded-3xl border transition-colors w-full ${
                selectedFolder === folder
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
                checked={selectedFolder === folder}
                onChange={() => setSelectedFolder(folder)}
              />
              {folder}
            </label>
          ))}
        </div>
        <div className="flex justify-around mb-4 px-2">
          <button className="p-2 bg-slate-200 rounded-full w-full mx-2 hover:bg-[#DE3636] hover:text-white">
            Cancel
          </button>
          <button className="p-2 bg-slate-200 rounded-full w-full mx-2 hover:bg-[#DE3636] hover:text-white">
            Save
          </button>
        </div>
      </div>
    </section>
  );
}

export default SaveModal;
