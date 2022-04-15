
import React from "react";
import ReactPlayer from "react-player/file";
import "../../pages/other/player.css";


const HeroSliderSeven = () => {

  return (
    <div className='player-wrapper'>
        <ReactPlayer
        url={[{src:"/assets/img/2022.webm", type:"video/webm"}]}
        className='react-player'
        playing
        loop
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default HeroSliderSeven;
