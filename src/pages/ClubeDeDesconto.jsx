import React from "react"
import TitleText from "@components/TitleText/TitleText"
import Parceiros from "@components/Parceiros"

const ClubeDeDesconto = () => {
  return (
    <div className="my-20 flex flex-col">
      <TitleText title={"Clube de Desconto"} />
      <Parceiros />
    </div>
  )
}

export default ClubeDeDesconto
