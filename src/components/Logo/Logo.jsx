import React from "react"
import logo from "../../assets/logo-branco-sm.png"

const Logo = () => {
  return (
    <div className=" p-1 w-14 animate-slide-left">
      <img className="block" src={logo} alt="Logo da ASSEM" />
    </div>
  )
}

export default Logo
