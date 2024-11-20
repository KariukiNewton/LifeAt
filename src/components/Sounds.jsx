import React from "react";
import { CgCloseR } from "react-icons/cg";
import { IoVolumeHighOutline } from "react-icons/io5";
import backgroundSounds from "../assets/backgroundSounds"; // Importing the sounds data

function Sounds({
    onClose,
    masterVolume,
    soundVolumes,
    handleMasterVolume,
    handleSoundVolumeChange,
}) {
    const soundData = backgroundSounds().sounds; // Access the sounds data

    return (
        <div className="soundsContent">
            <button className="closeBtn" onClick={onClose}>
                <CgCloseR />
            </button>

            <h2>SoundBoard</h2>
            <div className="masterVolume">
                <label>Master Volume</label>
                <div className="volInput">
                    <IoVolumeHighOutline />
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={masterVolume}
                        onChange={(e) => handleMasterVolume(parseFloat(e.target.value))}
                    />
                </div>
            </div>

            <div className="allSounds">
                <h3>Ambiance</h3>
                {soundData.map((sound, index) => (
                    <div key={sound.index} className="soundItem">
                        <div className="soundDescription">
                            <span className="soundIcon">{sound.icon}</span>
                            <span className="soundName">{sound.name}</span>
                        </div>
                        <div className="individualSound">
                            <IoVolumeHighOutline />
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={soundVolumes[index]}
                                onChange={(e) =>
                                    handleSoundVolumeChange(index, parseFloat(e.target.value))
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sounds;





{/** import React, { useEffect, useRef, useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { IoVolumeHighOutline } from "react-icons/io5";
import { IoIosVolumeOff } from "react-icons/io";
import backgroundSounds from "../assets/backgroundSounds";

function Sounds({ onClose }) {
    try {

        const soundData = backgroundSounds().sounds;
        const [masterVolume, setMasterVolume] = useState(0.5);
        const [soundVolumes, setSoundVolumes] = useState(soundData.map(() => 0))

        const audioRefs = useRef([]);

        useEffect(() => {
            audioRefs.current.forEach((audio) => {
                if (audio) {
                    audio.volume = 0;
                    audio.pause();
                }
            });
        }, []);

        const handleMasterVolume = (e) => {
            const volume = e.target.value;
            setMasterVolume(volume);
            audioRefs.current.forEach((audio, index) => {
                if (audio) {
                    const effectiveVolume = soundVolumes[index] * volume;
                    audio.volume = effectiveVolume;

                    if (effectiveVolume > 0) {
                        audio.play();
                    } else {
                        audio.pause();
                    }
                }
            });
        };

        const handleSoundVolumeChange = (index, volume) => {
            const updatedVolumes = [...soundVolumes];
            updatedVolumes[index] = volume;
            setSoundVolumes(updatedVolumes);

            if (audioRefs.current[index]) {
                const effectiveVolume = updatedVolumes[index] * masterVolume;
                audioRefs.current[index].volume = effectiveVolume

                if (effectiveVolume > 0) {
                    audioRefs.current[index].play();
                } else {
                    audioRefs.current[index].pause();
                }

            }
        };

        return (
            <div className="soundsContent">
                <button className="closeBtn" onClick={onClose}>
                    <CgCloseR />
                </button>

                <h2>SoundBoard</h2>
                <div className="masterVolume">
                    <label>Master Volume</label>
                    <div className="volInput">
                        <IoVolumeHighOutline />
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={masterVolume}
                            onChange={handleMasterVolume}
                        ></input>
                    </div>
                </div>


                <div className="allSounds">
                    <h3>Ambiance</h3>
                    {soundData.map((sound, index) => (
                        <div key={sound.index} className="soundItem">
                            <div className="soundDescription">
                                <span className="soundIcon">{sound.icon}</span>
                                <span className="soundName">{sound.name}</span>
                            </div>
                            <div className="individualSound">
                                <IoVolumeHighOutline />
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={soundVolumes[index]}
                                    onChange={(e) => handleSoundVolumeChange(index, e.target.value)}
                                ></input>
                            </div>
                            <audio
                                ref={(el) => (audioRefs.current[index] = el)}
                                src={sound.src}
                                loop
                                autoPlay
                                volume={soundVolumes[index] * masterVolume}
                            />
                        </div>
                    ))}


                </div>

            </div>

        )


    } catch (error) {
        console.log("Error in sounds component", error)
        return <div>Error loading Sounds</div>

    }




}
export default Sounds;*/}