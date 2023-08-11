import React from "react"
import Banner from "../components/Banner/Banner"
// import BannerNoticias from "../components/BannerNoticias/BannerNoticias"
import SlideAtividades from "../components/SlideAtividades/SlideAtividades"
import SectionLocais from "../components/SectionLocais/SectionLocais"
import SectionAssociar from "../components/SectionAssociar/SectionAssociar"
import SectionConvenioMedico from "../components/SectionConvenioMedico/SectionConvenioMedico"
import SectionClubeDesconto from "../components/SectionClubeDesconto/SectionClubeDesconto"

const Home = () => {
  return (
    <>
      <Banner />
      {/* <BannerNoticias /> */}
      <SectionAssociar />
      <SectionConvenioMedico />
      <SlideAtividades />
      <SectionLocais />
      <SectionClubeDesconto />
    </>
  )
}

export default Home
