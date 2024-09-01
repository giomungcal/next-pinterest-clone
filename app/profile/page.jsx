"use client";

import PinFolder from "@/components/common/PinFolder";
import TextButton from "@/components/common/TextButton";
import Header from "@/components/layout/Header";
import Logo from "@/components/layout/Logo";
import SavedPins from "@/components/layout/SavedPins";
import UserDetails from "@/components/layout/UserDetails";
import React from "react";

function page() {
  return (
    <>
      <Header />
      <UserDetails />
      <hr />
      <SavedPins />
    </>
  );
}

export default page;
