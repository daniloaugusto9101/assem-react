import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Home from "../pages/Home"
import Contatos from "../pages/Contatos"
import FiqueSocio from "../pages/FiqueSocio"
import Noticias from "../pages/Noticias"
import ConvenioMedico from "../pages/ConvenioMedico"
import ClubeDeDesconto from "../pages/CLubeDeDesconto"
import Atividades from "../pages/Atividades"
import DiretoriaExecutiva from "../pages/DiretoriaExecutiva"
import ConselhoFiscal from "../pages/ConselhoFiscal"
import ConselhoDeliberativo from "../pages/ConselhoDeliberativo"
import NossaHistoria from "../pages/NossaHistoria"
import ClubeDeCampo from "../pages/ClubeDeCampo"
import PousadaLitoral from "../pages/PousadaLitoral"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, //rota base da aplicação

    // Toas as rotas configuradas aqui são renderizadas no outlet
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/noticias",
        element: <Noticias />,
      },
      {
        path: "/contatos",
        element: <Contatos />,
      },
      {
        path: "/fique-socio",
        element: <FiqueSocio />,
      },
      {
        path: "/convenio-medico",
        element: <ConvenioMedico />,
      },
      {
        path: "/clube-de-desconto",
        element: <ClubeDeDesconto />,
      },
      {
        path: "/clube-de-campo",
        element: <ClubeDeCampo />,
      },
      {
        path: "/pousada-litoral",
        element: <PousadaLitoral />,
      },
      {
        path: "/atividades-fisicas",
        element: <Atividades />,
      },
      {
        path: "/diretoria-executiva",
        element: <DiretoriaExecutiva />,
      },
      {
        path: "/conselho-fiscal",
        element: <ConselhoFiscal />,
      },
      {
        path: "/conselho-deliberativo",
        element: <ConselhoDeliberativo />,
      },
      {
        path: "/nossa-historia",
        element: <NossaHistoria />,
      },
    ],
  },
])
