import Icons from "./Icons"

const ParagrapListIco = ({ paragrapList }) => {
  const subList = (array) => {
    const list =
      array.itens.length > 0 ? (
        <ul>
          {array.itens.map((obj) => (
            <li
              key={obj.text}
              className="flex items-center gap-1 text-md text-ternary-700"
            >
              <Icons IDIco={obj.ico} className="text-yellow-500" />
              <span>{obj.text}</span>
            </li>
          ))}
        </ul>
      ) : null
    return list
  }

  return (
    <ul className="container p-2 m-auto grid grid-cols-list gap-3 ">
      {paragrapList.map((obj) => (
        <li key={obj.text} className=" bg-ternary-300 shadow-md p-1">
          <div className="flex items-center gap-1 text-2xl text-primary-900">
            <Icons IDIco={obj.ico} />
            <span className="">{obj.text}</span>
          </div>
          {subList(obj)}
        </li>
      ))}
    </ul>
  )
}

export default ParagrapListIco
