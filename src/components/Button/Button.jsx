import React from "react"
import { Link } from "react-router-dom"

const Button = ({ url, txtBtn, isTarget }) => {
  return (
    <Link
      to={url}
      className="border-ternary-600 border py-3 px-6 text-ternary-600 uppercase hover:text-secondary-700 hover:border-secondary-700"
      target={isTarget && "_blank"}
      rel="noopener noreferrer"
    >
      {txtBtn}
    </Link>
  )
}

export default Button
