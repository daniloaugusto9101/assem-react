import React from "react"

const DiretoriaItem = ({ diretor }) => {
  return (
    <div className="grid grid-cols-5 xl:grid-cols-4 gap-2 text-ternary-600 items-center">
      <img src={diretor.img} className="col-span-2 xl:col-span-1" />
      <div className="col-span-3 xl:col-span-3">
        <p className="text-xl">{diretor.nome}</p>
        <p>{diretor.cargo}</p>
      </div>
    </div>
  )
}

export default DiretoriaItem
