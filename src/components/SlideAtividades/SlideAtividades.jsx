import Button from "../Button/Button"
import SlideCoverflow from "../SlideCoverflow/SlideCoverflow"
import TitleText from "../TitleText/TitleText"

const SlideAtividades = () => {
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
  return (
    <div className="mb-44 flex flex-col justify-center items-center gap-y-10">
      <div className=" max-w-xl">
        <TitleText title="Temos diversas atividades físicas e escolinhas" />
      </div>
      <SlideCoverflow imagensData={imagensData} />
      <Button url="/atividades-fisicas" txtBtn="Saiba mais" />
    </div>
  )
}

export default SlideAtividades
