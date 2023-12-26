import React from "react"
import TitleText from "@components/TitleText/TitleText"
import DiretoriaList from "@components/DiretoriaList/DiretoriaList"
import * as url from "@assets/img/page-fiscal/"

const conselhoFiscalList = [
  {
    title: "Membros Efetivos",
    diretores: [
      {
        img: url.img0,
        nome: "José Aparecido Nunes",
        cargo: "",
      },
      {
        img: url.img2,
        nome: "Maurílio Calvo Filho",
        cargo: "",
      },
      {
        img: url.img4,
        nome: "Sidnei Moisés Ferreira",
        cargo: "",
      },
    ],
  },
  {
    title: "Membros Suplentes",
    diretores: [
      {
        img: url.img3,
        nome: "Rita de Cássia Santos Correa",
        cargo: "",
      },
      {
        img: url.img1,
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
