import useFetchPost from "../../hooks/useFetchPost"

const SectionNoticiasSegundaria = () => {
  const { post, thumbnail } = useFetchPost(6, 5)

  if (post && thumbnail) {
    return (
      <>
        {post.map((obj, index) => (
          <div
            className="bg-ternary-200 text-primary-900 hover:text-secondary-900"
            key={index}
          >
            <a
              href={obj.link}
              className="grid grid-cols-2 gap-2 items-center md:grid-cols-none"
            >
              <img src={thumbnail[index].guid.rendered} />
              <h2 className="  sm:text-xl">{obj.title.rendered}</h2>
            </a>
          </div>
        ))}
      </>
    )
  }
}

export default SectionNoticiasSegundaria
