import HeaderImg from "@components/HeaderImg"
import url from "@assets/img/page-atividades/atividades (2).webp"
import sobreData from "@components/AtividadesFisicasData/sobreData"
import PhotoMosaic from "@components/PhotoMosaic"
import imgsAtividades from "@assets/img/page-atividades/"
import imgsProfessores from "@assets/img/professores/"
import PhotoTeachers from "@components/PhotoTeachers/"
import AboutPhysical from "@components/AboutPhysical/"

const Atividades = () => {
  return (
    <section className="mb-40 flex flex-col gap-40">
      <HeaderImg title="Atividades físicas e escolinhas" img={url} />
      <AboutPhysical {...sobreData} />
      <PhotoMosaic img={imgsAtividades} />
      <PhotoTeachers img={imgsProfessores} />
    </section>
  )
}

export default Atividades
