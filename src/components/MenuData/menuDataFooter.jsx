import estatuto from "@assets/file/estatuto.pdf"

const menuDataFooter = [
  {
    title: "Notícias",
    link: "/",
    dropDown: [
      {
        title: "Notícias",
        link: "/assem-react/blog-noticias",
        dropDown: [],
        isTarget: false,
      },
    ],
  },
  {
    title: "Institucional",
    link: "/",
    dropDown: [
      {
        title: "Diretoria Executiva",
        link: "/assem-react/diretoria-executiva",
        dropDown: [],
        isTarget: false,
      },
      {
        title: "Conselho Fiscal",
        link: "/assem-react/conselho-fiscal",
        dropDown: [],
        isTarget: false,
      },
      {
        title: "Conselho Deliberativo",
        link: "/assem-react/conselho-deliberativo",
        dropDown: [],
        isTarget: false,
      },
      {
        title: "Nossa história",
        link: "/assem-react/nossa-historia",
        dropDown: [],
        isTarget: false,
      },
      {
        title: "Estatuto",
        link: estatuto,
        dropDown: [],
        isTarget: true,
      },
    ],
  },
  {
    title: "Associado",
    link: "/",
    dropDown: [
      {
        title: "Convênio Médico",
        link: "/assem-react/convenio-medico",
        dropDown: [],
      },
      {
        title: "Clube de Campo",
        link: "/assem-react/clube-de-campo",
        dropDown: [],
        isTarget: false,
      },
      {
        title: "Pousada Litoral",
        link: "/assem-react/pousada-litoral",
        dropDown: [],
        isTarget: false,
      },
      {
        title: "Atividades Físicas",
        link: "/assem-react/atividades-fisicas",
        dropDown: [],
        isTarget: false,
      },
      {
        title: "Clube de Desconto",
        link: "/assem-react/clube-de-desconto",
        dropDown: [],
        isTarget: false,
      },
    ],
  },
  {
    title: "Contatos",
    link: "/contatos",
    dropDown: [
      {
        title: "Sede",
        link: "/assem-react/contatos",
        dropDown: [],
        isTarget: false,
      },
      {
        title: "Clube de Campo",
        link: "/assem-react/contatos",
        dropDown: [],
        isTarget: false,
      },
      {
        title: "Pousada Litoral",
        link: "/assem-react/contatos",
        dropDown: [],
        isTarget: false,
      },
    ],
  },
]

export default menuDataFooter
