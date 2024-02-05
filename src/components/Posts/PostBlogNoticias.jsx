import useFetchPost from "@/hooks/useFetchPost"
import { Link } from "react-router-dom"

const PostBlogNoticias = () => {
  const { post, thumbnail } = useFetchPost(6, 10)
  if (post && thumbnail) {
    return (
      <>
        {post.map((obj, index) => (
          <article
            key={index}
            className=" flex flex-col gap-3 lg:flex-row items-center border-b-2 py-5 border-ternary-300 text-center lg:text-left"
          >
            <Link
              to={`${import.meta.env.VITE_BASE_URL}post/${obj.id}`}
              className="lg:w-1/3 text-2xl lg:text-3xl hover:text-secondary-900"
            >
              <img src={thumbnail[index].guid.rendered} />
            </Link>
            <Link
              to={`${import.meta.env.VITE_BASE_URL}post/${obj.id}`}
              className="lg:w-2/3 text-2xl lg:text-3xl hover:text-secondary-900"
            >
              {obj.title.rendered}
            </Link>
          </article>
        ))}
      </>
    )
  }
}

export default PostBlogNoticias
