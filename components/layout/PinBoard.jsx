"use client";

import { useAppContext } from "@/app/context/AppContext";
import React from "react";
import Masonry from "react-masonry-css";
import Pin from "../common/Pin";

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
  );
}

export default PinBoard;
