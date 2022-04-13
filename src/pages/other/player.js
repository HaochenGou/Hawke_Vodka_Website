import React from "react";
import ReactPlayer from "react-player/youtube";
import './player.css';


export default function Player() {
    return (
    <div className='player-wrapper'>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LCCxIOAepEU"
        className='react-player'
        playing
        width="100%"
        height="60%"
      />
       </div>
    );
  }