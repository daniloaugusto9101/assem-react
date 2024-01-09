import React from "react"
import Icons from "@components/Icons"
import ParceriosData from "./ParceriosData"
import { GlobalParceiros } from "@/storage/GlobalParceiros"

const ParceirosMenu = () => {
  const { isCategory, setIsCategory } = React.useContext(GlobalParceiros)
  const handleClick = ({ target }) => {
    setIsCategory(target.innerText)
  }
  return (
    <div className="flex flex-col gap-10 ">
      {ParceriosData.map(({ categoria, ico }, i) => (
        <div
          key={i}
          className="flex items-center gap-3 text-2xl text-ternary-200 cursor-pointer"
        >
          <Icons nomeDoIcone={ico} />
          <span className="hidden sm:block text-base" onClick={handleClick}>
            {categoria}
          </span>
        </div>
      ))}
    </div>
  )
}

export default ParceirosMenu
