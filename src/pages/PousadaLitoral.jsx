import React from "react"
import TitleSimple from "@components/TitleSimple"
import SlideThumbsGallery from "@components/SlideThumbsGallery"
import POUSADA_LIST_IMG from "@components/PousadaListImg/"
import POUSADA_LIST_PARAGRAPH from "@components/PousadaListParagraph/"
import ParagrapListIco from "@components/ParagrapListIco"
import AboutPousada from "../components/AboutPousada/"

const Pousada = () => {
  return (
    <section>
      <header className="my-20">
        <TitleSimple title="Pousada" />
      </header>
      <main className="mb-40 flex flex-col gap-40">
        <SlideThumbsGallery imagensData={POUSADA_LIST_IMG} />
        <AboutPousada />
        <ParagrapListIco paragrapList={POUSADA_LIST_PARAGRAPH} />
      </main>
    </section>
  )
}

export default Pousada
