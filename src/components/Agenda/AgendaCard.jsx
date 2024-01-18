import React from "react"
import Icons from "@components/Icons/Icons"
import { obterDiaFormatado, obterMesAbreviado } from "@/hooks/useFormartDate"
import { Link } from "react-router-dom"

const AgendaCard = ({ agendaPosts }) => {
  return (
    <>
      {agendaPosts.map((obj, i) => (
        <div
          key={i}
          className="bg-ternary-50 p-2 shadow shadow-ternary-400 flex-none w-80 flex gap-2"
        >
          <div className="bg-primary-900 py-2 px-4 text-ternary-50 flex flex-col justify-center items-center">
            <p className="text-5xl">
              {obterDiaFormatado(obj.acf.data_do_evento)}
            </p>
            <p className="text-2xl uppercase">
              {obterMesAbreviado(obj.acf.data_do_evento)}
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="">
              <p className="font-bold text-xl">
                {obj.acf.titulo_evento_agenda}
              </p>

              <p className="flex items-baseline text-ternary-700 gap-1">
                {/* <Icons nomeDoIcone="FaLocationDot" /> */}
                <span>{obj.acf.local_do_evento}</span>
              </p>
            </div>

            <Link
              to={`/assem-react/post/${obj.id}`}
              className="italic  text-ternary-700 hover:text-secondary-700"
            >
              <span>Ver detalhes</span>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default AgendaCard
