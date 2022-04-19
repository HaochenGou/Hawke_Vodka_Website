
import React from "react";
import ReactPlayer from "react-player/file";
import "../../pages/other/player.css";


const HeroSliderEight = () => {

  return (
    <div className='player-wrapper'>
        <ReactPlayer
        url={[{src:"/assets/img/baby.mp4", type:"video/mp4"}]}
        className='react-player'
        playing
        loop
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default HeroSliderEight;
