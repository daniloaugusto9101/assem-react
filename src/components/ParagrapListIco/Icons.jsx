import * as FaIcons from "react-icons/fa6"

const ListIco = ({ IDIco }) => {
  const commonClassName = "inline-block"

  const icoComponents = {
    1: <FaIcons.FaRulerHorizontal className={commonClassName} />,
    2: <FaIcons.FaSackDollar className={commonClassName} />,
    3: <FaIcons.FaPersonSwimming className={commonClassName} />,
    4: <FaIcons.FaGamepad className={commonClassName} />,
    5: <FaIcons.FaPaw className={commonClassName} />,
    6: <FaIcons.FaCakeCandles className={commonClassName} />,
    7: <FaIcons.FaBurger className={commonClassName} />,
    8: <FaIcons.FaFutbol className={commonClassName} />,
    9: <FaIcons.FaFileSignature className={commonClassName} />,
    10: <FaIcons.FaCar className={commonClassName} />,
    11: <FaIcons.FaDice className={commonClassName} />,
    12: <FaIcons.FaPeopleRoof className={commonClassName} />,
    13: <FaIcons.FaTrophy className={commonClassName} />,
  }

  return (
    icoComponents[IDIco] || <FaIcons.FaCaretRight className={commonClassName} />
  )
}

export default ListIco
