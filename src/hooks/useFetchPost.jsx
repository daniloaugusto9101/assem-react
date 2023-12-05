import React from "react"
import PostService from "../services/PostService"

function useFetchPost(idCategory = 1, perPage = 1) {
  const [post, setPost] = React.useState([])
  const [thumbnail, setThumbnail] = React.useState([])

  React.useEffect(() => {
    Promise.all([
      PostService.getPosts(idCategory, perPage),
      PostService.getThumbnails(idCategory, perPage),
    ])
      .then(([postData, thumbnailData]) => {
        setPost(postData)
        setThumbnail(thumbnailData)
      })
      .catch((error) => console.error(error))
  }, [idCategory, perPage])

  return { post, thumbnail }
}

export default useFetchPost
