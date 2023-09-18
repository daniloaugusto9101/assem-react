import React from "react"
import TitleText from "../TitleText/TitleText"
import Button from "../Button/Button"

const SectionDoubleText = (props) => {
  return (
    <div
      className={`animate-slide-right flex flex-col items-center justify-center gap-5 text-center md:items-start md:text-left ${
        props.reserve &&
        "animate-slide-left md:order-first md:items-end md:text-right"
      }
  `}
    >
      <TitleText title={props.title} />
      <p className={`text-ternary-600 text-xl xl:text-3xl `}>{props.text}</p>
      <Button txtBtn={props.txtBtn} url={props.url} />
    </div>
  )
}

export default SectionDoubleText
