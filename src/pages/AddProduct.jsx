import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";


function AddProduct() {
    return (
        <div className="mainContainer">
            <div className="header">
                <Header />
            </div>
            <div className="contentsContainer">
                <h1>Add Product</h1>
            </div>
            <div className="navContainer">
                <SideNavigation />
            </div>
        </div>
        );
    }

export default AddProduct;