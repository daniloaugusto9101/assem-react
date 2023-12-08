import url from "@/assets/video/banner.mp4"

const Banner = () => {
  return (
    <div className="w-full h-96 md:h-[580px] 2xl:h-[640px] relative mb-44 ">
      <div className="absolute w-full h-full bg-ternary-900 bg-opacity-60"></div>
      <video
        className="w-full h-full object-cover"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src={url} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeos.
      </video>
    </div>
  )
}

export default Banner
