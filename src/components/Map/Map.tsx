import GoogleMapReact from 'google-map-react'

import MapMarker from '@/components/Icons/MapMarker'

import useMap from './useMap'
import { StyledContainer } from './_Map'

function Map() {
  const { isLoading, choosenPlace, isChoosenPlace, coordinate } = useMap()

  if(isLoading) return null

  return (
    <StyledContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyACuixL6nM4aQk9BGdz4v3LEjaXp8883kw' }}
        center={isChoosenPlace ? choosenPlace : coordinate}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
      >
        <MapMarker
          lat={isChoosenPlace ? choosenPlace.lat : coordinate.lat}
          lng={isChoosenPlace ? choosenPlace.lng : coordinate.lng}
        />
      </GoogleMapReact>
    </StyledContainer>
  )
}

export default Map
