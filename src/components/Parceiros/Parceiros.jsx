import ParceirosItem from "./ParceirosItem"
import ParceirosMenu from "./ParceirosMenu"
import { GlobalStorageParceiros } from "@/storage/GlobalParceiros"

const Parceiros = () => {
  const categoria = "Seguros"

  return (
    <GlobalStorageParceiros>
      <section className="flex flex-row px-2 gap-x-2">
        <nav className="bg-primary-900 basis-1/4 rounded-md p-5 ">
          <ParceirosMenu />
        </nav>
        <main className=" basis-3/4 flex flex-col gap-2">
          <ParceirosItem categoria={categoria} />
        </main>
      </section>
    </GlobalStorageParceiros>
  )
}

export default Parceiros
