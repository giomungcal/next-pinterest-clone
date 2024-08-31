"use client";

// context/AppContext.js
import { createContext, useContext, useEffect, useState } from "react";
import imageData from "../data/imageData";

const AppContext = createContext();

const COLOR_RED = "#DE3636";

export const AppProvider = ({ children }) => {
  // Get data from file imageData.js
  const pinArray = imageData;

  //   Identify which items are to be displayed in the Recommended Section
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

  // Resetting all states when Home is clicked
  function handleHomeReset(type) {
    setSelectedPinType("");
    setSearchValue("");
  }

  //   Filtering system based on selected Recommended Card and Search Queries
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

  // Saving Pins

  const [savedPins, setSavedPins] = useState({
    "mood board": [],
    "90s trends": [],
  });

  const [showSaveModal, setShowSaveModal] = useState(false);

  function handleSaveModalDisplay(index) {
    console.log("Saved", index);

    const [selectedFolder, setSelectedFolder] = useState("");

    const SAVE_FOLDER = "90s trends";
    const isPinExisting = savedPins[SAVE_FOLDER].some(
      (item) => item.id === index
    );

    // Add pin to folder if pin is not added yet
    if (!isPinExisting) {
      setSavedPins((prevSavedPins) => ({
        ...prevSavedPins,
        [SAVE_FOLDER]: [
          ...prevSavedPins[SAVE_FOLDER],
          pinArray.find((pin) => pin.id === index),
        ],
      }));
    } else console.error("Pin already exists in the folder!");
  }

  useEffect(() => {
    console.log(Object.keys(savedPins)[1]);
  }, [savedPins]);

  const displayedPins = filteredPins(selectedPinType, searchValue, pinArray);

  return (
    <AppContext.Provider
      value={{
        displayedPins,
        recommendedDisplayArray,
        handleHomeReset,
        handleSearchChange,
        searchValue,
        handleRecommendedClick,
        handleSaveModalDisplay,
        savedPins,
        COLOR_RED,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
