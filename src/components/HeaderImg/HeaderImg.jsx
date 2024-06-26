const HeaderImg = ({ img, title }) => {
  return (
    <div className="relative">
      <div className="md:h-96">
        <img src={img} className="block w-full h-full object-cover" />
      </div>
      <p className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl sm:text-6xl font-bold text-ternary-600 ">
        {title}
      </p>
    </div>
  )
}

export default HeaderImg
