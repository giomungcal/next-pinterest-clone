"use client";

import Image from "next/image";
import PinHoverOverlay from "./PinHoverOverlay";
import PinImage from "./PinImage";

function Pin({ src, idOfImage, actionOnButtonClick }) {
  return (
    <div
      className="relative ml-4 mb-4 cursor-pointer group"
      style={{ backgroundClip: "padding-box" }}
    >
      <PinImage src={src} idOfImage={idOfImage} />
      <PinHoverOverlay
        idOfImage={idOfImage}
        actionOnButtonClick={actionOnButtonClick}
      />
    </div>
  );
}

export default Pin;
