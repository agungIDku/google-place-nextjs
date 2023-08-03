import { useDispatch, useSelector } from 'react-redux'

import useGetYourCoordinate from '@/hooks/useGetYourCoordinate'

function useMap() {
  const { coordinate, isLoading } = useGetYourCoordinate()
  const { choosenPlace } = useSelector((state) => state.places)

  return {
    isLoading,
    choosenPlace,
    isChoosenPlace: !!choosenPlace.lat && !!choosenPlace.lng,
    coordinate
  }
}

export default useMap
