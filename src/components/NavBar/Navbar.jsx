import React from "react"
import Logo from "../Logo/Logo"
import MenuModal from "../MenuModal/MenuModal"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = () => {
  const [modal, setModal] = React.useState(false)

  return (
    <nav className="container m-auto flex justify-between items-center font-thin text-2xl text-ternary-50 px-2 animate-slide-top">
      <Logo />
      <ul className="hidden sm:flex gap-12 ">
        {/* <li className="cursor-pointer">Inicio</li> */}
        <li className="cursor-pointer">
          <Link to="/noticias">Notícias</Link>
        </li>
        <li className="cursor-pointer relative">
          ASSEM
          <MenuModal />
        </li>
        <li className="cursor-pointer">
          <Link to="/contatos">Contato</Link>
        </li>
      </ul>
      <Link to="/fique-socio" className="hidden sm:block">
        Fique Sócio
      </Link>

      <GiHamburgerMenu className=" sm:hidden text-4xl cursor-pointer " />
    </nav>
  )
}

export default NavBar
