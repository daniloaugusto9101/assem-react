import React from "react"
import TitleText from "@components/TitleText/TitleText"
import DiretoriaExecutivaHeader from "@components/DiretoriaExecutivaHeader/DiretoriaExecutivaHeader"
import DiretoriaList from "@components/DiretoriaList/DiretoriaList"

const diretoriaExecutivaList = [
  {
    title: "Diretoria",
    diretores: [
      {
        img: "../../src/assets/img/page-executiva/1-secretaria.webp",
        nome: "Eliane Milanez da Cunha",
        cargo: "1ª Secretária",
      },
      {
        img: "../../src/assets/img/page-executiva/2-secretaria.webp",
        nome: "Fátima Regina da Silva",
        cargo: "2ª Secretária",
      },
      {
        img: "../../src/assets/img/page-executiva/1-tesoureiro.webp",
        nome: "Benedito Sérgio Teixeira",
        cargo: "1ª Tesoureiro",
      },
      {
        img: "../../src/assets/img/page-executiva/2-tesoureiro.webp",
        nome: "Flávio Carlos dos Santos",
        cargo: "2ª Tesoureiro",
      },
    ],
  },
  {
    title: "Departamentos",
    diretores: [
      {
        img: "../../src/assets/img/page-executiva/dp-social.webp",
        nome: "Silvia Maria Tegão Alcalde Leite",
        cargo: "Departamento Social/Cultural",
      },
      {
        img: "../../src/assets/img/page-executiva/dp-social2.webp",
        nome: "Maria Aparecida de Souza Teixeira",
        cargo: "Departamento Social/Cultural (Adjunto)",
      },
      {
        img: "../../src/assets/img/page-executiva/dp-fisicas.webp",
        nome: "José Valter de Andrade",
        cargo: "Departamento de Atividades Físicas",
      },
      {
        img: "../../src/assets/img/page-executiva/dp-informatica.webp",
        nome: "Ricardo de Oliveira Bruni",
        cargo: "Departamento de Informática",
      },
      {
        img: "../../src/assets/img/page-executiva/dp-esportes.webp",
        nome: "Nilton Marcos Pires",
        cargo: "Departamento de Esportes e Competições",
      },
      {
        img: "../../src/assets/img/page-executiva/dp-parcerias.webp",
        nome: "Daniel José de Siqueira",
        cargo: "Departamento do Clube de Campo/ Parcerias",
      },
      {
        img: "../../src/assets/img/page-executiva/dp-compras.webp",
        nome: "José Rubens Cardoso de Morais",
        cargo: "Departamento de Compras",
      },
      {
        img: "../../src/assets/img/page-executiva/dp-pousada.webp",
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
