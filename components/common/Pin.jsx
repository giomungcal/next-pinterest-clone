import Image from "next/image";
import PinHoverOverlay from "./PinHoverOverlay";

function Pin({ src, idOfImage, actionOnButtonClick, folderName }) {
  return (
    <div
      className="relative ml-4 mb-4 cursor-pointer group"
      style={{ backgroundClip: "padding-box" }}
    >
      <Image
        src={src}
        alt={`Image ${idOfImage + 1}`}
        className="rounded-lg"
        width={100}
        height={100}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <PinHoverOverlay
        idOfImage={idOfImage}
        folderName={folderName}
        actionOnButtonClick={actionOnButtonClick}
      />
    </div>
  );
}

export default Pin;
