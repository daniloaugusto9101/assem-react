import React from "react"
import { Link } from "react-router-dom"

const ButtonV2 = (props) => {
  return (
    <Link
      to={props.url}
      className="bg-secondary-700 hover:bg-secondary-900 text-ternary-50 px-8 py-3 uppercase"
      target="_blank"
    >
      {props.txtBtn}
    </Link>
  )
}

export default ButtonV2
