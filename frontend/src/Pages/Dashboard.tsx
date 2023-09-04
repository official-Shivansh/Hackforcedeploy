import React from 'react'
import video from "../images/video.mp4"
import Home from './Home'
const Dashboard = () => {
  return (
    <div>
      <div className="w-full flex flex-row mx-auto">
        <div className="w-full text-center m-auto">
          <video
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover", filter: "brightness(60%)", opacity:".9" }}
            src={video}
            autoPlay
            muted
            loop
          ></video>
          {/* <div
            style={{
              height: "90px",
              position: "relative",
              top: "-90px",
              zIndex: "4",
              backgroundColor: "white",
            }}
          >
          
          </div> */}
        </div>
       
     
      </div>
       <div> <Home /></div>
    </div>

  )
}

export default Dashboard
