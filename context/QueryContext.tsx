import { createContext, useState } from "react"

const QuerySearchContext = createContext(null)
const initialQuerySearch = ""
const initialQuerySearchSide = ""
const initialQuerySearchAgent = ""
const initialQuerySearchMap = ""


const QuerySearchProvider = ({children}) =>{
  const [querySearch, setQuerySearch] = useState(initialQuerySearch)
  const [querySearchSide, setQuerySearchSide] = useState(initialQuerySearchSide)
  const [querySearchAgent, setQuerySearchAgent] = useState(initialQuerySearchAgent)
  const [querySearchMap, setQuerySearchMap] = useState(initialQuerySearchMap)
  
  const data = {
    querySearch, 
    setQuerySearch,
    querySearchSide, 
    setQuerySearchSide,
    querySearchAgent, 
    setQuerySearchAgent,
    querySearchMap, 
    setQuerySearchMap,
  }
  return (
    <QuerySearchContext.Provider value={data}>{children}</QuerySearchContext.Provider>
  )
}

export {QuerySearchProvider}
export default QuerySearchContext