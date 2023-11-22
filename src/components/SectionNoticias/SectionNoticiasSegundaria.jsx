import React from "react"
import useFetchPost from "../../hooks/useFetchPost"

const SectionNoticiasSegundaria = () => {
  const { mainPost, thumbnail } = useFetchPost(6, 5)

  if (mainPost && thumbnail) {
    return (
      <>
        {mainPost.map((obj, index) => (
          <div className="bg-ternary-200 " key={index}>
            <a
              href={obj.link}
              className="grid grid-cols-2 gap-2 items-center md:grid-cols-none"
            >
              <img src={thumbnail[index].guid.rendered} />
              <h2 className=" text-primary-900 sm:text-xl">
                {obj.title.rendered}
              </h2>
            </a>
          </div>
        ))}
      </>
    )
  }
}

export default SectionNoticiasSegundaria
