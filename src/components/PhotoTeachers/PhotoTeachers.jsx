import PhotoGallery from "@components/PhotoGallery"
import TitleSimple from "../TitleSimple"

const PhotoTeachers = ({ img }) => {
  return (
    <div className="flex flex-col gap-10">
      <TitleSimple title="Professores" />
      <PhotoGallery img={img} />
    </div>
  )
}

export default PhotoTeachers
