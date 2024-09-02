import Image from "next/image";

function PinImage({ src, idOfImage }) {
  return (
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
  );
}

export default PinImage;
