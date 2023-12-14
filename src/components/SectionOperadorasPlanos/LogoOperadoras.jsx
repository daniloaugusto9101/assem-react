import * as urlLogo from "@/assets/img/page-convenios/operadoras/"

const LogoOperadoras = () => {
  return (
    <div className="mb-20 grid grid-cols-saude gap-3 auto-rows-[_100px]">
      {Object.keys(urlLogo).map((url, index) => (
        <div key={index} className="bg-ternary-50 shadow-md p-2 ">
          <img
            src={urlLogo[url]}
            className="block w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default LogoOperadoras
