import React from "react"
import SlideCoverflow from "../SlideCoverflow/SlideCoverflow"

const imagensData = [
  {
    url: "/src/assets/SlideAtividades/atividade1.webp",
  },
  {
    url: "/src/assets/SlideAtividades/atividade2.webp",
  },
  {
    url: "/src/assets/SlideAtividades/atividade3.webp",
  },
  {
    url: "/src/assets/SlideAtividades/atividade4.webp",
  },
  {
    url: "/src/assets/SlideAtividades/atividade5.webp",
  },
  {
    url: "/src/assets/SlideAtividades/atividade6.webp",
  },
  {
    url: "/src/assets/SlideAtividades/atividade7.webp",
  },
]

const SlideAtividades = () => {
  return <SlideCoverflow imagensData={imagensData} />
}

export default SlideAtividades
