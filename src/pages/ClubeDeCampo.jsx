import TitleSimple from "@components/TitleSimple"
import SlideThumbsGallery from "@components/SlideThumbsGallery"
import SectionDoubleSimple from "@components/SectionDoubleSimple"
import ParagrapListIco from "@components/ParagrapListIco"
import CLUB_LIST from "@components/ClubList/ClubList"
import CLUBE_LIST_IMG from "@components/ClubListImg/"
import * as url from "@assets/img/page-clube/"

const CLUBE_DATA = [
  {
    img: url.img30,
    title: "",
    text: "O Clube de Campo da ASSEM é um clube que se preocupa em oferecer uma estrutura voltada ao lazer e à qualidade de vida, sempre preservando o meio ambiente e priorizando o bom convívio social.A estrutura do clube serve aos seus associados também por meio de locações, para eventos festivos, esportivos e sociais.",
    reverse: false,
  },
]

const ClubeDeCampo = () => {
  return (
    <section>
      <header className="my-20">
        <TitleSimple title="Clube de campo" />
      </header>
      <main className="mb-40 flex flex-col gap-40">
        <SlideThumbsGallery imagensData={CLUBE_LIST_IMG} />
        <SectionDoubleSimple
          img={CLUBE_DATA[0].img}
          text={CLUBE_DATA[0].text}
        />
        <ParagrapListIco paragrapList={CLUB_LIST} />
      </main>
    </section>
  )
}

export default ClubeDeCampo
