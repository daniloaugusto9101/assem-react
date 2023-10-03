const SectionDoubleSimple = (props) => {
  return (
    <div className="mb-40 px-5 grid gap-10 md:grid-cols-2 md:items-center">
      <div className={`h-72 ${props.reverse && "md:order-last"}`}>
        <img src={props.img} className="block w-full h-full object-cover" />
      </div>
      <div
        className={`text-center md:text-left text-ternary-700 ${
          props.reverse && "md:text-right"
        }`}
      >
        <h2 className="uppercase text-4xl md:text-5xl font-bold mb-5">
          {props.title}
        </h2>
        <p className="text-xl">{props.text}</p>
      </div>
    </div>
  )
}

export default SectionDoubleSimple
