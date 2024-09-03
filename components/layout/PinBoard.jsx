"use client";

import { useAppContext } from "@/app/context/AppContext";
import Image from "next/image";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Pin from "../common/Pin";
import SearchBar from "../common/SearchBar";
import TextButton from "../common/TextButton";

function PinBoard({ pinsToBeDisplayed }) {
  const {
    allPinsDisplayedInHome,
    savedPins,
    pinModalDisplay,
    handleClosePinModalDisplay,
    selectedPin,
    showSaveModal,
  } = useAppContext();

  const breakpointColumnsObj = {
    default: 6, // Number of columns on large screens
    1100: 5, // Number of columns on medium screens
    700: 3, // Number of columns on small screens
    500: 2, // Number of columns on extra-small screens
  };

  const masonryStyles = {
    display: "flex",
    marginLeft: "-15px", // Adjusts the gutter space between columns
    width: "auto",
    padding: "0 16px",
  };

  const pinToDisplay =
    selectedPin && allPinsDisplayedInHome.find((pin) => pin.id === selectedPin);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        style={masonryStyles}
      >
        {pinsToBeDisplayed === "all"
          ? allPinsDisplayedInHome.map((img) => (
              // Home Page
              <Pin
                src={img.src}
                key={img.id}
                idOfImage={img.id}
                actionOnButtonClick={"save"}
              />
            ))
          : savedPins[pinsToBeDisplayed].map((img) => (
              // Saved Folder Page
              <Pin
                src={img.src}
                key={img.uniqueId}
                idOfImage={img.id}
                folderName={pinsToBeDisplayed}
                actionOnButtonClick={"delete"}
              />
            ))}
      </Masonry>

      {/* Individual Pin Modal */}
      {selectedPin && (
        <section
          className={`${
            !pinModalDisplay && "hidden"
          }  fixed inset-0 z-100 bg-[#3A3A3A] bg-opacity-30  backdrop-blur-sm flex justify-center items-center p-8`}
        >
          <div
            onClick={handleClosePinModalDisplay}
            className={`${!pinModalDisplay && "hidden"}  fixed inset-0 z-30 `}
          ></div>
          <div className="max-w-[1000px] h-[600px] z-50 bg-white block lg:flex lg:justify-between rounded-3xl">
            {/* Mobile View */}
            <div className="relative w-50% h-full">
              <img
                src={pinToDisplay.src}
                alt={pinToDisplay.description}
                className="w-full h-full object-cover rounded-3xl lg:rounded-none lg:rounded-tl-3xl lg:rounded-bl-3xl"
              />
              <div
                onClick={() => showSaveModal()}
                className="lg:hidden absolute right-0 top-0 m-8 w-14 h-14 rounded-full cursor-pointer bg-red-500 bg-slate-600 text-white opacity-90 flex justify-center items-center"
              >
                {/* Save Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="lg:hidden absolute w-full bottom-0 left-0 py-8 pl-8 rounded-bl-3xl rounded-br-3xl ">
                <div className="absolute inset-0 bg-neutral-900 opacity-50 rounded-bl-3xl rounded-br-3xl"></div>
                <div className="relative z-10 text-white">
                  <h2 className="mb-2 text-2xl">{pinToDisplay.description}</h2>
                  <h3 className="font-light italic">{pinToDisplay.type}</h3>
                </div>
              </div>
            </div>

            {/* Wide Screen View */}
            <div className="hidden lg:flex flex-col justify-between min-w-[350px] mx-8  py-8">
              <div onClick={handleClosePinModalDisplay} className="self-end">
                <TextButton title={"Close"} />
              </div>
              <div>
                <h2 className="mb-2 text-4xl">{pinToDisplay.description}</h2>
                <h3 className="font-light italic ">{pinToDisplay.type}</h3>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default PinBoard;
