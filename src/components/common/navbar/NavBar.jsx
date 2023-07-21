import React from "react"
import { Link } from "react-router-dom"
import { MenuData } from "./MenuData"

const NavBar = () => {
  return (
    <nav className="bg-ternary-100 animate-slide-right sticky">
      <ul className="flex">
        {MenuData.map((item, index) => {
          return (
            <li
              key={index}
              className="last:bg-secondary-700 last:text-ternary-50"
            >
              <Link className=" py-4 px-8 block " to={item.url}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar
