import React from "react"
import Banner from "../components/Banner/Banner"
import BannerNoticias from "../components/BannerNoticias/BannerNoticias"
import SectionDuplo from "../components/SectionDuplo/SectionDuplo"
import SlideAtividades from "../components/SlideAtividades/SlideAtividades"
import SectionLocais from "../components/SectionLocais/SectionLocais"
import imgAssociar from "../assets/img/pageHome/associar.webp"
import imgConvenio from "../assets/img/pageHome/convenio2.webp"
import imgCompras from "../assets/img/pageHome/compras.webp"

const Home = () => {
  return (
    <>
      <Banner />
      <BannerNoticias />
      <SectionDuplo
        title="Por que me associar?"
        text="Junte-se a nós, como associado, você terá acesso a uma variedade de atividades e eventos emocionantes, ter experiência e diversão com nossa Pousada e Clube de Campo. Não perca mais tempo, torne-se um associado hoje mesmo"
        txtBtn="Saiba mais"
        img={imgAssociar}
        reserve={false}
      />
      <SectionDuplo
        title="
        Convênios médicos"
        text="
        Você está preocupado com a sua saúde da sua família? Quer ter acesso a uma ampla rede de médicos e hospitais? Associado tem acesso a diversos planos com preços que se adapta às suas necessidades"
        txtBtn="Saiba mais"
        img={imgConvenio}
        reserve={true}
      />
      <SlideAtividades />
      <SectionLocais />
      <SectionDuplo
        title="
        Clube de desconto"
        text="
        A ASSEM conta com uma rede de parcerias com empresas de diversas áreas, os nossos associados tem acesso a preços e oportunidades especiais. Isto é uma ótima opção para quem busca economizar dinheiro."
        txtBtn="Saiba mais"
        img={imgCompras}
        reserve={false}
      />
    </>
  )
}

export default Home
