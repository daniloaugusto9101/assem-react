import React from "react"
import { AiFillCloseCircle } from "react-icons/ai"

const MENU_DATA = [
  {
    title: "Institucional",
    link: "",
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
  {
    title: "Trabalhe Conosco",
    link: "",
    dropDown: [
      {
        title: "Trabalhe Conosco",
        link: "/trabalhe-Conosco",
        dropDown: [],
      },
    ],
  },
]

const MenuModal = () => {
  return (
    <div className="animate-slide-toLeftModal hidden fixed top-0 left-0 w-full h-full bg-primary-900 z-50 overflow-y-scroll text-ternary-50">
      <AiFillCloseCircle className=" text-5xl absolute right-5 top-5 cursor-pointer" />
      <ul className=" text-center p-20 sm:grid sm:grid-cols-3 sm:text-left ">
        {MENU_DATA.map((obj, index) => (
          <li key={index} className="mb-10">
            <p className="text-xl font-bold uppercase">{obj.title}</p>
            {obj.dropDown.length > 0 ? (
              <ul className="text-lg">
                {obj.dropDown.map((ele, ind) => (
                  <li key={ind} className=" mt-1 sm:my-5 sm:ml-3">
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
