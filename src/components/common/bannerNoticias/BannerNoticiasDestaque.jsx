import React from "react"
const NoticiasDataDestaque = [
  {
    src: "/src/assets/bannerNoticias/banner3.webp",
    title: "Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde",
  },
  {
    src: "/src/assets/bannerNoticias/banner3.webp",
    title: "Comunicado oficial da Assem sobre o convênio HAPVIDA Saúde",
  },
]

const BannerNoticiasDestaque = () => {
  return (
    <div className="bg-ternary-200 mb-3 md:mb-0 md:row-span-2 md:col-span-2">
      <a href="">
        <img src={NoticiasDataDestaque[0].src} />
        <h2 className="text-3xl p-1 text-primary-900">
          {NoticiasDataDestaque[0].title}
        </h2>
      </a>
    </div>
  )
}

export default BannerNoticiasDestaque
