import React from "react"
import { Link } from "react-router-dom"
import { MenuData } from "./MenuData"

const NavBar = () => {
  return (
    <nav className="bg-primary-600 animate-slide-right">
      <ul className="flex gap-1">
        <li>
          <a href="" className="bg-ternary-100 block p-3">
            Home
          </a>
        </li>

        <li className="relative group flex items-center p-3">
          <span className="">Cursos</span>

          <ul className="absolute w-48 right-0 top-12 bg-primary-700 hidden group-hover:block animate-slide-right">
            <li>
              <a href="" className="block p-3 hover:bg-secondary-950">
                Excel
              </a>
            </li>
            <li>
              <a href="" className="block p-3 hover:bg-secondary-950">
                Excel
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group flex items-center p-3">
          <span className="">Cursos</span>

          <ul className="absolute w-48 right-0 top-12 bg-primary-700 hidden group-hover:block animate-slide-right">
            <li>
              <a href="" className="block p-3 hover:bg-secondary-950">
                Excel
              </a>
            </li>
            <li>
              <a href="" className="block p-3 hover:bg-secondary-950">
                Excel
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
