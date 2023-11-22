import React from "react"
import useFetchPost from "../../hooks/useFetchPost"

const SectionNoticiasDestaque = () => {
  const { mainPost, thumbnail } = useFetchPost(8, 1)

  if (mainPost && thumbnail)
    return (
      <div className="bg-ternary-200 mb-3 md:mb-0 md:row-span-2 md:col-span-2">
        <a href={mainPost[0].link}>
          <img src={thumbnail[0].guid.rendered} />
          <h2 className="text-3xl sm:text-4xl p-2 text-primary-900">
            {mainPost[0].title.rendered}
          </h2>
        </a>
      </div>
    )
}

export default SectionNoticiasDestaque
