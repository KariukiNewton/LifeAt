import React from "react";
import { GiWorld, GiSoundOn } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { PiTimerBold } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { FaSpotify, FaWind } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";




function SideBar({ openOverlay }) {
    return (
        <div className="sideBarContainer">
            <div className="upperSect">
                <button className="spaces" onClick={() => openOverlay("Spaces")}>
                    <GiWorld />
                    <p>Spaces</p>
                </button>
                <button className="sounds" onClick={() => openOverlay("Sounds")}>
                    <GiSoundOn />
                    <p>Sounds</p>
                </button>
                <button className="calender" onClick={() => openOverlay("Calendar")}>
                    <SlCalender />
                    <p>Calendar</p>
                </button>
            </div>

            <div className="lowerSect">
                <button className="timer" onClick={() => openOverlay("Timer")}>
                    <PiTimerBold />
                    <p>Timer</p>
                </button>
                <button className="tasks" onClick={() => openOverlay("Tasks")}>
                    <FaTasks />
                    <p>Tasks</p>
                </button>
                <button className="notes" onClick={() => openOverlay("Notes")}>
                    <GrNotes />
                    <p>Notes</p>
                </button>
                <button className="media" onClick={() => openOverlay("Media")}>
                    <FaSpotify />
                    <p>Media</p>
                </button>
                <button className="breathe" onClick={() => openOverlay("Breath")}>
                    <FaWind />
                    <p>Breathe</p>
                </button>
                <button className="reset">
                    <IoIosMore />
                </button>
            </div>
        </div>
    );
}

export default SideBar;
