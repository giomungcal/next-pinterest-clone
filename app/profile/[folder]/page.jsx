"use client";

import { useAppContext } from "@/app/context/AppContext";
import TextButton from "@/components/common/TextButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PinBoard from "@/components/layout/PinBoard";
import { useParams } from "next/navigation";

function ProfileFolder() {
  const { folder } = useParams();
  const { handleFolderDeletion, navigateTo, savedPins } = useAppContext();

  const originalFolderName = decodeURIComponent(folder.replace("profile/", ""));

  const doesFolderNameExist =
    Object.keys(savedPins).includes(originalFolderName);

  console.log();

  return (
    <>
      <Header />
      {doesFolderNameExist ? (
        <>
          <div className="w-full flex flex-col justify-center items-center my-10 ">
            <span className="text-4xl font-semibold mb-6">
              {originalFolderName}
            </span>
            <button
              onClick={() => {
                navigateTo("/profile");
                handleFolderDeletion(originalFolderName);
              }}
              className={`px-4 h-[48px] items-center rounded-full bg-gray-200 hover:bg-red-500 hover:text-white min-w-max`}
            >
              Delete Folder
            </button>
          </div>
          {savedPins[originalFolderName].length ? (
            <PinBoard pinsToBeDisplayed={originalFolderName} />
          ) : (
            <div className="w-full h-[200px] flex justify-center items-center">
              No pins yet!
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-[400px] flex justify-center items-center">
          Error 404: Page not found.
        </div>
      )}
      <Footer />
    </>
  );
}

export default ProfileFolder;
