import React from "react"
import TitleText from "../TitleText/TitleText"
import { useInView } from "react-intersection-observer"

const SectionAproveiteAgora = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento entrar na viewport
    threshold: 0.1, // Define o limite de visibilidade (0 a 1)
  })
  return (
    <section
      ref={ref}
      className={`${
        inView && "animate-slide-toBottom"
      } container mb-44 m-auto flex flex-col justify-center items-center gap-4  opacity-0`}
    >
      <TitleText title="Aproveite agora" />
      <a
        href="/fique-socio"
        className="bg-secondary-700 hover:bg-secondary-900 text-ternary-50 px-8 py-3 uppercase"
      >
        Fique sócio
      </a>
    </section>
  )
}

export default SectionAproveiteAgora
