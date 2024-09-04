"use client";

// context/AppContext.js
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
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
      src: "/images/pinboard/img (42).jpg",
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

  const [savedPins, setSavedPins] = useState({});

  // 4.0 Initialize Saved Pins from local storage  - if any

  let retrievedData;

  useEffect(() => {
    // Initialize from localStorage
    if (typeof window !== "undefined") {
      retrievedData = localStorage.getItem("savedPins");
      if (retrievedData) {
        setSavedPins(JSON.parse(retrievedData));
      }
    }
  }, []);

  // 4.0  Update Local Storage whenever Saved Pins is updated
  useEffect(() => {
    // Update localStorage whenever data changes
    if (typeof window !== "undefined" && Object.keys(savedPins).length > 0) {
      const savedPins_serialized = JSON.stringify(savedPins);
      localStorage.setItem("savedPins", savedPins_serialized);
    }
  }, [savedPins]);

  //   4.1 Adding a new folder

  const [newFolderName, setNewFolderName] = useState("");
  const [isNewFolderNameValid, setIsNewFolderNameValid] = useState(true);

  function handleAddNewFolder(e) {
    e.preventDefault();

    const formattedFolderName = String(newFolderName.trim());

    function isFolderANumber(value) {
      return !isNaN(+value);
    }

    if (!formattedFolderName || isFolderANumber(formattedFolderName)) {
      toast(
        "Please enter a valid folder name (numbers only are not allowed).",
        {
          icon: "🦢",
          style: {
            padding: "16px",
            color: "white",
            backgroundColor: "#FFA500",
          },
        }
      );
      setNewFolderName("");
      return;
    }
    if (
      formattedFolderName &&
      !Object.keys(savedPins).includes(formattedFolderName)
    ) {
      setSavedPins((prev) => ({ ...prev, [formattedFolderName]: [] }));
      toast("Folder created!", {
        icon: "🐠",
        style: {
          padding: "16px",
          color: "white",
          backgroundColor: "#228B22",
        },
      });
    } else if (formattedFolderName) {
      toast("Folder already exists!", {
        icon: "🦚",
        style: {
          padding: "16px",
          color: "white",
          backgroundColor: "#FFA500",
        },
      });
    }

    setNewFolderName("");
  }

  // 4.2 Saving the pin to a selected folder

  const [isSaveModalDisplayed, setisSaveModalDisplayed] = useState(false);
  const [selectedSaveFolder, setSelectedSaveFolder] = useState("");
  const [selectedPin, setSelectedPin] = useState(null);

  function showSaveModal(index) {
    setisSaveModalDisplayed(true);
    index && setSelectedPin(index);
    setPinModalDisplay(false);
  }

  function closeSaveModal() {
    setisSaveModalDisplayed(false);
    setSelectedSaveFolder("");
    setSelectedPin(null);
  }

  function handleSelectedSaveFolderChange(folder) {
    setSelectedSaveFolder(folder);
  }

  function handleSaveButton(e) {
    e.preventDefault();

    const areThereExistingFolders = Object.keys(savedPins);

    if (!selectedSaveFolder && !areThereExistingFolders.length) {
      toast(
        "Type your new folder name then press enter on your keyboard.",
        {
          icon: "🧛‍♀️",
          style: {
            border: "1px solid red",
            padding: "16px",
            color: "white",
            backgroundColor: "#E60023",
          },
        },
        {
          duration: 6000,
        }
      );
    }

    if (!selectedSaveFolder && areThereExistingFolders.length) {
      toast("Select a folder first!", {
        icon: "👼",
        style: {
          border: "1px solid red",
          padding: "16px",
          color: "white",
          backgroundColor: "#E60023",
        },
      });
    }

    if (selectedSaveFolder) {
      const isPinExistingInFolder = savedPins[selectedSaveFolder].some(
        (item) => item.id === selectedPin
      );

      if (isPinExistingInFolder) {
        toast("Pin already exists in the folder.", {
          icon: "🐸",
          style: {
            padding: "16px",
            color: "white",
            backgroundColor: "#FFA500",
          },
        });
        return;
      }

      // Assign new unique id to pin
      const newPin = pinArray.find((pin) => pin.id === selectedPin);
      const pinWithUniqueId = { ...newPin, uniqueId: uuidv4() };

      // Add pin to folder if pin doesn't exist yet
      setSavedPins((prevSavedPins) => ({
        ...prevSavedPins,
        [selectedSaveFolder]: [
          ...prevSavedPins[selectedSaveFolder],
          pinWithUniqueId,
        ],
      }));

      toast("Pin stored!", {
        icon: "🐳",
        style: {
          padding: "16px",
          color: "white",
          backgroundColor: "#228B22",
        },
      });

      setSelectedPin(null);
      setNewFolderName("");
    }
  }

  //   5. Folder deletion

  function handleFolderDeletion(folderToDelete) {
    setSavedPins((prevSavedPins) => {
      const newSavedPins = { ...prevSavedPins };
      delete newSavedPins[folderToDelete];
      return newSavedPins;
    });

    toast("You have deleted a folder!", {
      icon: "👻",
      style: {
        border: "1px solid red",
        padding: "16px",
        color: "white",
        backgroundColor: "#E60023",
      },
    });
  }

  // 6. Removal of Pin from folder

  function handlePinRemoval(idOfImage, folderName) {
    const updatedFolder = savedPins[folderName].filter(
      (pinObj) => pinObj.id !== idOfImage
    );

    setSavedPins((prevPins) => ({
      ...prevPins,
      [folderName]: [...updatedFolder],
    }));

    toast("You have deleted a pin!", {
      icon: "👽",
      style: {
        border: "1px solid red",
        padding: "16px",
        color: "white",
        backgroundColor: "#E60023",
      },
    });
  }

  // 7. Individual Pin Modal Display

  const [pinModalDisplay, setPinModalDisplay] = useState(false);

  function handleOpenPinModalDisplay(idOfImage) {
    setPinModalDisplay(true);
    setSelectedPin(idOfImage);
  }

  function handleClosePinModalDisplay() {
    setPinModalDisplay(false);
    setSelectedPin(null);
  }

  // Displaying/Filtering pins in home

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

        handleOpenPinModalDisplay,
        handleClosePinModalDisplay,
        pinModalDisplay,
        selectedPin,
        setSelectedPin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
