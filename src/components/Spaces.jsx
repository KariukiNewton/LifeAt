import React, { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import backgroundImages from "../assets/backgroundVideos";

function Spaces({ onClose }) {
    const [activeTab, setActiveTab] = useState('all')

    const handleTabChange = (tab) => setActiveTab(tab)

    return (
        <>
            <div className="spacesContent">
                <button className="closeBtn" onClick={onClose}>
                    <CgCloseR />
                </button>
                <div className="tabs">
                    <button className="tabActive">All Spaces</button>
                    <button className="tab">Favourites</button>
                </div>

                <div className="searchBar">
                    <input type="text" placeholder="Search Space"></input>
                    <button className="searchIcon"><FaSearch /></button>
                </div>

                <div className="filterButtons">
                    {["All", "🌄", "🪟", "🧘", "🎥", "🍂"].map((filter, index) => (
                        <button key={index} className="filter-button">
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="featureSpaces">
                    <h3>Featured Spaces</h3>
                    <p>Trending Spaces</p>
                    <div className="spacesGrid">
                        <div className="spaceItem">
                            <img src="" alt=""></img>
                            <p>space name{ }</p>
                            <button className="favouriteIcon">♥</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Spaces