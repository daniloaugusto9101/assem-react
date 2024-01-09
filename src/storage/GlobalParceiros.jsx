import React from "react"

export const GlobalParceiros = React.createContext()

export const GlobalStorageParceiros = ({ children }) => {
  const [isCategory, setIsCategory] = React.useState("Educação Básica")
  return (
    <GlobalParceiros.Provider value={{ isCategory, setIsCategory }}>
      {children}
    </GlobalParceiros.Provider>
  )
}
