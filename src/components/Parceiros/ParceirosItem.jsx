import React from "react"
import Icons from "@components/Icons"
import parceirosData from "./ParceriosData"
import { GlobalParceiros } from "@/storage/GlobalParceiros"

const ParceirosItem = () => {
  const { isCategory, setIsCategory } = React.useContext(GlobalParceiros)
  const segurosData = parceirosData.find((obj) => obj.categoria === isCategory)

  const renderSocialLink = (url, icon) => {
    return (
      <a
        href={url}
        target="_blank"
        className={`pointer-events-none text-ternary-500 ${
          url && "pointer-events-auto text-ternary-950 hover:text-secondary-700"
        }`}
      >
        <Icons nomeDoIcone={icon} />
      </a>
    )
  }

  const renderEmpresas = () => {
    return segurosData?.empresas.map((empresa, i) => (
      <div
        key={i}
        className="bg-ternary-50 border-l-4 border-l-primary-900 p-2 flex flex-col gap-1 shadow-md rounded-md"
      >
        <h2 className="font-bold text-primary-900 uppercase">{empresa.nome}</h2>
        <p>{empresa.descricao}</p>
        <p>{empresa.telefone}</p>
        <p>{empresa.endereco}</p>
        <div className="flex gap-2 text-xl">
          {renderSocialLink(empresa.facebook, "FaSquareFacebook")}
          {renderSocialLink(empresa.instagram, "FaSquareInstagram")}
          {renderSocialLink(empresa.site, "FaGlobe")}
        </div>
      </div>
    ))
  }

  return <>{renderEmpresas()}</>
}

export default ParceirosItem
