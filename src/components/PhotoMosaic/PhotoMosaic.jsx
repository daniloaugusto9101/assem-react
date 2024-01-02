const mosaic = [
  { grid: "col-span-2 row-span-2" },
  { grid: "" },
  { grid: "row-span-3" },
  { grid: "row-span-2" },
  { grid: "row-span-2" },
  { grid: "row-span-2" },
  { grid: "col-span-2" },
]

const PhotoMosaic = ({ img }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 h-96 md:h-screen">
        {img.map((obj, i) => (
          <div key={i} className={`overflow-hidden ${mosaic[i].grid}`}>
            <img src={obj} className={`block w-full h-full object-cover `} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoMosaic
