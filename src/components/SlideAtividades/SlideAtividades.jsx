import React from "react"
import SlideCoverflow from "../SlideCoverflow/SlideCoverflow"

const imagensData = [
  {
    url: "/src/assets/img/slideAtividades/atividade1.webp",
  },
  {
    url: "/src/assets/img/slideAtividades/atividade2.webp",
  },
  {
    url: "/src/assets/img/slideAtividades/atividade3.webp",
  },
  {
    url: "/src/assets/img/slideAtividades/atividade4.webp",
  },
  {
    url: "/src/assets/img/slideAtividades/atividade5.webp",
  },
  {
    url: "/src/assets/img/slideAtividades/atividade6.webp",
  },
  {
    url: "/src/assets/img/slideAtividades/atividade7.webp",
  },
]

const SlideAtividades = () => {
  return <SlideCoverflow imagensData={imagensData} />
}

export default SlideAtividades
