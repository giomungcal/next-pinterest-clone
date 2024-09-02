"use client";

// context/AppContext.js
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import imageData from "../data/imageData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Get data from file imageData.js
  const pinArray = imageData;

  const router = useRouter();

  function navigateTo(target) {
    router.push(target);
  }

  // 1. Identify which items are to be displayed in the Recommended Section
  const uniqueTypes = new Set();
  const initialRecommendedDisplayArray = pinArray.filter((image) => {
    if (!uniqueTypes.has(image.type)) {
      uniqueTypes.add(image.type);
      return true;
    }
    return false;
  });
  const recommendedDisplayArray = [
    {
      id: 0,
      src: "/images/pinboard/img (76).jpg",
      description: "Oversized blazer in check pattern.",
      type: "all",
    },
    ...initialRecommendedDisplayArray,
  ];

  // 2. Resetting all states when Home is clicked
  function handleHomeReset(type) {
    setSelectedPinType("");
    setSearchValue("");
  }

  // 3.  Filtering system based on selected Recommended Card and Search Queries
  const [selectedPinType, setSelectedPinType] = useState("");
  const [searchValue, setSearchValue] = useState("");

  function handleRecommendedClick(type) {
    setSelectedPinType(type);
    setSearchValue("");
  }

  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  function filteredPins(selectedPinType, searchValue, pinArray) {
    let filteredPinArray = [];

    if (!selectedPinType || selectedPinType === "all") {
      filteredPinArray = pinArray;
    } else
      filteredPinArray = pinArray.filter(
        (item) => item.type === selectedPinType
      );

    if (searchValue) {
      filteredPinArray = filteredPinArray.filter(
        (item) =>
          item.type.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return filteredPinArray;
  }

  // 4. Saving Pins

  const [savedPins, setSavedPins] = useState({
    "mood board": [
      {
        id: 2,
        src: "/images/pinboard/img (2).jpg",
        description: "Elegant black evening dress.",
        type: "dress",
      },
      {
        id: 3,
        src: "/images/pinboard/img (3).jpg",
        description: "Casual white t-shirt with a pocket.",
        type: "casual",
      },
      {
        id: 4,
        src: "/images/pinboard/img (4).jpg",
        description: "Leather ankle boots in brown.",
        type: "footwear",
      },
      {
        id: 5,
        src: "/images/pinboard/img (5).jpg",
        description: "Summer floral print dress.",
        type: "dress",
      },
      {
        id: 6,
        src: "/images/pinboard/img (6).jpg",
        description: "Ripped skinny jeans in light wash.",
        type: "denim",
      },
    ],
    "90s trends": [],
  });

  // 4.0 Initialize Saved Pins from local storage  - if any
  // useEffect(() => {
  //     // Initialize from localStorage
  //     if (typeof window !== 'undefined') {
  //       const storedData = localStorage.getItem('myData');
  //       if (storedData) {
  //         setData(storedData);
  //       }
  //     }
  //   }, []);

  // 4.0  Update Local Storage whenever Saved Pins is updated
  //   useEffect(() => {
  //     // Update localStorage whenever data changes
  //     if (typeof window !== 'undefined') {
  //       localStorage.setItem('myData', data);
  //     }
  //   }, [data]);

  //   4.1 Adding a new folder

  const [newFolderName, setNewFolderName] = useState("");
  const [isNewFolderNameValid, setIsNewFolderNameValid] = useState(true);

  function handleAddNewFolder(e) {
    e.preventDefault();

    const formattedFolderName = String(newFolderName.trim());

    if (
      formattedFolderName &&
      !Object.keys(savedPins).includes(formattedFolderName)
    ) {
      setSavedPins((prev) => ({ ...prev, [formattedFolderName]: [] }));
    }

    setNewFolderName("");
  }

  // 4.2 Saving the pin to a selected folder

  const [isSaveModalDisplayed, setisSaveModalDisplayed] = useState(false);
  const [selectedSaveFolder, setSelectedSaveFolder] = useState("");
  const [selectedPinToSave, setSelectedPinToSave] = useState(null);

  function showSaveModal(index) {
    setisSaveModalDisplayed(true);
    setSelectedPinToSave(index);
  }

  function closeSaveModal() {
    setisSaveModalDisplayed(false);
    setSelectedSaveFolder("");
  }

  function handleSelectedSaveFolderChange(folder) {
    setSelectedSaveFolder(folder);
  }

  function handleSaveButton(e) {
    e.preventDefault();

    if (selectedSaveFolder) {
      const isPinExistingInFolder = savedPins[selectedSaveFolder].some(
        (item) => item.id === selectedPinToSave
      );

      if (isPinExistingInFolder) {
        console.error("Pin already exists in the folder!");
        return;
      }

      // Assign new unique id to pin
      const newPin = pinArray.find((pin) => pin.id === selectedPinToSave);
      const pinWithUniqueId = { ...newPin, uniqueId: uuidv4() };

      // Add pin to folder if pin doesn't exist yet
      setSavedPins((prevSavedPins) => ({
        ...prevSavedPins,
        [selectedSaveFolder]: [
          ...prevSavedPins[selectedSaveFolder],
          pinWithUniqueId,
        ],
      }));
    }
  }

  //   5. Folder deletion

  function handleFolderDeletion(folderToDelete) {
    delete savedPins[folderToDelete];
  }

  // 6. Removal of Pin from folder

  function handlePinRemoval(idOfImage, folderName) {
    console.log("Saved Pins:", savedPins);

    const updatedFolder = savedPins[folderName].filter(
      (pinObj) => pinObj.id !== idOfImage
    );

    console.log("Updated Folder:", updatedFolder);

    const newSavedPins = { ...savedPins, [folderName]: [...updatedFolder] };

    console.log("Updated Saved Pins: ", newSavedPins);

    setSavedPins((prevPins) => ({
      ...prevPins,
      [folderName]: [...updatedFolder],
    }));
  }

  const allPinsDisplayedInHome = filteredPins(
    selectedPinType,
    searchValue,
    pinArray
  );

  return (
    <AppContext.Provider
      value={{
        navigateTo,
        allPinsDisplayedInHome,
        recommendedDisplayArray,
        handleHomeReset,

        handleSearchChange,
        searchValue,
        handleRecommendedClick,

        handleAddNewFolder,
        newFolderName,
        setNewFolderName,

        savedPins,
        selectedSaveFolder,
        handleSelectedSaveFolderChange,
        closeSaveModal,
        showSaveModal,
        isSaveModalDisplayed,
        handleSaveButton,

        handleFolderDeletion,

        handlePinRemoval,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
