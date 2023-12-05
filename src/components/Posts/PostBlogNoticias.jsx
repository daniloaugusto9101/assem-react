import useFetchPost from "../../hooks/useFetchPost"

const PostBlogNoticias = () => {
  const { post, thumbnail } = useFetchPost(1, 6)
  if (post && thumbnail) {
    return (
      <>
        {post.map((obj, index) => (
          <article
            key={index}
            className=" flex flex-col gap-3 lg:flex-row items-center border-b-2 py-5 border-ternary-300 text-center lg:text-left"
          >
            <a
              href={obj.link}
              className="lg:w-1/3 text-2xl lg:text-3xl hover:text-secondary-900"
            >
              <img src={thumbnail[index].guid.rendered} />
            </a>
            <a
              href={obj.link}
              className="lg:w-2/3 text-2xl lg:text-3xl hover:text-secondary-900"
            >
              {obj.title.rendered}
            </a>
          </article>
        ))}
      </>
    )
  }
}

export default PostBlogNoticias
