import React from "react"

const SectionDoubleXadrez = ({ list }) => {
  return (
    <div className="sm:grid sm:grid-cols-3">
      {list.map((obj, i) => {
        return (
          <div
            key={i}
            className={`mb-14 sm:col-span-2 ${
              i % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2"
            }`}
          >
            <div className={`grid gap-3 md:grid-cols-2 md:items-center`}>
              <img
                src={obj.img}
                alt={`Image ${i}`}
                className="justify-self-center md:justify-self-end "
              />
              <div className="text-center md:text-left">
                <p className="font-bold"> {obj.ano}</p>
                <p>{obj.text}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SectionDoubleXadrez
