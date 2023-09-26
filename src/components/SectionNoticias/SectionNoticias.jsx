import React from "react"
import SectionNoticiasDestaque from "./SectionNoticiasDestaque"
import SectionNoticiasSegundaria from "./SectionNoticiasSegundaria"
import { Link } from "react-router-dom"

const SectionNoticias = () => {
  return (
    <section className="max-w-5xl m-auto mb-44">
      <div className="grid gap-2 md:grid-cols-3 ">
        <SectionNoticiasDestaque />
        <SectionNoticiasSegundaria />
      </div>
      <Link
        to="/noticias"
        className="md:text-right text-2xl block text-secondary-700 mt-10 hover:font-bold"
      >
        Mais notícias...
      </Link>
    </section>
  )
}

export default SectionNoticias
