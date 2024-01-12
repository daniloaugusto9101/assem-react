const obterDiaFormatado = (dataString) => {
  const data = new Date(dataString)
  const dia = data.getDate()
  return dia.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
}

const obterMesAbreviado = (dataString) => {
  const data = new Date(dataString)
  // Obter a abreviação do mês em português sem ponto
  const mesAbreviado = data
    .toLocaleString("pt-BR", { month: "short" })
    .replace(/\./g, "")
  return mesAbreviado
}

export { obterDiaFormatado, obterMesAbreviado }
