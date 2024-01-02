import React from "react"
import TitleText from "../TitleText/TitleText"
import Button from "../Button/Button"
import { useInView } from "react-intersection-observer"

const SectionDoubleText = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento entrar na viewport
    threshold: 0.0, // Define o limite de visibilidade (0 a 1)
  })
  return (
    <div
      ref={ref}
      className={`${
        inView
          ? props.reserve
            ? "animate-slide-toRight md:items-end md:text-right"
            : "animate-slide-toLeft md:items-start md:text-left"
          : ""
      } flex flex-col items-center justify-center gap-5 text-center  
  `}
    >
      <TitleText title={props.title} />
      <p className={`text-ternary-600 text-xl xl:text-3xl `}>{props.text}</p>
      {/* <Button txtBtn={props.txtBtn} url={props.url} target={props.isTarget} /> */}
      <Button {...props} />
    </div>
  )
}

export default SectionDoubleText
