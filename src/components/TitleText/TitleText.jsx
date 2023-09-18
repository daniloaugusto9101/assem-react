import React from "react"

const TitleText = (props) => {
  return (
    <h2 className="text-4xl text-primary-900 text-center xl:text-5xl font-bold">
      {props.title}
    </h2>
  )
}

export default TitleText
