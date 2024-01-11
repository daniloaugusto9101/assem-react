import { api } from "../config/http"

const getPosts = async (idCategory = 1, perPage = 1) => {
  const recurso = "posts?"
  const params = {
    categories: idCategory,
    per_page: perPage,
  }
  const { data } = await api.get(`${recurso}`, { params })
  return data
}

const getIdsThumbnails = async (
  idCategory = 1,
  perPage = 1,
  fields = "acf.thumbnail_materia"
) => {
  const recurso = "posts?"
  const params = {
    categories: idCategory,
    per_page: perPage,
    _fields: fields,
  }
  const { data } = await api.get(`${recurso}`, { params })
  return data
}

const getMediaThumbnails = async (id) => {
  const recurso = "media?"
  const params = {
    include: id,
  }
  const { data } = await api.get(`${recurso}`, { params })
  return data
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
}
