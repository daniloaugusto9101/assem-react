import React from "react"
import TitleText from "@components/TitleText/TitleText"
import DiretoriaList from "@components/DiretoriaList/DiretoriaList"
import { ConselhoDeliberativoList } from "@components/ConselhoDeliberativoList"

const ConselhoDeliberativo = () => {
  return (
    <section className="container m-auto mt-10 p-2">
      <TitleText title="Conselho Deliberativo" />
      <DiretoriaList diretoria={ConselhoDeliberativoList} />
    </section>
  )
}

export default ConselhoDeliberativo
