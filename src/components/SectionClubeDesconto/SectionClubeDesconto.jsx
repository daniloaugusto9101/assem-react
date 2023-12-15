import React from "react"
import SectionDouble from "../SectionDouble/SectionDouble"
import imgCompras from "@assets/img/sectionClubeDesconto/compras.webp"

const SectionClubeDesconto = () => {
  const CLUBE_DESCONTO_DATA = {
    title: "Clube de desconto",
    text: "A ASSEM conta com uma rede de parcerias com empresas de diversas áreas, os nossos associados tem acesso a preços e oportunidades especiais. Isto é uma ótima opção para quem busca economizar dinheiro.",
    txtBtn: "Saiba mais",
    img: imgCompras,
    reserve: false,
    url: "./clube-de-desconto",
  }
  return <SectionDouble {...CLUBE_DESCONTO_DATA} />
}

export default SectionClubeDesconto
