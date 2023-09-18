import React from "react"
import logo from "../../assets/img/logo-branco-sm.png"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className=" p-1 w-14 ">
      <Link to={"/"}>
        <img className="block" src={logo} alt="Logo da ASSEM" />
      </Link>
    </div>
  )
}

export default Logo
