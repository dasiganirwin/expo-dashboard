import React from 'react';
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";

function Overview(Props) {
  return (
    <div className="mainContainer">
      <Header />
      <div className="navContainer">
        <SideNavigation />
      </div>
      <div className="contentsContainer">
        Overview
      </div>
    </div>
  );
}

export default Overview;
