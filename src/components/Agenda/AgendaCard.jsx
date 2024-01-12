import React from "react"
import Icons from "@components/Icons/Icons"

const AgendaCard = ({ agendaPosts }) => {
  return (
    <>
      {agendaPosts.map((obj, i) => (
        <div
          key={i}
          className="bg-ternary-50 p-2 shadow shadow-ternary-400 flex-none w-80 flex gap-2"
        >
          <div className="bg-primary-900 py-2 px-4 text-ternary-50 flex flex-col justify-center items-center">
            <p className="text-5xl">{obj.dia}</p>
            <p className="text-2xl">{obj.mes}</p>
          </div>
          <div>
            <p className="font-bold text-xl">{obj.titulo}</p>

            <p className="italic flex items-baseline text-ternary-700">
              <Icons nomeDoIcone="FaLocationDot" />
              <span>{obj.local}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default AgendaCard
