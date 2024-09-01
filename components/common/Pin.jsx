import { useAppContext } from "@/app/context/AppContext";

function Pin({ src, index }) {
  const { showSaveModal } = useAppContext();

  return (
    <div
      className="relative ml-4 mb-4 cursor-pointer group"
      style={{ backgroundClip: "padding-box" }}
    >
      <img
        src={src}
        alt={`Image ${index + 1}`}
        className="block w-full h-auto rounded-lg"
      />
      {/* Hover Background */}
      <div className="cardHoverBackground hidden group-hover:block absolute top-0 left-0 w-full h-full opacity-30 bg-black rounded-lg transition-opacity duration-300"></div>

      {/* Container displayed upon hover */}
      <div className="cardHoverContainer hidden group-hover:block absolute top-0 left-0  w-full h-full ">
        <div className="cardHoverHeader flex justify-between p-2 group-hover:opacity-100 transition-opacity duration-200">
          <div></div>
          <a
            onClick={() => showSaveModal(index)}
            className="p-3 bg-red-600 hover:bg-[#B60000] text-white font-semibold rounded-full"
          >
            Save
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pin;
