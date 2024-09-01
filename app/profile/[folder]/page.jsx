"use client";

import { useAppContext } from "@/app/context/AppContext";
import Header from "@/components/layout/Header";
import PinBoard from "@/components/layout/PinBoard";
import { useParams } from "next/navigation";

function ProfileFolder() {
  const { folder } = useParams(); // 'folder' will capture the dynamic part of the URL
  const { savedPins } = useAppContext();

  const originalFolderName = decodeURIComponent(folder.replace("profile/", ""));

  return (
    <div>
      <Header />
      <h1>Profile Folder: {originalFolderName}</h1>
      {savedPins[originalFolderName] ? (
        <PinBoard pinsDisplayed={savedPins[originalFolderName]} />
      ) : (
        <div>No pins yet!</div>
      )}
    </div>
  );
}

export default ProfileFolder;
