import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";


function Dashboard() {
    return (
        <div className="mainContainer">
            <div className="header">
                <Header />
            </div>
            <div className="contentsContainer">
                <h1>Dashboard</h1>
                <div className="eventYear">
                    <div>
                        <p>Event</p>
                    </div>
                    <div>
                        <p>Year</p>
                    </div>
                </div>
            </div>
            <div className="navContainer">
                <SideNavigation />
            </div>  
        </div>
        );
    }

export default Dashboard;