import Image from "next/image";

function PinImage({ src, indexOfImage }) {
  return (
    <Image
      src={src}
      alt={`Image ${indexOfImage + 1}`}
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
