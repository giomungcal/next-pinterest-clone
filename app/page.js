"use client";

import Header from "@/components/layout/Header";
import PinBoard from "@/components/layout/PinBoard";
import Recommended from "@/components/layout/Recommended";
import SaveModal from "@/components/layout/SaveModal";
import Link from "next/link";
import React from "react";
import { useAppContext } from "./context/AppContext";

function Home() {
  const { displayedPins } = useAppContext();

  return (
    <>
      <Header />
      <Recommended />
      <SaveModal />
      <PinBoard pinsDisplayed={displayedPins} />
    </>
  );
}

export default Home;
