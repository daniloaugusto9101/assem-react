import React from "react"
import url from "@assets/file/regulamento-pousada.pdf"

const Estatuto = () => {
  return (
    <object
      data={url}
      type="application/pdf"
      className="container h-screen m-auto"
    >
      <p>Você precisa de um visualizador de PDF para ver este documento.</p>
    </object>
  )
}

export default Estatuto
