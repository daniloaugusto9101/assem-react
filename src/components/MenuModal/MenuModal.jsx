import React from "react"

const MENU_DATA = [
  {
    title: "Institucional",
    link: "/institucional",
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
        title: "Clube de Descontos",
        link: "/clube-de-descontos",
        dropDown: [],
      },
    ],
  },
]

const MenuModal = () => {
  return (
    <div className="hidden bg-primary-900 top-20 left-0 right-0">
      <ul className="">
        {MENU_DATA.map((obj, index) => (
          <li key={index} className="">
            <a href={obj.link} className="text-xl font-bold uppercase">
              {obj.title}
            </a>
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
    </div>
  )
}

export default MenuModal
