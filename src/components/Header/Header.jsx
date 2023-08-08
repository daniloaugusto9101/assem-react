import React from "react"
import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <header className="bg-ternary-900 bg-opacity-30  py-4 left-0 w-full h-screen absolute z-50">
      <div className=" container m-auto flex justify-between items-center">
        <Logo />
        <Navbar />
        <a href="" className="">
          Fique Sócio
        </a>
      </div>
    </header>
  )
}

export default Header
