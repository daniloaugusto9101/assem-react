import React from "react"
import AgendaCard from "./AgendaCard"
import Icons from "@components/Icons/Icons"
const agendaPosts = [
  {
    dia: "20",
    mes: "ago",
    titulo: "Noite do Queijo e Vinho",
    local: "Sede Social",
  },
  {
    dia: "20",
    mes: "ago",
    titulo: "Noite do Queijo e Vinho",
    local: "Sede Social",
  },
  {
    dia: "20",
    mes: "ago",
    titulo: "Noite do Queijo e Vinho",
    local: "Sede Social",
  },
  {
    dia: "20",
    mes: "ago",
    titulo: "Noite do Queijo e Vinho",
    local: "Sede Social",
  },
  {
    dia: "20",
    mes: "ago",
    titulo: "Noite do Queijo e Vinho",
    local: "Sede Social",
  },
]

const Agenda = () => {
  return (
    <section className="container m-auto">
      <div className="p-4 flex items-center gap-3">
        <span className="text-4xl text-primary-900">
          <Icons nomeDoIcone="FaCalendarDays" />
        </span>
        <h1 className="4 text-5xl font-bold text-primary-900">Agenda</h1>
      </div>
      <div className="p-4 mb-44 flex gap-2 overflow-y-auto ">
        <AgendaCard agendaPosts={agendaPosts} />
      </div>
    </section>
  )
}

export default Agenda
