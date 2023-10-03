import React from "react"
import TitleSimple from "../TitleSimple"
import ButtonV2 from "../ButtonV2/Button"

const SectionOperadorasPlanos = () => {
  const OPERADORAS_LIST = [
    {
      url: "../../src/assets/img/page-convenios/logo-aussel.webp",
    },
    {
      url: "../../src/assets/img/page-convenios/logo-emercor.webp",
    },
    {
      url: "../../src/assets/img/page-convenios/logo-policlin.webp",
    },
    {
      url: "../../src/assets/img/page-convenios/logo-santa-casa.webp",
    },
    {
      url: "../../src/assets/img/page-convenios/logo-unimed.webp",
    },
  ]

  return (
    <div className="px-2 py-10 mb-40 bg-ternary-300">
      <TitleSimple title="Operadoras de planos de sáude" />
      <div className="mb-20 grid grid-cols-saude gap-3 auto-rows-[_100px]">
        {OPERADORAS_LIST.map(({ url }, i) => (
          <div key={i} className="bg-ternary-50 shadow-md p-2 ">
            <img src={url} className="block w-full h-full object-contain" />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <ButtonV2
          txtBtn="Catálago de Planos"
          url="../../src/assets/file/catalago-operadoras.pdf"
        />
      </div>
    </div>
  )
}

export default SectionOperadorasPlanos
