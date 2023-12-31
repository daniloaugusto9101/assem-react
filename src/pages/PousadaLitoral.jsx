import React from "react"
import TitleSimple from "@components/TitleSimple"
import SlideThumbsGallery from "@components/SlideThumbsGallery"
import SectionDoubleSimple from "@components/SectionDoubleSimple"
import POUSADA_LIST_IMG from "@components/PousadaListImg/"
import POUSADA_LIST_PARAGRAPH from "@components/PousadaListParagraph/"
import ParagrapListIco from "@components/ParagrapListIco"
import url from "@assets/img/page-pousada/pousada.webp"

const POUSADA_DATA = [
  {
    img: url,
    title: "",
    text: "Bem-vindo à nossa Pousada! Localizada na Praia do Massaguaçú, ela oferece um refúgio perfeito para quem busca paz, conforto e relaxamento.Com quartos espaçosos e aconchegantes, equipados com todas as comodidades que você precisa para se sentir em casa, nossa pousada é ideal para quem deseja desfrutar de uma estadia confortável e tranquila. Não perca a oportunidade de desfrutar de uma estadia inesquecível em nossa pousada. Entre em contato conosco agora mesmo e faça sua reserva!",
    reverse: false,
  },
]

const Pousada = () => {
  return (
    <section>
      <header className="my-20">
        <TitleSimple title="Pousada" />
      </header>
      <main className="mb-40 flex flex-col gap-40">
        <SlideThumbsGallery imagensData={POUSADA_LIST_IMG} />
        <SectionDoubleSimple
          img={POUSADA_DATA[0].img}
          text={POUSADA_DATA[0].text}
        />
        <ParagrapListIco paragrapList={POUSADA_LIST_PARAGRAPH} />
      </main>
    </section>
  )
}

export default Pousada
