import React from "react"
import { Link } from "react-router-dom"

const Button = (props) => {
  return (
    <Link
      to={props.url}
      className="border-ternary-600 border py-3 px-6 text-ternary-600 uppercase hover:text-secondary-700 hover:border-secondary-700"
    >
      {props.txtBtn}
    </Link>
  )
}

export default Button
