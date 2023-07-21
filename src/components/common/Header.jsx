import React from "react"
import NavBar from "./NavBar"

const Header = () => {
  return (
    <header className="bg-primary-500 text-secondary-950 p-4">
      <div className="bg- container m-auto flex justify-between items-center animate-slide-top">
        <p>Logo</p>
        <NavBar />
      </div>
    </header>
  )
}

export default Header
