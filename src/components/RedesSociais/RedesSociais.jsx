import React from "react"
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

const RedesSociais = () => {
  const [ano, setAno] = React.useState(0)

  React.useEffect(() => {
    const data = new Date()
    setAno(data.getFullYear())
  }, [])

  return (
    <section className=" bg-primary-950 text-ternary-50 p-4 flex flex-col items-center text-center gap-1">
      <div className="flex gap-2 text-xl items-center">
        <p>ASSEM |</p>
        <Link
          to={"https://facebook.com/assemsjc"}
          target="_blank"
          className="hover:text-secondary-600 hover:transition-all"
        >
          <FaFacebookSquare />
        </Link>
        <Link
          to={"https://www.instagram.com/assemsjc/"}
          target="_blank"
          className="hover:text-secondary-600 hover:transition-all"
        >
          <FaInstagram />
        </Link>
        <Link
          to={"https://www.youtube.com/@ASSEMdeSJC"}
          target="_blank"
          className="hover:text-secondary-600 hover:transition-all"
        >
          <FaYoutube />
        </Link>
      </div>
      <div className="text-sm">
        {ano} Copyright - Desenvolvido por
        <span className="text-yellow-300 font-bold"> DAP</span>
      </div>
    </section>
  )
}

export default RedesSociais
