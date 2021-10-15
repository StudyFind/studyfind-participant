import algoliasearch from "algoliasearch/lite"
import { useState, useEffect } from "react";
import { useDebounce } from 'hooks';


function useAlgoliaSearch(indexName) {
    const algoliaClient = algoliasearch("1PDWAYKDDH", "8c2524ee4fab1358d8eab1c32aff490f")
    const studiesIndex = algoliaClient.initIndex(indexName)

    const [algoliaFilters, setAlgoliaFilters] = useState({
        search: "",
        title: false,
    })

    const [isSearching, setIsSearching] = useState(false);

    const [hits, setHits] = useState([])

    const debouncedSearchTerm = useDebounce(algoliaFilters, 400);

    useEffect(() => {
        if (debouncedSearchTerm.search !== "") {
            // Set isSearching state
            setIsSearching(true);
            // Fire off our API call
            studiesIndex.search(debouncedSearchTerm.search).then(records => {
                setIsSearching(false)
                setHits(records.hits)
            })
          } else {
            setHits([]);
          }
  }, [debouncedSearchTerm])

  return [hits, isSearching, algoliaFilters, setAlgoliaFilters]
}

export default useAlgoliaSearch