import React from "react"
import TitleText from "@components/TitleText/TitleText"
import DiretoriaList from "@components/DiretoriaList/DiretoriaList"

const conselhoFiscalList = [
  {
    title: "Membros Efetivos",
    diretores: [
      {
        img: "../../src/assets/img/page-fiscal/jose-aparecido-nunes.webp",
        nome: "José Aparecido Nunes",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-fiscal/maurilio-calvo-filho.webp",
        nome: "Maurílio Calvo Filho",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-fiscal/sidnei-moises-ferreira.webp",
        nome: "Sidnei Moisés Ferreira",
        cargo: "",
      },
    ],
  },
  {
    title: "Membros Suplentes",
    diretores: [
      {
        img: "../../src/assets/img/page-fiscal/rita-cassia-santos-correa.webp",
        nome: "Rita de Cássia Santos Correa",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-fiscal/manoel-gomes-satos.webp",
        nome: "Manoel Gomes dos Santos",
        cargo: "",
      },
    ],
  },
]

const ConselhoFiscal = () => {
  return (
    <section className="container m-auto mt-10 p-2">
      <TitleText title="Conselho Fiscal" />
      <DiretoriaList diretoria={conselhoFiscalList} />
    </section>
  )
}

export default ConselhoFiscal
