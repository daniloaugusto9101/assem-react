import React from "react"
import { Link } from "react-router-dom"

const itensMenu = {}

const NavBar = () => {
  return (
    <nav className="bg-ternary-100 animate-slide-right">
      <ul className="flex">
        <li>
          <Link className=" py-4 px-8 block" to="/">
            Início
          </Link>
        </li>
        <li>
          <Link className=" py-4 px-8 block" to="/noticias">
            Notícias
          </Link>
        </li>
        <li>
          <Link className=" py-4 px-8 block" to="/">
            ASSEM
          </Link>
        </li>
        <li>
          <Link className=" py-4 px-8 block" to="/contatos">
            Contatos
          </Link>
        </li>
        <li>
          <Link
            className="bg-secondary-700 text-ternary-50 py-4 px-8 block"
            to="/fique-socio"
          >
            Fique Sócio
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
