import React from "react"

const ContatosItem = ({ urlMap, local, endereco, telefone }) => {
  return (
    <div className="border border-ternary-600 mb-20">
      <iframe src={urlMap} className="w-full h-[300px] border-0"></iframe>
      <div className="p-4 text-ternary-700 flex flex-col gap-4">
        <p className="text-5xl">{local}</p>
        <p className="">{endereco}</p>
        <p>{telefone}</p>
      </div>
    </div>
  )
}

export default ContatosItem
