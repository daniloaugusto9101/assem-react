import React from "react"
import SectionDoubleText from "./SectionDoubleText"
import SectionDoubleImg from "./SectionDoubleImg"

const SectionDouble = (props) => {
  return (
    <section className="container m-auto p-3 grid md:grid-cols-2 gap-6 mb-44">
      <SectionDoubleImg {...props} />
      <SectionDoubleText {...props} />
    </section>
  )
}

export default SectionDouble
