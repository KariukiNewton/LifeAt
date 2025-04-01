import React from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";

function HeaderSection() {
    return (
        <div className="headerSection">
            <div className="leftHandSide">
                <div className="focus">
                    {/* Custom Dropdown (replace <select> with your custom implementation if needed) */}
                    <select>
                        <option value="1">Plan</option>
                        <option value="2">Explore</option>
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
                    <img src="" alt="User" />
                </div>

                <div className="aboutUs">
                    <select>
                        <option value="about">About Us</option>
                        <option value="contact">Contact</option>
                    </select>
                </div>
                <div className="profile">
                    <i></i>
                    <select>
                        <option value="account">My Account</option>
                        <option value="appearance">Appearance</option>
                        <option value="signout">Sign Out</option>
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
