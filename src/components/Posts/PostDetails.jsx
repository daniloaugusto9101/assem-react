import React from "react"
import AdsenseBanner from "@components/AdsenseBanner"
import AdsenseSidebar from "@components/AdsenseSidebar"
import { useParams } from "react-router-dom"
import useGetPostDetails from "@/hooks/useGetPostDetails"
import { useRenderHtml } from "@/hooks/useRenderHtml"
import { obterDataCompleta } from "@/hooks/useFormartDate"

const PostDetails = () => {
  const { postId } = useParams()
  const post = useGetPostDetails(postId)
  const parsedHTML = useRenderHtml(post.content?.rendered)

  return (
    <section className=" max-w-4xl m-auto mt-10 grid gap-5 p-2">
      <AdsenseBanner />
      <div className="flex gap-2">
        <div className=" flex-initial w-1/3">
          <AdsenseSidebar />
        </div>
        <div className="flex-initial w-2/3 flex flex-col gap-2">
          <img className="" src="../src/assets/img/adsense/banner.webp" />
          <h2 className="text-3xl font-bold text-primary-900">
            <p>{post.title?.rendered}</p>
          </h2>
          <div>
            <img src="" alt="" />
            <p className="text-ternary-700">
              Por <b>{post._embedded?.author[0].name}</b>
            </p>
            <p className="text-ternary-700 text-sm">
              {obterDataCompleta(post.date)}
            </p>
          </div>

          <div className="text-2xl !text-ternary-700 flex flex-col gap-3">
            {parsedHTML}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostDetails
