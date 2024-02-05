import { Link } from "react-router-dom"
import useFetchPost from "../../hooks/useFetchPost"

const SectionNoticiasSegundaria = () => {
  const { post, thumbnail } = useFetchPost(6, 5)

  const getItemClass = (index) => {
    switch (index) {
      case 2:
        return "md:order-2 "
      case 3:
        return "md:order-1"
    }
  }

  if (post && thumbnail) {
    return (
      <>
        {post.map((obj, index) => (
          <div
            // className={`${getItemClass(index)} `}
            className={`bg-ternary-200 text-primary-900 hover:text-secondary-900 ${getItemClass(
              index
            )}`}
            key={index}
          >
            <Link
              key={index}
              to={`${import.meta.env.VITE_BASE_URL}post/${obj.id}`}
              className="grid grid-cols-2 gap-2 items-center md:grid-cols-none"
            >
              <img src={thumbnail[index].guid.rendered} />
              <h2 className="  sm:text-xl">{obj.title.rendered}</h2>
            </Link>
          </div>
        ))}
      </>
    )
  }
}

export default SectionNoticiasSegundaria
