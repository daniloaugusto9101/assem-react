import React from "react"
import DiretorItem from "../DiretoriaItem/DiretoriaItem"
import TitleUnderline from "../TitleUnderline/TitleUnderline"

const DiretoriaList = ({ diretoria }) => {
  console.log(diretoria)
  return (
    <div className="mt-20">
      {diretoria.map((obj, id) => (
        <div key={id} className=" mb-20">
          <TitleUnderline text={obj.title} />
          <div className="grid gap-x-2 gap-y-4 sm:grid-cols-2">
            {obj.diretores.map((diretor, id) => (
              <DiretorItem diretor={diretor} key={id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DiretoriaList
