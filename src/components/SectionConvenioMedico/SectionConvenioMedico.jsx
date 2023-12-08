import SectionDouble from "../SectionDouble/SectionDouble"
import imgConvenio from "@assets/img/sectionConvenioMedico/convenio2.webp"

const CONVENIO_DATA = {
  title: "Convênios médicos",
  text: "Você está preocupado com a sua saúde da sua família? Quer ter acesso a uma ampla rede de médicos e hospitais? Associado tem acesso a diversos planos com preços que se adapta às suas necessidades",
  txtBtn: "Saiba mais",
  img: imgConvenio,
  reserve: true,
  url: "/convenio-medico",
}

const SectionConvenioMedico = () => {
  return <SectionDouble {...CONVENIO_DATA} />
}

export default SectionConvenioMedico
