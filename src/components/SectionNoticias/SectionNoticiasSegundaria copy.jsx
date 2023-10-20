import React from "react"

const SectionNoticiasSegundaria = () => {
  const [postsSegundarios, setPostsSegundarios] = React.useState(null)
  const [idThumbnail, setIdThumbnail] = React.useState([])
  const [thumbnail, setThumbnail] = React.useState([])

  React.useEffect(() => {
    async function getPostsSegundarios(url) {
      const response = await fetch(url)
      const json = await response.json()
      setPostsSegundarios(json)
    }
    getPostsSegundarios(
      `https://assem.com.br/wp-json/wp/v2/posts?categories=6&per_page=5`
    )
  }, [])

  React.useEffect(() => {
    async function getThumbnail(url) {
      const response = await fetch(url)
      const json = await response.json()
      setIdThumbnail(json)
    }
    getThumbnail(
      `https://assem.com.br/wp-json/wp/v2/posts?categories=6&per_page=5&_fields=acf.thumbnail_materia`
    )
  }, [])

  React.useEffect(() => {
    async function getThumbnail(url) {
      const response = await fetch(url)
      const json = await response.json()
      setThumbnail(json)
    }
    getThumbnail(
      `https://assem.com.br/wp-json/wp/v2/media?include=${idThumbnail.map(
        (obj) => obj.acf.thumbnail_materia
      )}`
    )
  }, [idThumbnail])

  if (postsSegundarios === null) return null
  if (idThumbnail === null) return null
  if (thumbnail === null) return null

  return (
    <>
      {postsSegundarios.map((obj, index) => (
        <div className="bg-ternary-200" key={index}>
          <a
            href={obj.link}
            className="grid grid-cols-2 items-center md:grid-cols-none"
          >
            <img src={thumbnail[index].guid.rendered} />
            <h2 className="p-2 text-primary-900">{obj.title.rendered}</h2>
          </a>
        </div>
      ))}
    </>
  )
}

export default SectionNoticiasSegundaria
