"use client";

import Image from "next/image";
import PinHoverOverlay from "./PinHoverOverlay";
import PinImage from "./PinImage";

function Pin({ src, indexOfImage }) {
  return (
    <div
      className="relative ml-4 mb-4 cursor-pointer group"
      style={{ backgroundClip: "padding-box" }}
    >
      <PinImage src={src} indexOfImage={indexOfImage} />

      {/* Container displayed upon hover */}
      <PinHoverOverlay indexOfImage={indexOfImage} />
    </div>
  );
}

export default Pin;
