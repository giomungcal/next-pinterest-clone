"use client";

import { useAppContext } from "@/app/context/AppContext";
import TextButton from "@/components/common/TextButton";
import Header from "@/components/layout/Header";
import PinBoard from "@/components/layout/PinBoard";
import { useParams } from "next/navigation";

function ProfileFolder() {
  const { folder } = useParams();
  const { handleFolderDeletion, navigateTo, savedPins } = useAppContext();

  const originalFolderName = decodeURIComponent(folder.replace("profile/", ""));

  const doesFolderNameExist =
    Object.keys(savedPins).includes(originalFolderName);

  return (
    <div>
      <Header />
      {doesFolderNameExist ? (
        <>
          <h1>Profile Folder: {originalFolderName}</h1>
          <button
            onClick={() => {
              navigateTo("/profile");
              handleFolderDeletion(originalFolderName);
            }}
            className={`px-4 h-[48px] items-center rounded-full hover:bg-gray-200 min-w-max`}
          >
            Delete
          </button>
          <PinBoard pinsToBeDisplayed={originalFolderName} />
        </>
      ) : (
        <div className="w-full h-[400px] flex justify-center items-center">
          Error 404: Page not found.
        </div>
      )}
    </div>
  );
}

export default ProfileFolder;
