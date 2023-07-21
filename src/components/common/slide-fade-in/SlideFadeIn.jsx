import React from "react"
import Img1 from "../../../assets/test.png"

const SlideFadeIn = () => {
  return (
    <div className="bg-secondary-400 overflow-hidden relative">
      <div className="">
        <img src={Img1} alt="" className="h-full w-full" />
      </div>
    </div>
  )
}

export default SlideFadeIn
