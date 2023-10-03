import React from "react"
import HeaderImg from "../components/HeaderImg/HeaderImg"
import SectionDoubleSimple from "../components/SectionDoubleSimple"
import SectionOperadorasPlanos from "../components/SectionOperadorasPlanos"
import TitleSimple from "../components/TitleSimple"
import ParagrapList from "../components/ParagrapList"

const CONVENIO_MEDICO_DATA = [
  {
    img: "https://assem.com.br/wp-content/themes/site-assem/assets/img/page-convenios/banner.webp",
    title: "Convênios Médicos",
    text: "",
    reverse: false,
  },
  {
    img: "../../src/assets/img/page-convenios/convenios3.webp",
    title: "Sobre",
    text: "A ASSEM é especializada em oferecer planos de convênios médicos acessíveis e de qualidade. Com nossos planos, você terá acesso a uma ampla rede de médicos e especialistas, hospitais e clínicas credenciadas. Nossa equipe está à disposição para ajudá-lo a escolher o plano que melhor atenda às suas necessidades. Invista em sua saúde com a ASSEM. Contato: (12) 3922-7424 - opção 1",
    reverse: false,
  },
  {
    img: "../../src/assets/img/page-convenios/convenios2.webp",
    title: "Portabilidade",
    text: "Portabilidade de convênios médicos é a possibilidade de um beneficiário de plano de saúde trocar de operadora sem perder as suas condições de cobertura e carências já cumpridas. Ou seja, é uma forma de mudar de plano de saúde mantendo as mesmas condições do plano anterior. Consulte o nosso catálago de planos para mais detalhes.",
    reverse: true,
  },
  {
    img: "../../src/assets/img/page-convenios/convenios1.webp",
    title: "Carência",
    text: "Carência de convênios médicos é o período de tempo em que o beneficiário do plano de saúde precisa esperar antes de ter direito a determinados procedimentos ou serviços de saúde previstos no contrato. Em outras palavras, é o tempo de espera que o beneficiário precisa cumprir para utilizar alguns serviços do plano. Consulte o nosso catálago de planos para mais detalhes.",
    reverse: false,
  },
]

const DOCUMETN_LIST = [
  {
    list: "Declaração de Saúde – preenchimento no ato, se informar com antecedência no caso de inclusão de dependentes;",
  },
  {
    list: "Certidão de nascimento para menores de 12 anos;",
  },
  {
    list: "Certidão de nascimento ATUALIZADA para filhos Maiores de 21 anos;",
  },
  {
    list: "Titulo de Eleitor;",
  },
  {
    list: "CPF (de todos os dependentes);",
  },
  {
    list: "RG ou documento de identidade (CRC, CNH, OAB, etc.);",
  },
  {
    list: "Último Comprovante de Pagamento na Empresa;",
  },
  {
    list: "Comprovante de endereço no nome (Água, Energia Elétrica, Gás, Telefone ou Contrato de Locação);",
  },
  {
    list: "Certidão de Casamento ou Declaração de União Estável (registrada em Cartório e com mais de 30 dias);",
  },
  {
    list: "Cartão SUS (obtido na UBS mais próxima da residência).",
  },
]

const ConvenioMedico = () => {
  return (
    <section>
      <HeaderImg
        img={CONVENIO_MEDICO_DATA[0].img}
        title={CONVENIO_MEDICO_DATA[0].title}
        reverse={CONVENIO_MEDICO_DATA[0].reverse}
      />

      <SectionDoubleSimple
        img={CONVENIO_MEDICO_DATA[1].img}
        title={CONVENIO_MEDICO_DATA[1].title}
        text={CONVENIO_MEDICO_DATA[1].text}
        reverse={CONVENIO_MEDICO_DATA[1].reverse}
      />
      <SectionOperadorasPlanos />
      <SectionDoubleSimple
        img={CONVENIO_MEDICO_DATA[2].img}
        title={CONVENIO_MEDICO_DATA[2].title}
        text={CONVENIO_MEDICO_DATA[2].text}
        reverse={CONVENIO_MEDICO_DATA[2].reverse}
      />
      <SectionDoubleSimple
        img={CONVENIO_MEDICO_DATA[3].img}
        title={CONVENIO_MEDICO_DATA[3].title}
        text={CONVENIO_MEDICO_DATA[3].text}
        reverse={CONVENIO_MEDICO_DATA[3].reverse}
      />
      <div className="container m-auto mb-40 px-5 sm-px-0">
        <TitleSimple title="Documentos" />
        <p className="mb-10 text-2xl text-ternary-600 text-center sm:text-left">
          Para a contração de plano de saúde pela ASSEM é necessáio a cópias dos
          documentis abaixo:
        </p>
        <ParagrapList text={DOCUMETN_LIST} />
      </div>
    </section>
  )
}

export default ConvenioMedico
