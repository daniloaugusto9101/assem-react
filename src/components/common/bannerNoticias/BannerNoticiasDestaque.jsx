import React from "react"

const BannerNoticiasDestaque = () => {
  const [postDestaque, setPostDestaque] = React.useState(null)
  const [thumbnail, setThumbnail] = React.useState(null)

  React.useEffect(() => {
    async function getPostDestaque(url) {
      const response = await fetch(url)
      const json = await response.json()
      setPostDestaque(json)
    }
    getPostDestaque(
      `https://assem.com.br/wp-json/wp/v2/posts?categories=8&per_page=1`
    )
  }, [])

  React.useEffect(() => {
    if (!postDestaque) {
      return // Aguarde até que postDestaque tenha valor antes de continuar
    }
    async function getThumbnail(url) {
      const response = await fetch(url)
      const json = await response.json()
      setThumbnail(json.guid.rendered)
    }
    getThumbnail(
      `https://assem.com.br/wp-json/wp/v2/media/${postDestaque[0].acf.thumbnail_materia}`
    )
  }, [postDestaque])

  if (thumbnail === null) return null
  return (
    <div className="bg-ternary-200 mb-3 md:mb-0 md:row-span-2 md:col-span-2">
      <a href={postDestaque[0].link}>
        <img src={thumbnail} />
        <h2 className="text-3xl p-2 text-primary-900">
          {postDestaque[0].title.rendered}
        </h2>
      </a>
    </div>
  )
}

export default BannerNoticiasDestaque
