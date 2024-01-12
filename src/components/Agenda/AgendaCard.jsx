import React from "react"
import Icons from "@components/Icons/Icons"

const AgendaCard = ({ agendaPosts }) => {
  return (
    <>
      {agendaPosts.map((obj, i) => (
        <div
          key={i}
          className="bg-ternary-50 p-2 shadow shadow-ternary-400 flex-none w-80 flex gap-2"
          a
        >
          <div className="bg-primary-900 py-2 px-4 text-ternary-50 flex flex-col justify-center items-center">
            <p className="text-5xl">{obj.acf.dia_do_evento}</p>
            <p className="text-2xl">{obj.acf.mes_evento}</p>
          </div>
          <div>
            <p className="font-bold text-xl">{obj.acf.titulo_evento_agenda}</p>

            <p className="italic flex items-baseline text-ternary-700">
              <Icons nomeDoIcone="FaLocationDot" />
              <span>{obj.acf.local_do_evento}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default AgendaCard
