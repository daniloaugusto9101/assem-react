import React from "react"

const SectionDoubleImg = (props) => {
  return (
    <div
      className={`animate-slide-right flex justify-center items-center  ${
        props.reserve && "animate-slide-left"
      }`}
    >
      <div className=" grid grid-cols-10 grid-rows-6 max-w-sm">
        <img
          src={props.img}
          alt=""
          className="col-start-1 col-span-8 row-start-1 row-span-full"
        />
        <div className="bg-primary-900 bg-opacity-90 col-start-1 col-span-8 row-start-1 row-span-5"></div>
        <img
          src={props.img}
          alt=""
          className="col-start-3 col-span-full row-start-2 row-span-full"
        />
      </div>
    </div>
  )
}

export default SectionDoubleImg
