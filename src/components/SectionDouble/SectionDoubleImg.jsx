import React from "react"
import { useInView } from "react-intersection-observer"

const SectionDoubleImg = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento entrar na viewport
    threshold: 0.1, // Define o limite de visibilidade (0 a 1)
  })
  return (
    <div
      ref={ref}
      className={`flex justify-center items-center opacity-0
        ${
          inView
            ? props.reserve
              ? "animate-slide-toLeft md:order-1"
              : "animate-slide-toRight"
            : ""
        }
        }
      `}
    >
      <div className="grid grid-cols-10 grid-rows-6 max-w-sm">
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
