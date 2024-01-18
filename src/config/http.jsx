import axios from "axios"

// import { env } from "./env"
// const defaultEnv = "production"

export const api = axios.create({
  //baseURL: "https://assem.com.br/wp-json/wp/v2/",
  baseURL: "https://assem.com.br/wp-json/wp/v2/",
  //   headers: {
  //     Authorization: `Bearer ${env[defaultEnv].theMovieDBToken}`,
  //   },
})
