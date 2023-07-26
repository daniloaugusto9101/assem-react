import React from "react"
import { FaArrowDown } from "react-icons/fa"

const NavBar = () => {
  return (
    <nav className="mt-3">
      <ul className="flex gap-12 text-2xl text-primary-50 ">
        <li className="cursor-pointer">Inicio</li>
        <li className="cursor-pointer">Notícias</li>
        <li className="cursor-pointer flex items-center">
          ASSEM
          <FaArrowDown className="text-sm" />
        </li>
        <li className="cursor-pointer">Contato</li>
      </ul>
    </nav>
  )
}

export default NavBar
