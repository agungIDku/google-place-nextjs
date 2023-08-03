import { useEffect, useState, useMemo } from 'react'

function useGetYourCoordinate () {
  const [coordinate, setCoordinate] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(function (position) {
      setCoordinate({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }, [])

  const isLoading = useMemo(() => !coordinate.lat || !coordinate.lng, [coordinate])

  return { coordinate, isLoading}
}

export default useGetYourCoordinate
