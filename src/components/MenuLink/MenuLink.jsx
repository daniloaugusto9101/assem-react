import React from "react"
import { Link } from "react-router-dom"

const MenuLink = (props) => {
  return (
    <Link
      to={props.url}
      className="px-4 py-1 relative transition-all after:content-[''] after:w-0 after:inset-x-0  after:h-1 after:bg-ternary-50 after:absolute after:bottom-0 after:duration-500 after:ease-in-out hover:after:w-full"
    >
      {props.text}
    </Link>
  )
}

export default MenuLink
