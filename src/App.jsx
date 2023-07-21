import "./App.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/common/Header"
import NotFound from "./components/pages/NotFound"
import Home from "./components/pages/Home"
import Noticias from "./components/pages/Noticias"
import Contatos from "./components/pages/Contatos"
import FiqueSocio from "./components/pages/FiqueSocio"
import Footer from "./components/common/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/fique-socio" element={<FiqueSocio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
