import Fuse from "fuse.js";

const searchFuse = (videos, query) => {
  const options = {
    keys: ["title", "description"]
  }
  const fuse = new Fuse(videos, options)
  if (!query) {
    return [];
  }
  const results = fuse.search(query)
  console.log("Query ", query)
  console.log("Resultado busqueda: ", results)
  return results

}

export default searchFuse