import Header from "@/components/layout/Header";
import ProfileFooter from "@/components/layout/ProfileFooter";

import SavedPins from "@/components/layout/SavedPins";
import UserDetails from "@/components/layout/UserDetails";
import React from "react";

function page() {
  return (
    <>
      <Header isSearchBarHidden={true} />
      <UserDetails />
      <hr />
      <SavedPins />
      <ProfileFooter />
    </>
  );
}

export default page;
