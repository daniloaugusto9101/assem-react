import React from "react"
import Banner1 from "../../../assets/bannerNoticias/banner1.webp"

const NoticiasDataDestaque = [
  {
    src: "/src/assets/bannerNoticias/banner1.webp",
    title: "Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde",
  },
]
const NoticiasDataSegundario = [
  {
    src: "/src/assets/bannerNoticias/banner1.webp",
    title: "Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde",
  },
  {
    src: "/src/assets/bannerNoticias/banner1.webp",
    title: "Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde",
  },
  {
    src: "/src/assets/bannerNoticias/banner1.webp",
    title: "Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde",
  },
  {
    src: "/src/assets/bannerNoticias/banner1.webp",
    title: "Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde",
  },
  {
    src: "/src/assets/bannerNoticias/banner1.webp",
    title: "Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde",
  },
  {
    src: "/src/assets/bannerNoticias/banner1.webp",
    title: "Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde",
  },
]

const BannerNoticias = () => {
  return (
    <section className="grid gap-2 md:grid-cols-3 max-w-5xl m-auto">
      <div className="bg-ternary-200 mb-3 md:mb-0 md:row-span-2 md:col-span-2">
        <a href="">
          <img src="/src/assets/bannerNoticias/banner1.webp" />
          <h2 className="text-3xl p-1 text-primary-900">
            Comunicado oficial da Assem asd sobre o convênio HAPVIDA Saúde pela
            assem asdas
          </h2>
        </a>
      </div>
      <div className="bg-ternary-200">
        <a href="" className="grid grid-cols-2 items-center md:grid-cols-none">
          <img src="/src/assets/bannerNoticias/banner1.webp" />
          <h2 className="p-2 text-primary-900">
            Comunicado oficial da Assem asd sobre o convênio HAPVIDA Saúde pela
            assem asdas
          </h2>
        </a>
      </div>
      <div className="bg-ternary-200">
        <a href="" className="grid grid-cols-2 items-center md:grid-cols-none">
          <img src="/src/assets/bannerNoticias/banner3.webp" />
          <h2 className="p-2 text-primary-900">
            Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde
          </h2>
        </a>
      </div>
      <div className="bg-ternary-200">
        <a href="" className="grid grid-cols-2 items-center md:grid-cols-none">
          <img src="/src/assets/bannerNoticias/banner1.webp" />
          <h2 className="p-2 text-primary-900">
            Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde
          </h2>
        </a>
      </div>
      <div className="bg-ternary-200">
        <a href="" className="grid grid-cols-2 items-center md:grid-cols-none">
          <img src="/src/assets/bannerNoticias/banner3.webp" />
          <h2 className="p-2 text-primary-900">
            Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde
          </h2>
        </a>
      </div>
      <div className="bg-ternary-200">
        <a href="" className="grid grid-cols-2 items-center md:grid-cols-none">
          <img src="/src/assets/bannerNoticias/banner1.webp" />
          <h2 className="p-2 text-primary-900">
            Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde
          </h2>
        </a>
      </div>
    </section>
  )
}

export default BannerNoticias
