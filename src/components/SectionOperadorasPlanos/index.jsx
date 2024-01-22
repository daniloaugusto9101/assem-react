import TitleSimple from "../TitleSimple"
import ButtonV2 from "../ButtonV2/Button"
import urlPdf from "@assets/file/catalago-operadoras.pdf"
import LogoOperadoras from "./LogoOperadoras"

const SectionOperadorasPlanos = () => {
  return (
    <div className="px-2 py-10 bg-ternary-300">
      <TitleSimple title="Operadoras de planos de saúde" />
      <LogoOperadoras />
      <div className="flex justify-center">
        <ButtonV2 txtBtn="Catálogo de Planos" url={urlPdf} />
      </div>
    </div>
  )
}

export default SectionOperadorasPlanos
