import algoliasearch from "algoliasearch"
import { useState, useEffect } from "react";
import { useDebounce } from 'hooks';


function useAlgoliaSearch(indexName) {
    const algoliaClient = algoliasearch("1PDWAYKDDH", "90272486676cb879a4d14f9c75b0d1d9")
    const studiesIndex = algoliaClient.initIndex(indexName)

    const [algoliaFilters, setAlgoliaFilters] = useState({
        search: "",
        title: false,
        sex: false,
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

  useEffect(() => {
    let filtersCopy = {...algoliaFilters}
    delete filtersCopy.search
    let filters = [Object.keys(algoliaFilters).map(key => key)][0]
    filters = filters.filter(filter => algoliaFilters[filter])
    studiesIndex.setSettings({
      searchableAttributes: filters
    })
  }, [algoliaFilters])

  return [hits, isSearching, algoliaFilters, setAlgoliaFilters]
}

export default useAlgoliaSearch