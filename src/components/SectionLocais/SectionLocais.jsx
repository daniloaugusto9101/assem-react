import React from "react"
import { useInView } from "react-intersection-observer"
import impSede from "@assets/img/sectionLocais/sede.webp"
import impPousada from "@assets/img/sectionLocais/pousada.webp"
import impClube from "@assets/img/sectionLocais/clube.webp"

const SectionLocais = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento entrar na viewport
    threshold: 0.1, // Define o limite de visibilidade (0 a 1)
  })
  return (
    <section
      ref={ref}
      className={`${inView && "animate-slide-toBottom"} mb-44 opacity-0`}
    >
      <div className="grid bg-secondary-400 -mb-24">
        <div className="h-60 col-span-full row-span-full">
          <img
            className="block w-full h-full object-cover"
            src={impSede}
            alt=""
          />
        </div>
        <div className="bg-primary-950 bg-opacity-90 col-span-full row-span-full"></div>
        <h2 className="col-span-full row-span-full text-5xl text-ternary-50 text-center mt-8">
          Espaço e lazer para toda família
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6  max-w-6xl m-auto px-4 text-ternary-600">
        <div className="mb-32 md:mb-0">
          <img
            className="block w-full h-full object-cover"
            src={impPousada}
            alt=""
          />
          <p className="text-3xl text-center mt-3">Pousada Litoral</p>
        </div>
        <div className="mb-32 md:mb-0">
          <img
            className="block w-full h-full object-cover"
            src={impSede}
            alt=""
          />
          <p className="text-3xl text-center mt-3">Sede</p>
        </div>
        <div className="mb-20 md:mb-0">
          <img
            className="block w-full h-full object-cover"
            src={impClube}
            alt=""
          />
          <p className="text-3xl text-center mt-3">Clube de Campo</p>
        </div>
      </div>
    </section>
  )
}

export default SectionLocais
