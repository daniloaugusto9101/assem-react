import SectionDoubleSimple from "@components/SectionDoubleSimple"
import Button from "@components/Button/Button"
import horarios from "@assets/file/horarios-atividades.pdf"

const AboutPhysical = (props) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <SectionDoubleSimple {...props} />
      <Button url={horarios} txtBtn="Horários" isTarget={true} />
    </div>
  )
}

export default AboutPhysical
