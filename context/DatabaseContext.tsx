import { createContext, useState } from "react"
import {VideoI} from "../src/videos/types"

const DatabaseContext = createContext(null)

const DatabaseProvider = ({children}) =>{
  const [database, setDatabase] = useState([])
  
  const data = {
    database,
    setDatabase,
  }
  return (
    <DatabaseContext.Provider value={data}>{children}</DatabaseContext.Provider>
  )
}

export {DatabaseProvider}
export default DatabaseContext