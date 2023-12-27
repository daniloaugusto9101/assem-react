import React from "react"
import { Link } from "react-router-dom"
import menuDataFooter from "@components/MenuData/menuDataFooter"

const MenuFooter = () => {
  return (
    <section className="bg-primary-900 px-5 py-10 text-ternary-50">
      <ul className="grid gap-y-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center text-center sm:text-left">
        {menuDataFooter.map((obj, index) => (
          <li key={index} className="">
            <a className="text-xl font-bold uppercase">{obj.title}</a>
            {obj.dropDown.length > 0 ? (
              <ul className="text-sm">
                {obj.dropDown.map((ele, ind) => (
                  <li key={ind} className=" mt-1">
                    <Link to={ele.link}>{ele.title}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MenuFooter
