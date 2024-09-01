"use client";

import React from "react";
import Masonry from "react-masonry-css";
import Pin from "../common/Pin";

import { useAppContext } from "@/app/context/AppContext";

function PinBoard({ pinsDisplayed }) {
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
      {pinsDisplayed.map((img) => (
        <Pin src={img.src} key={img.id} index={img.id} />
      ))}
    </Masonry>
  );
}

export default PinBoard;
