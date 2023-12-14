import React from "react"
import TitleText from "@components/TitleText/TitleText"
import DiretoriaExecutivaHeader from "@components/DiretoriaExecutivaHeader/DiretoriaExecutivaHeader"
import DiretoriaList from "@components/DiretoriaList/DiretoriaList"
import * as url from "@assets/img/page-executiva/"

const diretoriaExecutivaList = [
  {
    title: "Diretoria",
    diretores: [
      {
        img: url.img1,
        nome: "Eliane Milanez da Cunha",
        cargo: "1ª Secretária",
      },
      {
        img: url.img3,
        nome: "Fátima Regina da Silva",
        cargo: "2ª Secretária",
      },
      {
        img: url.img2,
        nome: "Benedito Sérgio Teixeira",
        cargo: "1ª Tesoureiro",
      },
      {
        img: url.img4,
        cargo: "2ª Tesoureiro",
      },
    ],
  },
  {
    title: "Departamentos",
    diretores: [
      {
        img: url.img11,
        nome: "Silvia Maria Tegão Alcalde Leite",
        cargo: "Departamento Social/Cultural",
      },
      {
        img: url.img12,
        cargo: "Departamento Social/Cultural (Adjunto)",
      },
      {
        img: url.img8,
        nome: "José Valter de Andrade",
        cargo: "Departamento de Atividades Físicas",
      },
      {
        img: url.img9,
        nome: "Ricardo de Oliveira Bruni",
        cargo: "Departamento de Informática",
      },
      {
        img: url.img7,
        nome: "Nilton Marcos Pires",
        cargo: "Departamento de Esportes e Competições",
      },
      {
        img: url.img14,
        nome: "Daniel José de Siqueira",
        cargo: "Departamento do Clube de Campo/ Parcerias",
      },
      {
        img: url.img6,
        cargo: "Departamento de Compras",
      },
      {
        img: url.img10,
        nome: "Waldery Teixeira",
        cargo: "Departamento da Pousada ASSEM Litoral",
      },
    ],
  },
]

const DiretoriaExecutiva = () => {
  return (
    <section className="container m-auto mt-10 p-2">
      <TitleText title="Diretoria Executiva" />
      <DiretoriaExecutivaHeader />
      <DiretoriaList diretoria={diretoriaExecutivaList} />
    </section>
  )
}

export default DiretoriaExecutiva
