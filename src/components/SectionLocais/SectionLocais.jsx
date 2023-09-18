import React from "react"

const SectionLocais = () => {
  return (
    <section className="mb-44">
      <div className="grid bg-secondary-400 -mb-24">
        <div className="h-60 col-span-full row-span-full">
          <img
            className="block w-full h-full object-cover"
            src="/src/assets/img/sectionLocais/sede.webp"
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
            src="/src/assets/img/sectionLocais/pousada.webp"
            alt=""
          />
          <p className="text-3xl text-center mt-3">Pousada Litoral</p>
        </div>
        <div className="mb-32 md:mb-0">
          <img
            className="block w-full h-full object-cover"
            src="/src/assets/img/sectionLocais/sede.webp"
            alt=""
          />
          <p className="text-3xl text-center mt-3">Sede</p>
        </div>
        <div className="mb-20 md:mb-0">
          <img
            className="block w-full h-full object-cover"
            src="/src/assets/img/sectionLocais/clube.webp"
            alt=""
          />
          <p className="text-3xl text-center mt-3">Clube de Campo</p>
        </div>
      </div>
    </section>
  )
}

export default SectionLocais
