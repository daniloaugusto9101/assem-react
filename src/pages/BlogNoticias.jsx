import PostBlogNoticias from "@components/Posts/PostBlogNoticias"
import TitleText from "@/components/TitleText/TitleText"

const BlogNoticias = () => {
  return (
    <section className="my-10">
      <div className="container m-auto px-2">
        <TitleText title="Noticias" />
        <div className="shadow-xl px-5">
          <PostBlogNoticias />
        </div>
      </div>
    </section>
  )
}

export default BlogNoticias
