import Link from "next/link";
import React from "react";
import Button from "../common/Button";
import SearchBar from "../common/SearchBar";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="h-[80px] w-full py-1 px-4 flex items-center">
      <div className="h-[56px] w-full flex justify-between items-center">
        <Logo />
        <Navigation />
        <SearchBar placeholderText={"denim, hairstyles.."} />
        <Button icon={"notificationIcon"} displayWhenSmallScreen={false} />
        <Button icon={"chatbubbleIcon"} displayWhenSmallScreen={false} />
        <Button
          href={"profile"}
          icon={"profileIcon"}
          displayWhenSmallScreen={false}
        />
        <Button icon={"arrowDownIcon"} displayWhenSmallScreen={true} />
      </div>
    </header>
  );
}

export default Header;
