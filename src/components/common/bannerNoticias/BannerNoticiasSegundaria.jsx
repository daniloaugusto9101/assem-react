import React from "react"

const NoticiasDataSegundaria = [
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

const BannerNoticiasSegundaria = () => {
  return (
    <>
      {NoticiasDataSegundaria.map((obj, index) => (
        <div className="bg-ternary-200" key={index}>
          <a
            href=""
            className="grid grid-cols-2 items-center md:grid-cols-none"
          >
            <img src={obj.src} />
            <h2 className="p-2 text-primary-900">{obj.title}</h2>
          </a>
        </div>
      ))}
    </>
  )
}

export default BannerNoticiasSegundaria
