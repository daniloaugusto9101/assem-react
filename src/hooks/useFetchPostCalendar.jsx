import React from "react"
import PostService from "../services/PostService"

function useFetchPostCalendar(idCategory = 1, perPage = 1) {
  const [postCalendar, setPostCalendar] = React.useState([])

  React.useEffect(() => {
    PostService.getPosts(idCategory, perPage)
      .then((postData) => {
        postData.sort(
          (a, b) =>
            new Date(a.acf.data_do_evento) - new Date(b.acf.data_do_evento)
        )
        setPostCalendar(postData)
      })
      .catch((error) => console.error(error))
  }, [idCategory, perPage])

  return { postCalendar }
}

export default useFetchPostCalendar
