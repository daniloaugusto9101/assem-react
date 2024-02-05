import SectionDoubleSimple from "@components/SectionDoubleSimple"
import Button from "@components/Button/Button"
import urlPdf from "@assets/file/regulamento-pousada.pdf"
import sobreData from "@components/PousadaData/sobreData"

const AboutPhysical = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <SectionDoubleSimple {...sobreData[0]} />
      <Button url={urlPdf} txtBtn="Regulamento pousada" isTarget={true} />
    </div>
  )
}

export default AboutPhysical
