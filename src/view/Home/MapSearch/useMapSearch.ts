import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

import useDebounce from "@/hooks/useDebounce"
import { fetchPlaces, fetchPlacesSuccess } from "@/redux/actions/placeMapAction"
import type { InitialStateInterface } from "@/redux/reducers/placeMap/type"

function useMapSearch() {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const maps = useSelector((state: { places: InitialStateInterface}) => state.places)

  const debounceSearchValue = useDebounce(searchValue)

  useEffect(() => {
    if(debounceSearchValue) {
      dispatch(fetchPlaces(debounceSearchValue))
    } else {
      dispatch(fetchPlacesSuccess([]))
    }
  }, [debounceSearchValue])

  useEffect(() => {
    alert('For searching data using mock data, you can check here http://localhost:3000/api/mock. Because google APi no longer free to enables the key')
  }, [])

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
