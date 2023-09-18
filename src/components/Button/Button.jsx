import React from "react"

const Button = (props) => {
  return (
    <a
      href={props.url}
      className="border-ternary-600 border py-3 px-6 text-ternary-600 uppercase hover:text-secondary-700 hover:border-secondary-700"
    >
      {props.txtBtn}
    </a>
  )
}

export default Button
