import React from "react"
import * as ReactIcons from "react-icons/fa6"

const Icons = ({ nomeDoIcone }) => {
  const [Icone, setIcone] = React.useState(null)

  React.useEffect(() => {
    // Verifica se o ícone solicitado existe em react-icons
    if (ReactIcons[nomeDoIcone]) {
      setIcone(() => ReactIcons[nomeDoIcone])
    } else {
      console.error(`Ícone '${nomeDoIcone}' não encontrado em react-icons.`)
    }
  }, [nomeDoIcone])
  return <div> {Icone && <Icone />}</div>
}

export default Icons
