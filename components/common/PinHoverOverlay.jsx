"use client";

import { useAppContext } from "@/app/context/AppContext";

function PinHoverOverlay({ idOfImage, actionOnButtonClick, folderName }) {
  const { showSaveModal, handlePinRemoval, handleOpenPinModalDisplay } =
    useAppContext();

  return (
    <>
      {/* BACK UP */}

      <div
        onClick={() => {
          handleOpenPinModalDisplay(idOfImage);
        }}
        className=" hidden group-hover:block absolute top-0 left-0 w-full h-full opacity-30 bg-black rounded-lg transition-opacity duration-300"
      ></div>

      <div className=" hidden group-hover:flex justify-end absolute top-0 right-0 p-2 group-hover:opacity-100 transition-opacity duration-200">
        {actionOnButtonClick === "save" && (
          <a
            onClick={() => {
              showSaveModal(idOfImage);
            }}
            className=" p-3 bg-red-600 hover:bg-[#B60000] text-white font-semibold rounded-full"
          >
            Save
          </a>
        )}
        {actionOnButtonClick === "delete" && (
          <a
            onClick={() => {
              handlePinRemoval(idOfImage, folderName);
            }}
            className=" p-3 bg-red-600 hover:bg-[#B60000] text-white font-semibold rounded-full"
          >
            Delete
          </a>
        )}
      </div>
    </>
  );
}

export default PinHoverOverlay;
