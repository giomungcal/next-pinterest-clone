"use client";

import { useAppContext } from "@/app/context/AppContext";
import React, { useState } from "react";
import TextButton from "../common/TextButton";

function SaveModal() {
  const { savedPins, COLOR_RED } = useAppContext();

  const folderNames = Object.keys(savedPins);

  return (
    <section className="fixed inset-0 z-20 bg-[#3A3A3A] bg-opacity-30  backdrop-blur-sm flex justify-center items-center ">
      <div className="w-[300px] bg-white rounded-2xl">
        <form className="flex justify-center mt-4">
          <input
            placeholder=" add new folder"
            type="text"
            className="w-[90%] bg-gray-200 text-black rounded-full px-3 py-2 placeholder:text-gray-500 w-full"
          />
        </form>
        <div className="flex flex-col space-y-2 my-4 px-4">
          {folderNames.map((folder) => (
            <label
              className={`flex justify-center cursor-pointer px-4 py-3 rounded-3xl border transition-colors w-full ${
                selectedFolder === folder
                  ? `bg-[${COLOR_RED}] text-white`
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
        <div className="flex justify-around mb-2">
          <TextButton title={"Cancel"} />
          <TextButton title={"Save"} />
        </div>
      </div>
    </section>
  );
}

export default SaveModal;
