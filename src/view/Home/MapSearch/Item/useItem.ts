import { useDispatch } from 'react-redux'

import { setChoosenPlace } from '@/redux/actions/placeMapAction'
import type { InitialStateInterface } from '@/redux/reducers/placeMap/type'

function useItem() {
  const dispatch = useDispatch()

  const handleClick = (coordinate: InitialStateInterface['choosenPlace']) => {
    dispatch(setChoosenPlace(coordinate))
  }

  return {
    handleClick
  }
}

export default useItem
