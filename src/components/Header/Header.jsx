import React from "react"
import Navbar from "../NavBar/Navbar"
import { useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  return (
    <header
      className={`w-full py-4 z-50 top-0 absolute ${
        location.pathname !== "/" && "relative bg-primary-900"
      }`}
    >
      <Navbar />
    </header>
  )
}
export default Header
