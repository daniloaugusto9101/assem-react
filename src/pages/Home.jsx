import Banner from "@components/Banner/Banner"
import SectionNoticias from "@components/SectionNoticias/SectionNoticias"
import SlideAtividades from "@components/SlideAtividades/SlideAtividades"
import SectionLocais from "@components/SectionLocais/SectionLocais"
import SectionAssociar from "@components/SectionAssociar/SectionAssociar"
import SectionConvenioMedico from "@components/SectionConvenioMedico/SectionConvenioMedico"
import SectionClubeDesconto from "@components/SectionClubeDesconto/SectionClubeDesconto"
import SectionAproveiteAgora from "@components/SectionAproveiteAgora/SectionAproveiteAgora"

const Home = () => {
  return (
    <>
      <Banner />
      <SectionNoticias />
      <SectionAssociar />
      <SectionConvenioMedico />
      <SlideAtividades />
      <SectionLocais />
      <SectionClubeDesconto />
      <SectionAproveiteAgora />
    </>
  )
}

export default Home
