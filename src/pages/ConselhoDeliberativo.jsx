import React from "react"
import TitleText from "@components/TitleText/TitleText"
import DiretoriaList from "@components/DiretoriaList/DiretoriaList"
import * as url from "@assets/img/page-deliberativo/"

const ConselhoDeliberativoList = [
  {
    title: "Mesa Diretora",
    diretores: [
      {
        img: url.img16,
        nome: "João Frigi Neto",
        cargo: "Presidente",
      },
      {
        img: url.img1,
        nome: "Adriana de Castilho Jorge",
        cargo: "1ª Secretária",
      },
      {
        img: url.img13,
        nome: "Francisco Sato",
        cargo: "Vice-Presidente",
      },
      {
        img: url.img23,
        nome: "Rita de Cássia Giovaneli",
        cargo: "2ª Secretária",
      },
    ],
  },
  {
    title: "Conselheiros Vitalícios",
    diretores: [
      {
        img: url.img2,
        nome: "Antonio Batista Gomes",
        cargo: "",
      },
      {
        img: url.img16,
        nome: "João Frigi Neto",
        cargo: "",
      },
      {
        img: url.img3,
        nome: "Antonio Ribeiro Guedes",
        cargo: "",
      },
      {
        img: url.img17,
        nome: "Jorge Cursino dos Santos",
        cargo: "",
      },
      {
        img: url.img4,
        nome: "Arão Antonio de Andrade Carvalho",
        cargo: "",
      },
      {
        img: url.img21,
        nome: "Paulo Sérgio Alciprete",
        cargo: "",
      },

      {
        img: url.img5,
        nome: "Carlos Marcelo de Oliveira",
        cargo: "",
      },
      {
        img: url.img23,
        nome: "Rita de Cássia Giovaneli",
        cargo: "",
      },
      {
        img: url.img10,
        nome: "Edmilson Bernardino Pereira",
        cargo: "",
      },
      {
        img: url.img24,
        nome: "Romualdo Pereira de Castro",
        cargo: "",
      },
      {
        img: url.img13,
        nome: "Francisco Sato",
        cargo: "",
      },
      {
        img: url.img0,
        nome: "Sidney Ribeiro de Paulo",
        cargo: "",
      },
      {
        img: url.img15,
        nome: "João Batista de Castro",
        cargo: "",
      },
    ],
  },
  {
    title: "Conselheiros Eleitos",
    diretores: [
      {
        img: url.img1,
        nome: "Adriana de Castilho Jorge",
      },
      {
        img: url.img12,
        nome: "Francisco Sérgio Rizo",
      },
      {
        img: url.img6,
        nome: "Celso Antônio de Souza",
      },
      {
        img: url.img14,
        nome: "Ivanaldo Moreira",
      },
      {
        img: url.img7,
        nome: "Claudemir de Assis Cabral",
      },
      {
        img: url.img18,
        nome: "Marco Antônio Camargo",
      },
      {
        img: url.img8,
        nome: "Dorival Custódio dos Santos",
      },
      {
        img: url.img19,
        nome: "Maria Claudia de Moura Santucci",
      },
      {
        img: url.img9,
        nome: "Dulcinea Borges Ribeiro",
      },
      {
        img: url.img20,
        nome: "Paulo José Augusto dos Santos",
      },
      {
        img: url.img11,
        nome: "Edmundo de Paula",
      },
      {
        img: url.img22,
        nome: "Paulo Vita Neres",
      },
    ],
  },
]

const ConselhoDeliberativo = () => {
  return (
    <section className="container m-auto mt-10 p-2">
      <TitleText title="Conselho Deliberativo" />
      <DiretoriaList diretoria={ConselhoDeliberativoList} />
    </section>
  )
}

export default ConselhoDeliberativo
