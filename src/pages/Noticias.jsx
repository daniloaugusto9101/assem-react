import React from "react"
import AdsenseBanner from "../components/adsenseBanner"
import AdsenseSidebar from "../components/AdsenseSidebar"

const Noticias = () => {
  return (
    <section className=" max-w-4xl m-auto mt-10 grid gap-5 p-2">
      <AdsenseBanner />
      <div className="flex gap-2">
        <div className=" flex-initial w-1/3">
          <AdsenseSidebar />
        </div>
        <div className="flex-initial w-2/3 flex flex-col gap-2">
          <img className="" src="../src/assets/img/adsense/banner.webp" />
          <h2 className="text-3xl font-bold text-primary-900">
            Assem inicia nessa segunda, a venda de ingressos para o musical Uma
            Linda Mulher
          </h2>
          <div>
            <img src="" alt="" />
            <p className="text-ternary-700">
              Por<b> Bibiano Santos</b>
            </p>
            <p className="text-ternary-700">
              16/01/2023 13h - Atualizado há um mês
            </p>
          </div>
          <div className="text-2xl text-ternary-700 flex flex-col gap-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              ipsum eligendi vero facilis recusandae impedit asperiores incidunt
              libero sed eaque consequuntur repellat optio, nemo nam fugiat vel
              accusantium facere quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              ipsum eligendi vero facilis recusandae impedit asperiores incidunt
              libero sed eaque consequuntur repellat optio, nemo nam fugiat vel
              accusantium facere quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              ipsum eligendi vero facilis recusandae impedit asperiores incidunt
              libero sed eaque consequuntur repellat optio, nemo nam fugiat vel
              accusantium facere quos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Noticias
