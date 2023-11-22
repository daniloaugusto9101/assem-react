import React from "react"
import PostService from "../services/PostService"

function useFetchPost(idCategory = 1, perPage = 1) {
  const [mainPost, setMainPost] = React.useState(null)
  const [thumbnail, setThumbnail] = React.useState(null)

  React.useEffect(() => {
    const fecthPost = async () => {
      const data = await PostService.getPosts(idCategory, perPage)
      setMainPost(data)
    }
    fecthPost()
  }, [])

  React.useEffect(() => {
    const fecthThumbnail = async () => {
      const data = await PostService.getThumbnails(idCategory, perPage)
      setThumbnail(data)
    }
    fecthThumbnail()
  }, [])

  return { mainPost, thumbnail }
}

export default useFetchPost
