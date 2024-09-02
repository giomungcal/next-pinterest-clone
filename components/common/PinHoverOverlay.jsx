import { useAppContext } from "@/app/context/AppContext";

function PinHoverOverlay({ idOfImage, actionOnButtonClick }) {
  const { showSaveModal } = useAppContext();

  return (
    <>
      <div className="cardHoverBackground hidden group-hover:block absolute top-0 left-0 w-full h-full opacity-30 bg-black rounded-lg transition-opacity duration-300"></div>
      <div className="cardHoverContainer hidden group-hover:block absolute top-0 left-0  w-full h-full ">
        <div className="cardHoverHeader flex justify-end p-2 group-hover:opacity-100 transition-opacity duration-200">
          {actionOnButtonClick === "save" && (
            <a
              onClick={() => {
                showSaveModal(idOfImage);
              }}
              className="p-3 bg-red-600 hover:bg-[#B60000] text-white font-semibold rounded-full"
            >
              Save
            </a>
          )}
          {actionOnButtonClick === "delete" && (
            <a
              onClick={() => {
                console.log("Removing pin number: ", idOfImage);
              }}
              className="p-3 bg-red-600 hover:bg-[#B60000] text-white font-semibold rounded-full"
            >
              Delete
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default PinHoverOverlay;
