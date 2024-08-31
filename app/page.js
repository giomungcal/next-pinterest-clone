import Header from "@/components/layout/Header";
import PinBoard from "@/components/layout/PinBoard";
import Recommended from "@/components/layout/Recommended";
import SaveModal from "@/components/layout/SaveModal";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <Recommended />
      <SaveModal />
      <PinBoard />
    </>
  );
}

export default Home;
