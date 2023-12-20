import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Home from "@pages/Home"
import Contatos from "@pages/Contatos"
import FiqueSocio from "@pages/FiqueSocio"
import ConvenioMedico from "@pages/ConvenioMedico"
import ClubeDeDesconto from "@pages/CLubeDeDesconto"
import Atividades from "@pages/Atividades"
import DiretoriaExecutiva from "@pages/DiretoriaExecutiva"
import ConselhoFiscal from "@pages/ConselhoFiscal"
import ConselhoDeliberativo from "@pages/ConselhoDeliberativo"
import NossaHistoria from "@pages/NossaHistoria"
import ClubeDeCampo from "@pages/ClubeDeCampo"
import PousadaLitoral from "@pages/PousadaLitoral"
import NotFoundPage from "@pages/NotFoundPage"
import BlogNoticias from "@pages/BlogNoticias"

export const router = createBrowserRouter([
  {
    path: "/assem-react/",
    element: <RootLayout />, //rota base da aplicação

    // Toas as rotas configuradas aqui são renderizadas no outlet
    children: [
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/assem-react/",
        element: <Home />,
      },
      {
        path: "/assem-react/blog-noticias",
        element: <BlogNoticias />,
      },
      {
        path: "/assem-react/contatos",
        element: <Contatos />,
      },
      {
        path: "/assem-react/fique-socio",
        element: <FiqueSocio />,
      },
      {
        path: "/assem-react/convenio-medico",
        element: <ConvenioMedico />,
      },
      {
        path: "/assem-react/clube-de-desconto",
        element: <ClubeDeDesconto />,
      },
      {
        path: "/assem-react/clube-de-campo",
        element: <ClubeDeCampo />,
      },
      {
        path: "/assem-react/pousada-litoral",
        element: <PousadaLitoral />,
      },
      {
        path: "assem-react/atividades-fisicas",
        element: <Atividades />,
      },
      {
        path: "/assem-react/diretoria-executiva",
        element: <DiretoriaExecutiva />,
      },
      {
        path: "/assem-react/conselho-fiscal",
        element: <ConselhoFiscal />,
      },
      {
        path: "/assem-react/conselho-deliberativo",
        element: <ConselhoDeliberativo />,
      },
      {
        path: "/assem-react/nossa-historia",
        element: <NossaHistoria />,
      },
    ],
  },
])
