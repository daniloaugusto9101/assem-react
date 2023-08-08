import React from "react"
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"

function getAnoAtual() {
  const dataAtual = new Date()
  const ano = dataAtual.getFullYear()
  return ano
}

const RedesSociaais = () => {
  const anoAtual = getAnoAtual()
  return (
    <section className=" bg-primary-950 text-ternary-50 p-4 flex flex-col items-center text-center gap-1">
      <div className="flex gap-2 text-xl items-center">
        <p>ASSEM |</p>
        <FaFacebookSquare />
        <FaInstagram />
        <FaYoutube />
      </div>
      <div className="text-sm">
        {anoAtual} Copyright - Desenvolvido por{" "}
        <span className="text-yellow-300 font-bold">DAP</span>
      </div>
    </section>
  )
}

export default RedesSociaais
