import React from "react";

function HeaderSection() {
    return (
        <div className="headerSection">
            <div className="leftHandSide">
                <div className="focus">
                    <p>Focus</p> {/* Moved outside the select element */}
                    <select>
                        <option>Plan</option>
                        <option>Explore</option>
                    </select>
                </div>
                <div className="dailyMetrics">
                    <p>🔥 <span>0</span></p>
                </div>
                <div className="upgrades">
                    <button>🔥<span>Upgrade</span></button>
                </div>
            </div>
            <div className="rightHandside">
                <div className="Users">
                    <img src="" alt=""></img>
                </div>

                <div className="aboutUs">
                    <select>
                        <option>About Us</option>
                        <option>Contact</option>
                    </select>
                </div>
                <div className="profile">
                    <i></i>
                    <select>
                        <option>My Account</option>
                        <option>Appearance</option>
                        <option>Sign Out</option>
                    </select>
                    <div className="socialAccounts">
                        {/* Add social media icons here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;
