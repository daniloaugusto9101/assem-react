import React from "react"
import HeaderImg from "@components/HeaderImg/HeaderImg"
import SectionDoubleSimple from "@components/SectionDoubleSimple"
import SectionOperadorasPlanos from "@components/SectionOperadorasPlanos"
import TitleSimple from "@components/TitleSimple"
import ParagrapList from "@components/ParagrapList"
import * as urlImg from "@/assets/img/page-convenios"

const CONVENIO_MEDICO_DATA = [
  {
    img: urlImg.img6,
    title: "Convênios Médicos",
    text: "",
    reverse: false,
  },
  {
    img: urlImg.img9,
    title: "Sobre",
    text: "A ASSEM é especializada em oferecer planos de convênios médicos acessíveis e de qualidade. Com nossos planos, você terá acesso a uma ampla rede de médicos e especialistas, hospitais e clínicas credenciadas. Nossa equipe está à disposição para ajudá-lo a escolher o plano que melhor atenda às suas necessidades. Invista em sua saúde com a ASSEM. Contato: (12) 3922-7424 - opção 1",
    reverse: false,
  },
  {
    img: urlImg.img8,
    title: "Portabilidade",
    text: "Portabilidade de convênios médicos é a possibilidade de um beneficiário de plano de saúde trocar de operadora sem perder as suas condições de cobertura e carências já cumpridas. Ou seja, é uma forma de mudar de plano de saúde mantendo as mesmas condições do plano anterior. Consulte o nosso catálogo de planos para mais detalhes.",
    reverse: true,
  },
  {
    img: urlImg.img7,
    title: "Carência",
    text: "Carência de convênios médicos é o período de tempo em que o beneficiário do plano de saúde precisa esperar antes de ter direito a determinados procedimentos ou serviços de saúde previstos no contrato. Em outras palavras, é o tempo de espera que o beneficiário precisa cumprir para utilizar alguns serviços do plano. Consulte o nosso catálogo de planos para mais detalhes.",
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
    <section className="mb-40 flex flex-col gap-40">
      <HeaderImg {...CONVENIO_MEDICO_DATA[0]} />
      <SectionDoubleSimple {...CONVENIO_MEDICO_DATA[1]} />
      <SectionOperadorasPlanos />
      <SectionDoubleSimple {...CONVENIO_MEDICO_DATA[2]} />
      <SectionDoubleSimple {...CONVENIO_MEDICO_DATA[3]} />
      <div className="container m-auto px-5 sm-px-0">
        <TitleSimple title="Documentos" />
        <p className="mb-10 text-2xl text-ternary-600 text-center sm:text-left">
          Para a contração de plano de saúde pela ASSEM é necessário a cópias
          dos documentos abaixo:
        </p>
        <ParagrapList text={DOCUMETN_LIST} />
      </div>
    </section>
  )
}

export default ConvenioMedico
