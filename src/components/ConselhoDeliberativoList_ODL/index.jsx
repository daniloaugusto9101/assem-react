const images = import.meta.glob(
  "@assets/img/page-deliberativo/*.{jpg,jpeg,png,svg,webp}'"
)

function createDirector(name, position, imageIndex) {
  return {
    img: Object.values(images)[imageIndex].name,
    nome: name,
    cargo: position,
  }
}

export const ConselhoDeliberativoList = [
  {
    title: "Mesa Diretora",
    diretores: [
      createDirector("João Frigi Neto", "Presidente", 16),
      createDirector("Adriana de Castilho Jorge", "1ª Secretária", 1),
      createDirector("Francisco Sato", "Vice-Presidente", 13),
      createDirector("Rita de Cássia Giovaneli", "2ª Secretária", 23),
    ],
  },
  {
    title: "Conselheiros Vitalícios",
    diretores: [
      createDirector("Antonio Batista Gomes", "", 2),
      createDirector("João Frigi Neto", "", 16),
      createDirector("Antonio Ribeiro Guedes", "", 3),
      createDirector("Jorge Cursino dos Santos", "", 17),
      createDirector("Arão Antonio de Andrade Carvalho", "", 4),
      createDirector("Paulo Sérgio Alciprete", "", 21),
      createDirector("Carlos Marcelo de Oliveira", "", 5),
      createDirector("Rita de Cássia Giovaneli", "", 23),
      createDirector("Edmilson Bernardino Pereira", "", 10),
      createDirector("Romualdo Pereira de Castro", "", 24),
      createDirector("Francisco Sato", "", 13),
      createDirector("Sidney Ribeiro de Paulo", "", 0),
      createDirector("João Batista de Castro", "", 15),
    ],
  },
  {
    title: "Conselheiros Eleitos",
    diretores: [
      createDirector("Adriana de Castilho Jorge", "", 1),
      createDirector("Francisco Sérgio Rizo", "", 12),
      createDirector("Celso Antônio de Souza", "", 6),
      createDirector("Ivanaldo Moreira", "", 14),
      createDirector("Claudemir de Assis Cabral", "", 7),
      createDirector("Marco Antônio Camargo", "", 18),
      createDirector("Dorival Custódio dos Santos", "", 8),
      createDirector("Maria Claudia de Moura Santucci", "", 19),
      createDirector("Dulcinea Borges Ribeiro", "", 9),
      createDirector("Paulo José Augusto dos Santos", "", 20),
      createDirector("Edmundo de Paula", "", 11),
      createDirector("Paulo Vita Neres", "", 22),
    ],
  },
]
