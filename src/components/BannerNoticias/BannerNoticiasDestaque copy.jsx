import React from "react"

const BannerNoticiasDestaque = () => {
  const [idPostDestaque, setIdPostDestaque] = React.useState(null)
  const [postDestaque, setPostDestaque] = React.useState(null)
  const [idThumbnail, setIdThumbnail] = React.useState(null)
  const [thumbnail, setThumbnail] = React.useState(null)

  React.useEffect(() => {
    async function getIDPostDestaque(url) {
      const response = await fetch(url)
      const json = await response.json()
      setIdPostDestaque(json[0].id)
    }
    getIDPostDestaque(`https://assem.com.br/wp-json/wp/v2/posts?categories=8`)
  }, [])

  React.useEffect(() => {
    if (!idPostDestaque) {
      return // Aguarde até que idPostDestaque tenha valor antes de continuar
    }
    async function getPostDestaque(url) {
      const response = await fetch(url)
      const json = await response.json()
      setPostDestaque(json)
      setIdThumbnail(json.acf.thumbnail_materia)
    }
    getPostDestaque(
      `https://assem.com.br/wp-json/wp/v2/posts/${idPostDestaque}`
    )
  }, [idPostDestaque])

  React.useEffect(() => {
    if (!idThumbnail) {
      return // Aguarde até que idPostDestaque tenha valor antes de continuar
    }
    async function getThumbnail(url) {
      const response = await fetch(url)
      const json = await response.json()
      setThumbnail(json)
    }
    getThumbnail(`https://assem.com.br/wp-json/wp/v2/media/${idThumbnail}`)
  }, [idThumbnail])

  if (thumbnail === null) return null

  return (
    <div className="bg-ternary-200 mb-3 md:mb-0 md:row-span-2 md:col-span-2">
      <a href={postDestaque.link}>
        <img src={thumbnail.guid.rendered} />
        <h2 className="text-3xl p-2 text-primary-900">
          {postDestaque.title.rendered}
        </h2>
      </a>
    </div>
  )
}

export default BannerNoticiasDestaque
