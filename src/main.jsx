import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import AplicationRoutes from "./routes/AplicationRoutes"
import { GlobalStorage } from "@/storage/GlobalContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStorage>
      <AplicationRoutes />
    </GlobalStorage>
  </React.StrictMode>
)
