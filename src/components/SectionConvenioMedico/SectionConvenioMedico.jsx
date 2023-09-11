import React from "react"
import SectionDuplo from "../SectionDuplo/SectionDuplo"
import imgConvenio from "../../assets/img/sectionConvenioMedico/convenio2.webp"

const CONVENIO_DATA = {
  title: "Convênios médicos",
  text: "Você está preocupado com a sua saúde da sua família? Quer ter acesso a uma ampla rede de médicos e hospitais? Associado tem acesso a diversos planos com preços que se adapta às suas necessidades",
  txtBtn: "Saiba mais",
  img: imgConvenio,
  reserve: true,
}

const SectionConvenioMedico = () => {
  return (
    <SectionDuplo
      title={CONVENIO_DATA.title}
      text={CONVENIO_DATA.text}
      txtBtn={CONVENIO_DATA.txtBtn}
      img={CONVENIO_DATA.img}
      reserve={CONVENIO_DATA.reserve}
    />
  )
}

export default SectionConvenioMedico
