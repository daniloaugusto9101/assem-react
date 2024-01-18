import React from "react"
import PostService from "../services/PostService"

function useGetPostDetails(postId) {
  const [post, setPost] = React.useState({})

  React.useEffect(() => {
    PostService.getPostDetails(postId)
      .then((postData) => {
        setPost(postData)
      })
      .catch((error) => console.error(error))
  }, [])

  return post
}

export default useGetPostDetails
