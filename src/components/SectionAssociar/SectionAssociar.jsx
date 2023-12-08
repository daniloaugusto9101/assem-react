import SectionDouble from "../SectionDouble/SectionDouble"
import imgAssociar from "@assets/img/sectionAssociar/associar.webp"

const ASSOCIAR_DATA = {
  title: "Por que me associar?",
  text: "Junte-se a nós, como associado, você terá acesso a uma variedade de atividades e eventos emocionantes, ter experiência e diversão com nossa Pousada e Clube de Campo. Não perca mais tempo, torne-se um associado hoje mesmo",
  txtBtn: "Saiba mais",
  img: imgAssociar,
  reserve: false,
  url: "/fique-socio",
}

const SectionAssociar = () => {
  return <SectionDouble {...ASSOCIAR_DATA} />
}

export default SectionAssociar
