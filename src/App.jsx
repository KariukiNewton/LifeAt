import React, { useState } from 'react';
import HeaderSection from "./components/HeaderSection";
import SideBar from './components/sidebar';
import backgroundVideos from './assets/backgroundVideos'
import "./styles.scss";
import { FaBeer } from 'react-icons/fa';
import Spaces from './components/Spaces'
import Sounds from './components/Sounds'
import Calender from './components/Calender'
import Timer from './components/Timer'
import Tasks from './components/Tasks'
import Notes from './components/Notes'
import Media from './components/Media'
import Breathe from './components/Breathe'



function App() {
  const videos = backgroundVideos().sky;
  //const backgroundVideo = videos[0].src;

  const [activeOverlay, setActiveOverlay] = useState(null);
  const [backgroundVideo, setBackgroundVideo] = useState(videos[0].src);

  // Function to open an overlay
  const openOverlay = (overlay) => {
    setActiveOverlay(overlay);
  };

  // Function to close an overlay
  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  const handleSelectVideo = (videoSrc) => {
    setBackgroundVideo(videoSrc)
  }

  return (
    <div className="appContainer">
      <video className="backgroundVideo" src={backgroundVideo} autoPlay loop muted />

      <HeaderSection></HeaderSection>

      <SideBar openOverlay={openOverlay}></SideBar>

      {/**Conditional Rendering of the overlays*/}


      {activeOverlay === "Spaces" && <Spaces onClose={closeOverlay} onSelectVideo={handleSelectVideo} />}
      {activeOverlay === "Sounds" && <Sounds onClose={closeOverlay} />}
      {activeOverlay === "Calendar" && <Calender onClose={closeOverlay} />}
      {activeOverlay === "Timer" && <Timer onClose={closeOverlay} />}
      {activeOverlay === "Tasks" && <Tasks onClose={closeOverlay} />}
      {activeOverlay === "Notes" && <Notes onClose={closeOverlay} />}
      {activeOverlay === "Media" && <Media onClose={closeOverlay} />}
      {activeOverlay === "Breathe" && <Breathe onClose={closeOverlay} />}

    </div>

  );
}

export default App;



