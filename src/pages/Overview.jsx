import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";

function Overview() {
  return (
    <div className="mainContainer">
      <Header />
      <div className="navContainer">
        <SideNavigation />
      </div>
      <div className="contentsContainer"></div>
    </div>
  );
}

export default Overview;
