import Button from "../Button/Button"
import SlideCoverflow from "../SlideCoverflow/SlideCoverflow"
import TitleText from "../TitleText/TitleText"
import { useInView } from "react-intersection-observer"
import * as url from "@assets/img/slideAtividades/"

const SlideAtividades = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez quando o elemento entrar na viewport
    threshold: 0.0, // Define o limite de visibilidade (0 a 1)
  })
  const imagensData = [
    {
      url: url.img1,
    },
    {
      url: url.img2,
    },
    {
      url: url.img3,
    },
    {
      url: url.img4,
    },
    {
      url: url.img5,
    },
    {
      url: url.img6,
    },
    {
      url: url.img7,
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
