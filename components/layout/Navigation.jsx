"use client";

import { useAppContext } from "@/app/context/AppContext";
import Link from "next/link";
import React from "react";
import TextButton from "../common/TextButton";

function Navigation() {
  const { handleHomeReset } = useAppContext();

  return (
    <nav className="mx-2 h-full flex items-center">
      <TextButton title={"Home"} href={"/"} handleHomeReset={handleHomeReset} />
      <TextButton title={"Profile"} href={"profile"} />
    </nav>
  );
}

export default Navigation;
