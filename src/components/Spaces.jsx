import React, { useState, useMemo } from "react";
import { CgCloseR } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import backgroundVideos from "../assets/backgroundVideos";

function Spaces({ onClose, onSelectVideo }) {
    const [activeTab, setActiveTab] = useState('all');      //Tacking active filter
    const videoData = backgroundVideos();       //fetching all video categories


    const handleTabChange = (tab) => setActiveTab(tab.toLowerCase());

    const filteredVideos = useMemo(() => {
        return Object.entries(videoData)
            .filter(([category]) => activeTab === 'all' || category.toLowerCase() === activeTab)
            .flatMap(([_, videos]) => videos);
    }, [activeTab, videoData]);

    return (
        <>
            <div className="spacesContent">
                <button className="closeBtn" onClick={onClose}>
                    <CgCloseR />
                </button>

                <div className="tabs">
                    <button className="allSpacesBtn" onClick={() => handleTabChange('all')}>All Spaces</button>
                    <button className="favouritesBtn">Favourites</button>
                </div>

                <div className="searchBar">
                    <input type="text" placeholder="Search Space"></input>
                    <button className="searchIcon"><FaSearch /></button>
                </div>

                <div className="filterButtons">
                    {["All", "Nature", "Art", "Sky", "More"].map((filter, index) => (
                        <button key={index} className="individualFilterButton">
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="featureSpaces">
                    <h3>Featured Spaces</h3>
                    <p>Trending Spaces</p>
                    <div className="spacesGrid">
                        {filteredVideos.map((video) => (
                            <div
                                key={video.index}
                                onClick={() => onSelectVideo(video.src)} // Pass selected video 
                                className="spaceItem">
                                <video
                                    src={video.src}
                                    controls
                                    loop
                                    muted
                                    className="spaceVideo"
                                ></video>
                                <p className="videoDescription">{video.description}</p>
                                <button className="favouriteIcon">♥</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Spaces