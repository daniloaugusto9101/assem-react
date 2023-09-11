import React from "react"
import SectionDuplo from "../SectionDuplo/SectionDuplo"
import imgCompras from "../../assets/img/sectionClubeDesconto/compras.webp"

const CLUBE_DESCONTO_DATA = {
  title: "Clube de desconto",
  text: "A ASSEM conta com uma rede de parcerias com empresas de diversas áreas, os nossos associados tem acesso a preços e oportunidades especiais. Isto é uma ótima opção para quem busca economizar dinheiro.",
  txtBtn: "Saiba mais",
  img: imgCompras,
  reserve: false,
}

const SectionClubeDesconto = () => {
  return (
    <SectionDuplo
      title={CLUBE_DESCONTO_DATA.title}
      text={CLUBE_DESCONTO_DATA.text}
      txtBtn={CLUBE_DESCONTO_DATA.txtBtn}
      img={CLUBE_DESCONTO_DATA.img}
      reserve={CLUBE_DESCONTO_DATA.reserve}
    />
  )
}

export default SectionClubeDesconto
