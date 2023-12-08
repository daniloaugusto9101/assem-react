import PostBlogNoticias from "@components/Posts/PostBlogNoticias"
import TitleText from "@components/TitleText/TitleText"
import useFetchPost from "../hooks/useFetchPost"

const BlogNoticias = () => {
  const { mainPost, thumbnail } = useFetchPost(6, 10)

  if (mainPost && thumbnail) {
    return (
      <section className="my-10">
        <div className="container m-auto px-2">
          <TitleText title="Noticias" />
          {/* Inicio do container que exibe todas as noticias */}
          <div className="shadow-xl px-5">
            {/* Inicio do loop que puxa todas as notícias */}
            {mainPost.map((obj, index) => (
              <PostBlogNoticias key={index} post={obj} />
              // <article
              //   key={index}
              //   className=" flex flex-col gap-3 lg:flex-row items-center border-b-2 py-5 border-ternary-300 text-center lg:text-left"
              // >
              //   <a
              //     href={obj.link}
              //     className="lg:w-1/3 text-2xl lg:text-3xl hover:text-secondary-900"
              //   >
              //     <img src={thumbnail[index].guid.rendered} />
              //   </a>
              //   <a
              //     href={obj.link}
              //     className="lg:w-2/3 text-2xl lg:text-3xl hover:text-secondary-900"
              //   >
              //     {obj.title.rendered}
              //   </a>
              // </article>
            ))}

            {/* Inicio da páginação de páginas */}
            <div className="py-5">
              <a href="">1</a>
              <a href="">2</a>
              <a href="">3</a>
              <a href="">4</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BlogNoticias
