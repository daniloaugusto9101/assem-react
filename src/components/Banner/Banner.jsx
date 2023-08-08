import React from "react"
import Video from "../../../assets/banner/banner.mp4"

const Banner = () => {
  return (
    <div className="grid bg-secondary-950 w-full h-full">
      {/* <video src={Video} autoplay></video> */}
      <video
        className="top-0 z-10 w-full md:h-screen object-cover"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Banner
