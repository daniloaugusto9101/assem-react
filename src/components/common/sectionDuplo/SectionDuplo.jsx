import React from "react"
import Button from "../Button"

const SectionDuplo = (props) => {
  const [reserve, setReserve] = React.useState(props.reserve)

  return (
    <section className="p-3 container m-auto grid md:grid-cols-2 gap-2 mt-20">
      <div
        className={`animate-slide-left flex justify-center items-center p-5 ${
          reserve && "animate-slide-right"
        }
        `}
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
      <div
        className={` flex flex-col items-center justify-center gap-5 text-center sm:items-start sm:text-left ${
          reserve &&
          "animate-slide-left sm:order-first sm:items-end sm:text-right"
        }
        `}
      >
        <h2 className="text-primary-900 text-5xl font-bold">{props.title}</h2>
        <p className={`text-ternary-600 text-3xl `}>{props.text}</p>
        <Button txtBtn={props.txtBtn} />
      </div>
    </section>
  )
}

export default SectionDuplo
