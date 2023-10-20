import { api } from "../config/http"

const getPosts = (idCategory = 1, perPage = 1) => {
  return api.get(`posts?categories=${idCategory}&per_page=${perPage}`)
}

const getIdThumbnail = (
  idCategory = 1,
  perPage = 2,
  nameField = "acf.thumbnail_materia"
) => {
  return api.get(
    `posts?categories=${idCategory}&per_page=${perPage}&_fields=${nameField}`
  )
}

const getPostsThumbnails = (
  idCategory = 1,
  perPage = 2,
  nameField = "acf.thumbnail_materia"
) => {
  const options = {
    params: {
      categories: idCategory,
      per_page: perPage,
      _fields: nameField,
    },
  }
  api.get(`posts?`, options).then((resp1) => {
    const data1 = resp1.data

    data1.map(resp => {
      
    })

    api.get(`media?`)
    console.log(data1)
  })
}

export default {
  getPosts,
  getPostsThumbnails,
}
