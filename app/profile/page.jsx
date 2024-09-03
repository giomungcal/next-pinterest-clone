import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

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
      <Footer />
    </>
  );
}

export default page;
