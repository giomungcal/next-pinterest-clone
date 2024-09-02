"use client";

import { useAppContext } from "@/app/context/AppContext";
import TextButton from "@/components/common/TextButton";
import Header from "@/components/layout/Header";
import PinBoard from "@/components/layout/PinBoard";
import { useParams } from "next/navigation";

function ProfileFolder() {
  const { folder } = useParams();
  const { handleFolderDeletion, navigateTo } = useAppContext();

  const originalFolderName = decodeURIComponent(folder.replace("profile/", ""));

  return (
    <div>
      <Header />
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
    </div>
  );
}

export default ProfileFolder;
