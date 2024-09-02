"use client";

import { useAppContext } from "@/app/context/AppContext";
import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";
import Pin from "../common/Pin";
import SearchBar from "../common/SearchBar";
import TextButton from "../common/TextButton";

function PinBoard({ pinsToBeDisplayed }) {
  const { allPinsDisplayedInHome, savedPins } = useAppContext();

  const breakpointColumnsObj = {
    default: 6, // Number of columns on large screens
    1100: 5, // Number of columns on medium screens
    700: 4, // Number of columns on small screens
    500: 2, // Number of columns on extra-small screens
  };

  const masonryStyles = {
    display: "flex",
    marginLeft: "-15px", // Adjusts the gutter space between columns
    width: "auto",
    padding: "0 16px",
  };

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
                key={img.id}
                idOfImage={img.id}
                folderName={pinsToBeDisplayed}
                actionOnButtonClick={"delete"}
              />
            ))}
      </Masonry>

      {/* Individual Pin Modal */}
      <section className="fixed inset-0 z-20 bg-[#3A3A3A] bg-opacity-30  backdrop-blur-sm flex justify-center items-center p-8">
        <div className="max-w-[1000px] h-[600px] bg-white block lg:flex lg:justify-between rounded-3xl">
          <div className="relative w-50% h-full">
            <img
              src="/images/pinboard/img (18).jpg"
              alt=""
              className="w-full h-full object-cover rounded-3xl lg:rounded-none lg:rounded-tl-3xl lg:rounded-bl-3xl"
              // style={{ borderRadius: "24px 0 0 24px" }}
            />
            <div className="lg:hidden absolute right-0 top-0 m-8 w-12 h-12 rounded-full cursor-pointer bg-white opacity-40 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="lg:hidden absolute w-full bottom-0 left-0 py-8 pl-8 rounded-bl-3xl rounded-br-3xl ">
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-neutral-900 opacity-50 rounded-bl-3xl rounded-br-3xl"></div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <h2 className="mb-2 text-4xl">
                  {allPinsDisplayedInHome[46].description}
                </h2>
                <h3 className="font-light italic">
                  {allPinsDisplayedInHome[6].type}
                </h3>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col justify-between min-w-[350px] mx-8  py-8">
            <div className="self-end">
              <TextButton title={"Close"} />
            </div>
            <div>
              <h2 className="mb-2 text-4xl">
                {allPinsDisplayedInHome[46].description}
              </h2>
              <h3 className="font-light italic ">
                {allPinsDisplayedInHome[6].type}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PinBoard;
