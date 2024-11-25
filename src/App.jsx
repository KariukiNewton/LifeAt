import React, { useState, useRef, useEffect } from "react";
import HeaderSection from "./components/HeaderSection";
import SideBar from "./components/sidebar";
import backgroundVideos from "./assets/backgroundVideos";
import backgroundSounds from "./assets/backgroundSounds";
import "./styles.scss";
import Spaces from "./components/Spaces";
import Sounds from "./components/Sounds";
import Calender from "./components/Calender";
import Timer from "./components/Timer";
import Tasks from "./components/Tasks";
import Notes from "./components/Notes";
import Media from "./components/Media";
import Breathe from "./components/Breathe";

function App() {
  const videos = backgroundVideos().nature;
  const soundsData = backgroundSounds().sounds;

  const [activeOverlay, setActiveOverlay] = useState(null);
  const [backgroundVideo, setBackgroundVideo] = useState(videos[0].src);

  // Audio management state
  const [masterVolume, setMasterVolume] = useState(0.5);
  const [soundVolumes, setSoundVolumes] = useState(soundsData.map(() => 0));
  const audioRefs = useRef([]);

  // Initialize audio elements on mount
  useEffect(() => {
    audioRefs.current.forEach((audio, index) => {
      if (audio) {
        audio.volume = 0;
        audio.pause();
      }
    });
  }, []);

  // Function to handle master volume changes
  const handleMasterVolume = (volume) => {
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

  // Function to handle individual sound volume changes
  const handleSoundVolumeChange = (index, volume) => {
    const updatedVolumes = [...soundVolumes];
    updatedVolumes[index] = volume;
    setSoundVolumes(updatedVolumes);

    if (audioRefs.current[index]) {
      const effectiveVolume = updatedVolumes[index] * masterVolume;
      audioRefs.current[index].volume = effectiveVolume;

      if (effectiveVolume > 0) {
        audioRefs.current[index].play();
      } else {
        audioRefs.current[index].pause();
      }
    }
  };

  const handleSelectVideo = (videoSrc) => {
    setBackgroundVideo(videoSrc);
  };

  // Function to open an overlay
  const openOverlay = (overlay) => {
    setActiveOverlay(overlay);
  };

  // Function to close an overlay
  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  return (
    <div className="appContainer">
      <video className="backgroundVideo" src={backgroundVideo} autoPlay loop muted />

      <HeaderSection />

      <SideBar openOverlay={openOverlay} />

      {/** Conditional Rendering of Overlays */}
      {activeOverlay === "Spaces" && (
        <Spaces onClose={closeOverlay} onSelectVideo={handleSelectVideo} />
      )}

      {activeOverlay === "Sounds" && (
        <Sounds
          onClose={closeOverlay}
          masterVolume={masterVolume}
          soundVolumes={soundVolumes}
          handleMasterVolume={handleMasterVolume}
          handleSoundVolumeChange={handleSoundVolumeChange}
          audioRefs={audioRefs}
        />
      )}


      {activeOverlay === "Calendar" && <Calender onClose={closeOverlay} />}
      {activeOverlay === "Timer" && <Timer onClose={closeOverlay} />}
      {activeOverlay === "Tasks" && <Tasks onClose={closeOverlay} />}
      {activeOverlay === "Notes" && <Notes onClose={closeOverlay} />}
      {activeOverlay === "Media" && <Media onClose={closeOverlay} />}
      {activeOverlay === "Breathe" && <Breathe onClose={closeOverlay} />}

      {/* Render Audio Elements Outside of Sounds */}
      {soundsData.map((sound, index) => (
        <audio
          key={sound.index}
          ref={(el) => (audioRefs.current[index] = el)}
          src={sound.src}
          loop
        />
      ))}
    </div>
  );
}

export default App;






