import React from "react"
import Logo from "../Logo/Logo"

const NavBar = () => {
  return (
    <nav className="container m-auto flex justify-between items-center font-thin text-2xl text-ternary-50">
      <Logo />
      <ul className="flex gap-12">
        {/* <li className="cursor-pointer">Inicio</li> */}
        <li className="cursor-pointer">Notícias</li>
        <li className="cursor-pointer flex items-center">ASSEM</li>
        <li className="cursor-pointer">Contato</li>
      </ul>
      <a href="" className="">
        Fique Sócio
      </a>
    </nav>
  )
}

export default NavBar
