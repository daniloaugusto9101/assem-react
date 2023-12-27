import React from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import menuDataHeader from "@components/MenuData/menuDataHeader"
import { GlobalContext } from "@/storage/GlobalContext"

const MenuModal = () => {
  const { isModal, setModal } = React.useContext(GlobalContext)
  return (
    <div
      className={`animate-slide-toLeftModal fixed top-0 left-0 w-full h-full bg-primary-900 z-50 overflow-y-scroll text-ternary-50`}
    >
      <AiFillCloseCircle
        className=" text-5xl absolute right-5 top-5 cursor-pointer"
        onClick={() => setModal(!isModal)}
      />
      <ul className=" text-center p-20 lg:grid  lg:grid-cols-5 lg:text-left ">
        {menuDataHeader.map((obj, index) => (
          <li key={index} className="mb-5">
            <p className="text-xl font-bold uppercase">{obj.title}</p>
            {obj.dropDown.length > 0 ? (
              <ul className="text-lg">
                {obj.dropDown.map((ele, ind) => (
                  <li key={ind} className="mt-1 lg:my-5">
                    <a href={ele.link}>{ele.title}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuModal
