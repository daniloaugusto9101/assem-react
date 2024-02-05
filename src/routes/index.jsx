import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Home from "@pages/Home"
import Contatos from "@pages/Contatos"
import FiqueSocio from "@pages/FiqueSocio"
import ConvenioMedico from "@pages/ConvenioMedico"
import ClubeDeDesconto from "@pages/CLubeDeDesconto"
import DiretoriaExecutiva from "@pages/DiretoriaExecutiva"
import ConselhoFiscal from "@pages/ConselhoFiscal"
import ConselhoDeliberativo from "@pages/ConselhoDeliberativo"
import NossaHistoria from "@pages/NossaHistoria"
import Atividades from "@pages/Atividades"
import ClubeDeCampo from "@pages/ClubeDeCampo"
import PousadaLitoral from "@pages/PousadaLitoral"
import NotFoundPage from "@pages/NotFoundPage"
import BlogNoticias from "@pages/BlogNoticias"
import Estatuto from "../pages/Estatuto"
import PostDetails from "@components/Posts/PostDetails"

export const router = createBrowserRouter([
  {
    path: import.meta.env.VITE_BASE_URL,
    element: <RootLayout />, //rota base da aplicação

    // Toas as rotas configuradas aqui são renderizadas no outlet
    children: [
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: import.meta.env.VITE_BASE_URL,
        element: <Home />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/blog-noticias`,
        element: <BlogNoticias />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/contatos`,
        element: <Contatos />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/fique-socio`,
        element: <FiqueSocio />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/convenio-medico`,
        element: <ConvenioMedico />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/atividades-fisicas`,
        element: <Atividades />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/clube-de-desconto`,
        element: <ClubeDeDesconto />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/clube-de-campo`,
        element: <ClubeDeCampo />,
      },

      {
        path: `${import.meta.env.VITE_BASE_URL}/pousada-litoral`,
        element: <PousadaLitoral />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/diretoria-executiva`,
        element: <DiretoriaExecutiva />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/conselho-fiscal`,
        element: <ConselhoFiscal />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/conselho-deliberativo`,
        element: <ConselhoDeliberativo />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/nossa-historia`,
        element: <NossaHistoria />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/estatutoia`,
        element: <Estatuto />,
      },
      {
        path: `${import.meta.env.VITE_BASE_URL}/post/:postId`,
        element: <PostDetails />,
      },
    ],
  },
])
