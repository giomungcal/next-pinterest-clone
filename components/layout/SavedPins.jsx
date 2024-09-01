import { useAppContext } from "@/app/context/AppContext";
import PinFolder from "../common/PinFolder";

function SavedPins() {
  const { savedPins } = useAppContext();

  return (
    <section className="flex flex-col justify-center items-center space-y-10 mt-10">
      {<h2 className="text-xl font-semibold">Saved Pins</h2>}

      {Object.keys(savedPins).length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,_min(250px))] gap-2 w-[90%] justify-center">
          {Object.keys(savedPins).map((folder, index) => (
            <PinFolder folderName={folder} key={index} />
          ))}
        </div>
      ) : (
        <div>No saved pins yet!</div>
      )}
    </section>
  );
}

export default SavedPins;
