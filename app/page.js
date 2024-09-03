import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PinBoard from "@/components/layout/PinBoard";
import Recommended from "@/components/layout/Recommended";
import SaveModal from "@/components/layout/SaveModal";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <Recommended />
      <SaveModal />
      <PinBoard pinsToBeDisplayed={"all"} />
      <Footer />
    </>
  );
}

export default Home;
