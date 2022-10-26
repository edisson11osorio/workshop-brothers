import React from "react";
import ReactPlayer from 'react-player'
import "../styles/video.css"


function LogrosImages(){
  return (
    <div className="video">
              <ReactPlayer
                    url={require("../images/video.mp4")}
                    playing
                    controls
                    volume="0.8"
                    width={1100}
                    height={1100}
                    loop
                />
    </div>
  )
}

export default LogrosImages