import Button from "../Button/Button"
import SlideCoverflow from "../SlideCoverflow/SlideCoverflow"
import TitleText from "../TitleText/TitleText"
import { useInView } from "react-intersection-observer"

const SlideAtividades = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento entrar na viewport
    threshold: 0.0, // Define o limite de visibilidade (0 a 1)
  })
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
    <div
      ref={ref}
      className={`
      mb-44 flex flex-col justify-center items-center gap-y-10 animate-slide-toBottom opacity-0 ${
        inView && "animate-slide-toLeft"
      }`}
    >
      <div className=" max-w-xl">
        <TitleText title="Temos diversas atividades físicas e escolinhas" />
      </div>
      <SlideCoverflow imagensData={imagensData} />
      <Button url="/atividades-fisicas" txtBtn="Saiba mais" />
    </div>
  )
}

export default SlideAtividades
