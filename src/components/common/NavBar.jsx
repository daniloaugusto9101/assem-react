import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/noticias">Notícias</Link>
        </li>
        <li>
          <Link to="/">ASSEM</Link>
        </li>
        <li>
          <Link to="/contatos">Contatos</Link>
        </li>
        <li>
          <Link to="/fique-socio">Fique Sócio</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
