import React from "react"

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [isModal, setModal] = React.useState(false)
  return (
    <GlobalContext.Provider value={{ isModal, setModal }}>
      {children}
    </GlobalContext.Provider>
  )
}
