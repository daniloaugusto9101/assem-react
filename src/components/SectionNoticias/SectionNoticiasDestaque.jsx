import React from "react"
import PostService from "../../services/PostService"

const SectionNoticiasDestaque = () => {
  const [mainPost, setMainPost] = React.useState(null)
  const [thumbnail, setThumbnail] = React.useState(null)

  React.useEffect(() => {
    PostService.getPosts(8).then(({ data }) => setMainPost(data[0]))
  }, [])

  React.useEffect(() => {
    // PostService.getPostsThumbnails().then((data) => setThumbnail(data))
    PostService.getPostsThumbnails().then((data) => console.log(data))
  }, [])
  // thumbnail && console.log(thumbnail)

  if (mainPost)
    return (
      <div className="bg-ternary-200 mb-3 md:mb-0 md:row-span-2 md:col-span-2">
        <a href={mainPost.link}>
          {/* <img src={Thumbnail} /> */}
          <h2 className="text-3xl p-2 text-primary-900">
            {mainPost.title.rendered}
          </h2>
        </a>
      </div>
    )
}

export default SectionNoticiasDestaque
