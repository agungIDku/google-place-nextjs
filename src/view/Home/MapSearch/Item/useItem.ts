import { useDispatch, useSelector } from 'react-redux'

import { setChoosenPlace } from '@/redux/actions/placeMapAction'

function useItem() {
  const dispatch = useDispatch()

  const handleClick = (coordinate) => {
    dispatch(setChoosenPlace(coordinate))
  }

  return {
    handleClick
  }
}

export default useItem
