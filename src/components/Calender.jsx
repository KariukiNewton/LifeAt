import React, { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"; // Navigation icons

function Calendar({ onClose }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [notes, setNotes] = useState({}); // Stores notes for each day

    // Helper to format dates as keys (e.g., "2024-11-21")
    const getDateKey = (date) => {
        return date.toISOString().split("T")[0];
    };

    const handlePreviousDay = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() - 1);
            return newDate;
        });
    };

    const handleToday = () => {
        setCurrentDate(new Date());
    };

    const handleNextDay = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() + 1);
            return newDate;
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    };

    const generateTimeSlots = () => {
        const timeSlots = [];
        for (let hour = 0; hour < 24; hour++) {
            timeSlots.push(`${hour % 12 === 0 ? 12 : hour % 12} ${hour < 12 ? "AM" : "PM"}`);
        }
        return timeSlots;
    };

    const handleInputChange = (timeSlot, value) => {
        const dateKey = getDateKey(currentDate); // Get the key for the current date
        setNotes((prevNotes) => ({
            ...prevNotes,
            [dateKey]: {
                ...prevNotes[dateKey],
                [timeSlot]: value,
            },
        }));
    };

    const clearNotesForNewDay = () => {
        const dateKey = getDateKey(currentDate); // Get the key for the current date
        if (!notes[dateKey]) {
            setNotes((prevNotes) => ({
                ...prevNotes,
                [dateKey]: {}, // Ensure an empty notes object for the new day
            }));
        }
    };

    // Call clearNotesForNewDay whenever the currentDate changes
    React.useEffect(() => {
        clearNotesForNewDay();
    }, [currentDate]);

    const getCurrentNotes = () => {
        const dateKey = getDateKey(currentDate);
        return notes[dateKey] || {}; // Return notes for the current day or an empty object
    };

    return (
        <div className="calenderContent">
            <button className="closeBtn" onClick={onClose}>
                <CgCloseR />
            </button>

            <div className="calenderHeader">
                <div className="dateDisplay">
                    <button className="navButton" onClick={handlePreviousDay}>
                        <IoChevronBack />
                    </button>
                    <h4>{formatDate(currentDate)}</h4>
                    <button className="navButton" onClick={handleNextDay}>
                        <IoChevronForward />
                    </button>
                </div>

                <button className="todayButton" onClick={handleToday}>
                    Today
                </button>
            </div>

            <div className="calenderBody">
                <h3>All Day</h3>
                {generateTimeSlots().map((time, index) => (
                    <div key={index} className="timeSlot">
                        <label className="timeLabel">{time}</label>
                        <input
                            type="text"
                            className="timeInput"
                            value={getCurrentNotes()[time] || ""}
                            onChange={(e) => handleInputChange(time, e.target.value)}
                            placeholder="Enter notes..."
                        />
                    </div>
                ))}
            </div>

            <div className="calenderFooter">
                <p>Feedback</p>
                <button className="settingsButton">
                    <span>⚙</span>
                </button>
            </div>
        </div>
    );
}

export default Calendar;
