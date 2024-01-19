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

  const thumbnail = post.acf?.thumbnail_materia
  const title = post.title?.rendered
  const authorName = post._embedded?.author[0]?.name
  const date = obterDataCompleta(post.date)
  if (!post) {
    return <div>Carregando...</div> // Indicador de carregamento
  }
  return (
    <section className="max-w-4xl m-auto mt-10 grid gap-5 p-2">
      <AdsenseBanner />
      <div className="flex gap-2">
        <div className="flex-initial w-1/3">
          <AdsenseSidebar />
        </div>
        <div className="flex-initial w-2/3 flex flex-col gap-2">
          <img src={thumbnail} alt="Thumbnail" />
          <h2 className="text-3xl font-bold text-primary-900">
            <p>{title}</p>
          </h2>
          <div>
            <img src="" alt="" />
            <p className="text-ternary-700">
              Por <b>{authorName}</b>
            </p>
            <p className="text-ternary-700 text-sm">{date}</p>
          </div>

          <div className="text-2xl flex flex-col gap-3 space-y-5">
            {parsedHTML}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostDetails
