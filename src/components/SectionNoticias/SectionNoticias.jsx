import React from "react"
import SectionNoticiasDestaque from "./SectionNoticiasDestaque"
import SectionNoticiasSegundaria from "./SectionNoticiasSegundaria"
import { Link } from "react-router-dom"

const SectionNoticias = () => {
  return (
    <section className="max-w-5xl m-auto mb-28">
      <div className="grid gap-4 md:grid-cols-3 px-2 ">
        <SectionNoticiasDestaque />
        <SectionNoticiasSegundaria />
      </div>
      <Link
        to="./blog-noticias"
        className="md:text-right text-2xl block text-secondary-700 mt-10 hover:font-bold"
      >
        Mais notícias...
        {/* {import.meta.env.VITE_BASE_URL} */}
      </Link>
    </section>
  )
}

export default SectionNoticias
