import { api } from "../config/http"

const getPosts = async (idCategory = 1, perPage = 1) => {
  const response = await api.get(
    `posts?categories=${idCategory}&per_page=${perPage}`
  )
  return response.data
}

const getIdsThumbnails = async (
  idCategory = 1,
  perPage = 1,
  nameField = "acf.thumbnail_materia"
) => {
  const response = await api.get(
    `posts?categories=${idCategory}&per_page=${perPage}&_fields=${nameField}`
  )
  return response.data
}

const getMediaThumbnails = async (id) => {
  const response = await api.get(`media?include=${id}`)
  return response.data
}

const getThumbnails = async (idCategory, perPage) => {
  const firstData = await getIdsThumbnails(idCategory, perPage)
  const thumbnailIds = firstData
    .map((obj) => obj.acf.thumbnail_materia)
    .join(",")
  const secondData = await getMediaThumbnails(thumbnailIds)
  return secondData
}

export default {
  getPosts,
  getThumbnails,
  getMediaThumbnails,
}
