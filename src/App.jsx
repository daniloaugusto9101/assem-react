import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Noticias from "./pages/Noticias"
import Contatos from "./pages/Contatos"
import FiqueSocio from "./pages/FiqueSocio"
import Footer from "./components/Footer/Footer"

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
