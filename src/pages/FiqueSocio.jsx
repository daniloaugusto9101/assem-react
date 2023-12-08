import React from "react"
import SectionDoubleSimple from "@components/SectionDoubleSimple"
import ParagrapList from "@components/ParagrapList"
import TitleSimple from "@components/TitleSimple"
import CardDouble from "@components/CardDouble"
import CardVideo from "@components/CardVideo"

const FiqueSocio = () => {
  const DATA_FIQUE_SOCIO = [
    {
      img: "../../src/assets/img/page-fique-socio/associar.webp",
      title: "Por que me associar",
      text: "Junte-se a nós, como associado, você terá acesso a uma variedade de atividades e eventos emocionantes, ter experiência e diversão com nossa Pousada e Clube de Campo. Não perca mais tempo, torne-se um associado hoje mesmo.",
      reverse: false,
    },
    {
      img: "../../src/assets/img/page-fique-socio/familia.webp",
      title: "Quem pode ser dependente",
      text: "Cônjuge, pai, mãe, sogro, sogra, filhos solteiros, enteados e netos até 12 anos",
      reverse: true,
    },
  ]

  const DOCUMETN_LIST = [
    {
      list: "Titular: último holerite / senha de consignação (obrigatória para PMSJC ou IPSM) já cadastrada e com margem para descontos | RG e CPF | Comprovante de endereço no próprio nome;",
    },
    {
      list: "Filhos e enteados solteiros: RG e CPF (maiores de 21 anos: certidão de nascimento atualizada);",
    },
    {
      list: "Filhos e enteados universitários solteiros entre 18 a 24 anos devem apresentar declaração escolar;",
    },
    {
      list: "Pai, mãe, sogro, sogra: RG e CPF (em caso de estrangeiros, RGE e CPF);",
    },
    {
      list: "Netos até 12 anos: RG e CPF | Certidão de nascimento;",
    },
    {
      list: "Cônjuge: RG e CPF | Certidão de casamento ou declaração de união estável;",
    },
  ]

  return (
    <section className=" w-full">
      <div className="container m-auto px-2 flex flex-col gap-40 mb-40">
        <CardVideo
          url={"https://www.youtube.com/embed/HKV6pqcdHVw?si=2zO8SOcAN5zYXJa3"}
        />
        <div className="flex flex-col gap-40 ">
          {DATA_FIQUE_SOCIO.map((obj, index) => (
            <SectionDoubleSimple {...obj} key={index} />
          ))}
        </div>
        <CardDouble />
        <div>
          <TitleSimple title="Documentos" />
          <ParagrapList text={DOCUMETN_LIST} />
        </div>
      </div>
    </section>
  )
}

export default FiqueSocio
