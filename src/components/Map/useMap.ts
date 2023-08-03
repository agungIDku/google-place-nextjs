import { useSelector } from 'react-redux'

import type { InitialStateInterface } from '@/redux/reducers/placeMap/type'
import useGetYourCoordinate from '@/hooks/useGetYourCoordinate'

function useMap() {
  const { coordinate, isLoading } = useGetYourCoordinate()
  const { choosenPlace } = useSelector((state: { places: InitialStateInterface}) => state.places)


  return {
    isLoading,
    choosenPlace,
    isChoosenPlace: !!choosenPlace.lat && !!choosenPlace.lng,
    coordinate
  }
}

export default useMap
