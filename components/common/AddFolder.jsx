import { useAppContext } from "@/app/context/AppContext";

function AddFolder() {
  const { savedPins, handleAddNewFolder, newFolderName, setNewFolderName } =
    useAppContext();

  return (
    <form
      className="block m-4"
      onSubmit={(e) => {
        handleAddNewFolder(e);
      }}
    >
      <span className="text-sm text-gray-500 font-semibold">
        Add a new folder{" "}
        {Object.keys(savedPins).length > 0 ? (
          <span>(optional):</span>
        ) : (
          <span className="text-red-700">(required):</span>
        )}
      </span>
      <input
        value={newFolderName}
        onChange={(e) => setNewFolderName(e.target.value)}
        placeholder="haircuts, mood board.."
        type="text"
        className="mt-2 bg-gray-200 text-black rounded-full px-4 py-2 placeholder:text-gray-500 w-full"
      />
    </form>
  );
}

export default AddFolder;
