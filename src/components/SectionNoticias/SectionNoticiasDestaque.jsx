import useFetchPost from "../../hooks/useFetchPost"

const SectionNoticiasDestaque = () => {
  const { post, thumbnail } = useFetchPost(8, 1)

  if (post && thumbnail)
    return (
      <div className="bg-ternary-200 mb-3 md:mb-0 md:row-span-2 md:col-span-2 text-primary-900 hover:text-secondary-900">
        {post.map((obj, index) => (
          <a key={index} href={obj.link}>
            <img src={thumbnail[index].guid.rendered} />
            <h2 className="text-3xl sm:text-4xl p-2 ">{obj.title.rendered}</h2>
          </a>
        ))}
      </div>
    )
}

export default SectionNoticiasDestaque
