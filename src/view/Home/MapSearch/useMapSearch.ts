import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

import useDebounce from "@/hooks/useDebounce"
import { fetchPlaces } from "@/redux/actions/placeMapAction"

function useMapSearch() {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const maps = useSelector((state) => state.places)

  const debounceSearchValue = useDebounce(searchValue)

  useEffect(() => {
    if(debounceSearchValue) {
      dispatch(fetchPlaces(debounceSearchValue))
    }
  }, [debounceSearchValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return {
    handleChange,
    searchValue,
    maps
  }
}

export default useMapSearch
