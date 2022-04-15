
import React from "react";
import ReactPlayer from "react-player/file";
import "../../pages/other/player.css";


const HeroSliderSix = () => {

  return (
    <div className='player-wrapper'>
        <ReactPlayer
        url={[{src:"/assets/img/add.webm", type:"video/webm"}]}
        className='react-player'
        playing
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default HeroSliderSix;
