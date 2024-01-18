import { api } from "../config/http"

const getPostDetails = async (postId = 1501) => {
  try {
    const resource = `posts/${postId}?_embed=true`
    const { data } = await api.get(resource)
    return data
  } catch (error) {
    // Trate os erros ou repasse para quem chama a função, dependendo do seu caso
    console.error("Erro ao obter detalhes do post:", error)
    throw error
  }
}

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
  const recurso = "media?orderby=include"
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
  getPostDetails,
  getPosts,
  getThumbnails,
}
