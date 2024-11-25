import React, { useState, useEffect } from "react";
import { CgCloseR } from "react-icons/cg";

function Breathe({ onClose }) {
    const [isInhale, setIsInhale] = useState(true);

    useEffect(() => {
        // Toggle between inhale and exhale every 2 seconds
        const cycleInterval = setInterval(() => {
            setIsInhale((prev) => !prev);
        }, 2000);

        return () => clearInterval(cycleInterval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="breatheContent">
            <button className="closeBtn" onClick={onClose}>
                <CgCloseR />
            </button>

            <div className="circleContainer">
                <div className={`outerCircle`}>
                    <div
                        className={`innerCircle ${isInhale ? 'inhale' : 'exhale'}`}
                        style={{
                            background: isInhale ? 'skyblue' : 'transparent',
                            transform: isInhale ? 'scale(1.75)' : 'scale(1)', // Expands to 75% of the outer circle
                            transition: 'transform 2s ease-in-out, background 2s ease-in-out',
                        }}
                    >
                        <span className="breathingText">{isInhale ? 'Inhale' : 'Exhale'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breathe;
