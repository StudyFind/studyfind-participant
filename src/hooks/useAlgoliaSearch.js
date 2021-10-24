import algoliasearch from "algoliasearch"
import { useState, useEffect } from "react";
import { useDebounce } from 'hooks';


function useAlgoliaSearch(indexName, filters) {
    const algoliaClient = algoliasearch("1PDWAYKDDH", "90272486676cb879a4d14f9c75b0d1d9")
    const studiesIndex = algoliaClient.initIndex(indexName)

    const [isSearching, setIsSearching] = useState(false);

    const [hits, setHits] = useState([])

    const debouncedSearchTerm = useDebounce(filters, 400);

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
    let trimmedFilters = [Object.keys(filters).map(key => key)][0]
    trimmedFilters = trimmedFilters.filter(filter => filters[filter])
    //This is hardcoded for the findstudies page, down the road we may have other cases like this, shouldn't be a problem since they are isolated and attributes shouldn't have the same names
    //If it is a problem, we can simply reformat the filters before we send them to this hook
    if (trimmedFilters.includes('locations')) {
      const ind = trimmedFilters.indexOf('locations')
      trimmedFilters.splice(ind, 1)
      trimmedFilters.push('locations.address')
    }
    studiesIndex.setSettings({
      searchableAttributes: trimmedFilters
    })
  }, [filters])

  return [hits, isSearching]
}

export default useAlgoliaSearch