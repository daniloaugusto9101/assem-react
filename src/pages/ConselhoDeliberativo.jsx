import React from "react"
import TitleText from "@components/TitleText/TitleText"
import DiretoriaList from "@components/DiretoriaList/DiretoriaList"

const conselhoDeliberativoList = [
  {
    title: "Mesa Diretora",
    diretores: [
      {
        img: "../../src/assets/img/page-deliberativo/joao-friggi.webp",
        nome: "João Frigi Neto",
        cargo: "Presidente",
      },
      {
        img: "../../src/assets/img/page-deliberativo/francisco-sato.webp",
        nome: "Francisco Sato",
        cargo: "Vice-Presidente",
      },
      {
        img: "../../src/assets/img/page-deliberativo/adriana-jorge.webp",
        nome: "Adriana de Castilho Jorge",
        cargo: "1ª Secretária",
      },
      {
        img: "../../src/assets/img/page-deliberativo/rita-cassia.webp",
        nome: "Rita de Cássia Giovaneli",
        cargo: "2ª Secretária",
      },
    ],
  },
  {
    title: "Conselheiros Vitalícios",
    diretores: [
      {
        img: "../../src/assets/img/page-deliberativo/antonio-batista-gomes.webp",
        nome: "Antonio Batista Gomes",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/antonio-ribeiro-guedes.webp",
        nome: "Antonio Ribeiro Guedes",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/arao-carvalho.webp",
        nome: "Arão Antonio de Andrade Carvalho",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/carlo-marcelo-oliveira.webp",
        nome: "Carlos Marcelo de Oliveira",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/edmilson-bernardino-pereira.webp",
        nome: "Edmilson Bernardino Pereira",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/francisco-sato.webp",
        nome: "Francisco Sato",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/joao-bastista-castro.webp",
        nome: "João Batista de Castro",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/joao-friggi.webp",
        nome: "João Frigi Neto",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/jorge-cursino-santos.webp",
        nome: "Jorge Cursino dos Santos",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/paulo-sergio-alciprete.webp",
        nome: "Paulo Sérgio Alciprete",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/rita-cassia.webp",
        nome: "Rita de Cássia Giovaneli",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/romualdo-pereira-castro.webp",
        nome: "Romualdo Pereira de Castro",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/sidney-ribeiro-santos.webp",
        nome: "Sidney Ribeiro de Paulo",
        cargo: "",
      },
    ],
  },
  {
    title: "Conselheiros Eleitos",
    diretores: [
      {
        img: "../../src/assets/img/page-deliberativo/adriana-jorge.webp",
        nome: "Adriana de Castilho Jorge",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/Celso-Antônio-de-Souza.webp",
        nome: "Celso Antônio de Souza",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/Claudemir-Assis-Cabral.webp",
        nome: "Claudemir de Assis Cabral",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/dorival-custodio.webp",
        nome: "Dorival Custódio dos Santos",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/Dulcinea-Borges-Ribeiro.webp",
        nome: "Dulcinea Borges Ribeiro",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/edmundo-paula.webp",
        nome: "Edmundo de Paula",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/franciscor-sergio-rizo.webp",
        nome: "Francisco Sérgio Rizo",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/ivanaldo-moreira.webp",
        nome: "Ivanaldo Moreira",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/marco-antonio-camargo.webp",
        nome: "Marco Antônio Camargo",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/maria-claudia-moura.webp",
        nome: "Maria Claudia de Moura Santucci",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/paulo-jose-augusto.webp",
        nome: "Paulo José Augusto dos Santos",
        cargo: "",
      },
      {
        img: "../../src/assets/img/page-deliberativo/paulo-vita-neres.webp",
        nome: "Paulo Vita Neres",
        cargo: "",
      },
    ],
  },
]

const ConselhoDeliberativo = () => {
  return (
    <section className="container m-auto mt-10 p-2">
      <TitleText title="Conselho Deliberativo" />
      <DiretoriaList diretoria={conselhoDeliberativoList} />
    </section>
  )
}

export default ConselhoDeliberativo
