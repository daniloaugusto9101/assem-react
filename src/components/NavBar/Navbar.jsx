import React from "react"
import Logo from "../Logo/Logo"
import { useLocation } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import MenuLink from "../MenuLink/MenuLink"
import MenuModal from "@components/MenuModal/"
import { GlobalContext } from "@/storage/GlobalContext"

const NavBar = () => {
  const [menuInicio, setMenuInicio] = React.useState(false)
  const location = useLocation()

  function handleMenuInicio() {
    location.pathname === "/" ? setMenuInicio(false) : setMenuInicio(true)
  }

  React.useEffect(() => {
    handleMenuInicio()
  }, [location.pathname])

  const { isModal, setModal } = React.useContext(GlobalContext)
  return (
    <nav className="container m-auto flex justify-between items-center font-thin text-2xl text-ternary-50 px-2">
      <Logo />
      <ul className="hidden md:flex gap-12 ">
        {menuInicio && <MenuLink text="Home" url="/assem-react/" />}
        <MenuLink text="Notícias" url="/assem-react/blog-noticias" />
        {/* <MenuLink text="ASSEM" url={location.pathname} /> */}
        <MenuLink text="Contatos" url="/assem-react/contatos" />
        <MenuLink text="Fique Sócio" url="/assem-react/fique-socio" />
      </ul>
      <GiHamburgerMenu
        className={` text-4xl cursor-pointer `}
        onClick={() => setModal(!isModal)}
      />
      {isModal && <MenuModal />}
    </nav>
  )
}

export default NavBar
