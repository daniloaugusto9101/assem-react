import React from "react"
import { AiOutlineCheckSquare } from "react-icons/ai"

const ParagrapList = ({ text }) => {
  return (
    <ul>
      {text.map(({ list }, i) => (
        <li key={i} className="flex items-center gap-2 mb-2">
          <AiOutlineCheckSquare className="text-primary-800 text-2xl flex-none" />
          <span className="sm:text-2xl text-ternary-600">{list}</span>
        </li>
      ))}
    </ul>
  )
}

export default ParagrapList
