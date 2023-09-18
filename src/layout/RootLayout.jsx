import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const RootLayout = () => {
  return (
    <>
      <Header />
      {/* INÍCIO - Renderização das páginas */}
      <Outlet className="mt-11" />
      {/* FIM - Renderização das páginas */}
      <Footer />
    </>
  )
}

export default RootLayout
