import React from "react"
import NavBar from "./navbar/NavBar"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className=" p-2 mt-3 left-0 w-full absolute z-50">
      <div className="container m-auto flex justify-between items-center ">
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
