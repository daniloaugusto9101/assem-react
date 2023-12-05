import React from "react"
import TitleText from "../components/TitleText/TitleText"
import ContatosItem from "../components/ContatosItem"

const CONTATOS = [
  {
    urlMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469452.95374452637!2d-45.879595!3d-23.184751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a24ca59960d%3A0x38aa0bafd01cbb19!2sASSEM%20-%20Associa%C3%A7%C3%A3o%20dos%20Servidores%20Municipais%20de%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos!5e0!3m2!1spt-BR!2sbr!4v1701780019509!5m2!1spt-BR!2sbr",
    local: "Sede",
    endereco:
      "R. Conselheiro Rodrigues Alves, 190 - Vila Santa Luzia, São José dos Campos - SP, 12209-540",
    telefone: "(12) 3922-7424",
  },
  {
    urlMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58674.403728081954!2d-45.767147!3d-23.201195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4d4d4484e27f%3A0xf9a67400cb912625!2sClube%20de%20Campo%20ASSEM!5e0!3m2!1spt-BR!2sbr!4v1701782465383!5m2!1spt-BR!2sbr",
    local: "Clube de Campo",
    endereco:
      "Estr. Mun. Nelson Tavares da Silva, 3001 - Bom Retiro, São José dos Campos - SP, 12226-205",
    telefone: "(12) 3922-7424",
  },

  {
    urlMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1872166.2402029582!2d-45.3295!3d-23.583714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd60d482afc101%3A0x2ff90a4d7f00570b!2sPousada%20ASSEM%20Litoral!5e0!3m2!1spt-BR!2sbr!4v1701782510549!5m2!1spt-BR!2sbr",
    local: "Pousada Litoral",
    endereco:
      "Av. Regina Margarete Passos, 27 - Massaguaçu, Caraguatatuba - SP, 11677-340",
    telefone: "(12) 3884-2910",
  },

  {
    urlMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58662.036130557!2d-45.886419!3d-23.229355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a956b7b341b%3A0x9dcf0ba272c36d5c!2sRaia%20de%20Malha%20ASSEM!5e0!3m2!1spt-BR!2sbr!4v1701782556117!5m2!1spt-BR!2sbr",
    local: "Raia de Malha",
    endereco:
      "Av. Cassiopeia, 1625 - Jardim Satélite, São José dos Campos - SP, 12230-011",
    telefone: "(12) 3922-7424",
  },
]

const Contatos = () => {
  return (
    <div className=" w-fulll">
      <div className=" container m-auto px-2">
        <div className="my-14">
          <TitleText title="Contatos" />
        </div>
        {CONTATOS.map((obj, index) => (
          <ContatosItem {...obj} key={index} />
        ))}
      </div>
    </div>
  )
}
export default Contatos
