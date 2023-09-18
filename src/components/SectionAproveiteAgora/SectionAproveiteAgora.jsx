import React from "react"
import TitleText from "../TitleText/TitleText"

const SectionAproveiteAgora = () => {
  return (
    <section className="container mb-44 m-auto flex flex-col justify-center items-center gap-4">
      {/* <h2 className="text-5xl font-bold text-primary-950 text-center">
        Aproveite agora
      </h2> */}
      <TitleText title="Aproveite agora" />
      <a
        href="/fique-socio"
        className="bg-secondary-700 text-ternary-50 px-8 py-3 uppercase"
      >
        Fique sócio
      </a>
    </section>
  )
}

export default SectionAproveiteAgora
