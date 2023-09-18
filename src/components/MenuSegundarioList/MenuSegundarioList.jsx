import React from "react"

const MENU_SEGUNDARIO_DATA = [
  {
    title: "Notícias",
    link: "/noticias",
    dropDown: [
      {
        title: "Notícias",
        link: "/noticias",
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
        link: "/diretoria-executiva",
        dropDown: [],
      },
      {
        title: "Conselho Fiscal",
        link: "/conselho-fiscal",
        dropDown: [],
      },
      {
        title: "Conselho Deliberativo",
        link: "/conselho-deliberativo",
        dropDown: [],
      },
      {
        title: "Nossa história",
        link: "/nossa-historia",
        dropDown: [],
      },
      {
        title: "Estatuto",
        link: "/estatuto",
        dropDown: [],
      },
    ],
  },
  {
    title: "Associado",
    link: "/associado",
    dropDown: [
      {
        title: "Convênio Médico",
        link: "/convenio-medico",
        dropDown: [],
      },
      {
        title: "Clube de Campo",
        link: "/clube-de-campo",
        dropDown: [],
      },
      {
        title: "Pousada Litoral",
        link: "/pousada-litoral",
        dropDown: [],
      },
      {
        title: "Atividades Físicas",
        link: "/atividades-fisicas",
        dropDown: [],
      },
      {
        title: "Clube de Desconto",
        link: "/clube-de-desconto",
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
        link: "/contatos",
        dropDown: [],
      },
      {
        title: "Clube de Campo",
        link: "/contatos",
        dropDown: [],
      },
      {
        title: "Pousada Litoral",
        link: "/contatos",
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
