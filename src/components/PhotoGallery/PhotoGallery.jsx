const PhotoGallery = ({ img }) => {
  return (
    <div className="px-2 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
      {img.map((obj, i) => (
        <div key={i}>
          <img
            src={obj}
            className="overflow-hidden w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default PhotoGallery
