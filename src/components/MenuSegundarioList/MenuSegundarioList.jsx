import React from "react"

const MENU_SEGUNDARIO_DATA = [
  {
    title: "Notícias",
    link: "/",
    dropDown: [
      {
        title: "Notícias",
        link: "/assem-react/blog-noticias",
        dropDown: [],
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
      },
      {
        title: "Conselho Fiscal",
        link: "/assem-react/conselho-fiscal",
        dropDown: [],
      },
      {
        title: "Conselho Deliberativo",
        link: "/assem-react/conselho-deliberativo",
        dropDown: [],
      },
      {
        title: "Nossa história",
        link: "/assem-react/nossa-historia",
        dropDown: [],
      },
      {
        title: "Estatuto",
        link: "/assem-react/estatuto",
        dropDown: [],
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
      },
      {
        title: "Pousada Litoral",
        link: "/assem-react/pousada-litoral",
        dropDown: [],
      },
      {
        title: "Atividades Físicas",
        link: "/assem-react/atividades-fisicas",
        dropDown: [],
      },
      {
        title: "Clube de Desconto",
        link: "/assem-react/clube-de-desconto",
        dropDown: [],
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
      },
      {
        title: "Clube de Campo",
        link: "/assem-react/contatos",
        dropDown: [],
      },
      {
        title: "Pousada Litoral",
        link: "/assem-react/contatos",
        dropDown: [],
      },
    ],
  },
]

const MenuSegundarioList = () => {
  return (
    <section className="bg-primary-900 px-5 py-10 text-ternary-50">
      <ul className="grid gap-y-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center text-center sm:text-left">
        {MENU_SEGUNDARIO_DATA.map((obj, index) => (
          <li key={index} className="">
            <a className="text-xl font-bold uppercase">{obj.title}</a>
            {obj.dropDown.length > 0 ? (
              <ul className="text-sm">
                {obj.dropDown.map((ele, ind) => (
                  <li key={ind} className=" mt-1">
                    <a href={ele.link}>{ele.title}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MenuSegundarioList
