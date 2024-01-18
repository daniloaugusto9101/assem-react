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

function obterDataCompleta(data) {
  let dataObjeto = new Date(data)
  let dia = dataObjeto.getDate()
  let mes = dataObjeto.getMonth() + 1 // Os meses são baseados em zero
  let ano = dataObjeto.getFullYear()

  dia = dia < 10 ? "0" + dia : dia
  mes = mes < 10 ? "0" + mes : mes

  return dia + "/" + mes + "/" + ano
}

export { obterDiaFormatado, obterMesAbreviado, obterDataCompleta }
