import React from "react"
import SectionDuplo from "../SectionDuplo/SectionDuplo"
import imgAssociar from "../../assets/img/sectionAssociar/associar.webp"

const ASSOCIAR_DATA = {
  title: "Por que me associar?",
  text: "Junte-se a nós, como associado, você terá acesso a uma variedade de atividades e eventos emocionantes, ter experiência e diversão com nossa Pousada e Clube de Campo. Não perca mais tempo, torne-se um associado hoje mesmo",
  txtBtn: "Saiba mais",
  img: imgAssociar,
  reserve: false,
}

const SectionAssociar = () => {
  return (
    <SectionDuplo
      title={ASSOCIAR_DATA.title}
      text={ASSOCIAR_DATA.text}
      txtBtn={ASSOCIAR_DATA.txtBtn}
      img={ASSOCIAR_DATA.img}
      reserve={ASSOCIAR_DATA.reserve}
    />
  )
}

export default SectionAssociar
