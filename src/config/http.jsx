import axios from "axios"

// import { env } from "./.env.production"
// const defaultEnv = "production"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  // baseURL: "https://assem.com.br/wp-json/wp/v2/",
  //   headers: {
  //     Authorization: `Bearer ${env[defaultEnv].theMovieDBToken}`,
  //   },
})
