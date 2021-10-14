import algoliasearch from "algoliasearch/lite"
import { useState, useEffect } from "react";

function useAlgoliaSearch(indexName) {
    const algoliaClient = algoliasearch("1PDWAYKDDH", "8c2524ee4fab1358d8eab1c32aff490f")
    const studiesIndex = algoliaClient.initIndex(indexName)

    const [algoliaFilters, setAlgoliaFilters] = useState({
        search: "",
        title: false,
    })

    const [hits, setHits] = useState([])

    useEffect(() => {
        studiesIndex.search(algoliaFilters.search)
            .then((records) => {
            console.log(algoliaFilters.search)
            console.log(records.hits)
            setHits(records.hits)
        })
  }, [algoliaFilters])

  return [hits, algoliaFilters, setAlgoliaFilters]
}

export default useAlgoliaSearch