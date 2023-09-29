import React from "react"
import TitleText from "../components/TitleText/TitleText"
import SectionDoubleXadrez from "../components/SectionDoubleXadrez/SectionDoubleXadrez"

const NossaHistoria = () => {
  const nossaHistoriaList = [
    {
      ano: "1979",
      text: "Nasce a ASSEM. A Sede Social passa a operar numa sala comercial, no Vip Center, região central de São José dos Campos.",
      img: "../../src/assets/img/page-historia/historia_1979.webp",
    },
    {
      ano: "1980",
      text: "Durante os próximos 14 anos, a Sede Social da ASSEM funcionou em sala improvisada, no piso térreo do Paço.",
      img: "../../src/assets/img/page-historia/historia_1980.webp",
    },
    {
      ano: "1980/1985",
      text: "Começa a funcionar o primeiro clube de campo (junto a área do seminário, na Av. São João).",
      img: "../../src/assets/img/page-historia/historia_1985.webp",
    },
    {
      ano: "1986",
      text: "A Prefeitura adquire o Clube de Campo, no Bom Retiro e cede o imóvel para a ASSEM.",
      img: "../../src/assets/img/page-historia/historia_1986.webp",
    },
    {
      ano: "1994",
      text: "A Sede muda de endereço e vai para um prédio em frente ao Paço Municipal.",
      img: "../../src/assets/img/page-historia/historia_1994.webp",
    },
    {
      ano: "1995",
      text: "Sede própria é comprada na Rua Conselheiro Rodrigues Alves, nº 190, na Vila Santa Luzia.",
      img: "../../src/assets/img/page-historia/historia_1995.webp",
    },
    {
      ano: "1996",
      text: "Nova Sede Social é inaugurada, e dá início a projetos de expansão em seus setores.",
      img: "../../src/assets/img/page-historia/historia_1996.webp",
    },
    {
      ano: "2006",
      text: "ASSEM adquire uma pousada, em Caraguatatuba, no Litoral Norte de SP.",
      img: "../../src/assets/img/page-historia/historia_2006.webp",
    },
    {
      ano: "2013",
      text: "Início das reformas na Sede Social da ASSEM e ampliação de área.",
      img: "../../src/assets/img/page-historia/historia_2013.webp",
    },
    {
      ano: "2014",
      text: "Aquisição de bens e oferta de mais serviços aos associados, como a compra de TVs de 32” em LED para os quartos da Pousada ASSEM Litoral e reforma e ampliação na Sede Social são concluídas, resultando em uma academia com 3 ambientes para os seus associados.",
      img: "../../src/assets/img/page-historia/historia_2014.webp",
    },
    {
      ano: "2015",
      text: "Sede Social ganhou sistema de videomonitoramento e catracas para controle de acesso e mais segurança. O Clube de Campo ganhou toboágua e escorregador para mais diversão do associado nas piscinas do clube",
      img: "../../src/assets/img/page-historia/historia_2015.webp",
    },
  ]

  return (
    <section className="container m-auto my-10 p-2">
      <TitleText title="Nossa História" />

      <div className="mt-10 mb-28 text-xl md:text-2xl text-center text-ternary-600">
        <p className="mb-5">
          Era março de 1979, dia 23, quando um grupo de servidores idealizou um
          lugar que promovesse a integração da categoria, onde pudessem se
          beneficiar de produtos e serviços, como lazer, saúde e entreterimento.
        </p>
        <p>
          Nesta data, nascia a ASSEM – a Associação dos Servidores Municipais de
          São José dos Campos, sob a presidência de Israel Cópio Sobrinho. De lá
          para cá, muitos desafios, mas também, muitas conquistas.
        </p>
      </div>
      <SectionDoubleXadrez list={nossaHistoriaList} />
    </section>
  )
}

export default NossaHistoria
