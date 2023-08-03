import Maps from '@/components/Map'
import useGetCoordinates from '@/hooks/useGetYourCoordinate'

import { StyledContainer, StyledSearchBar, StyledLoading } from './_Home'
import MapSearch from './MapSearch'

function Home() {
  const { isLoading } = useGetCoordinates()

  if (isLoading) {
    return (
      <StyledLoading>
        <p>Loading ...</p>
      </StyledLoading>
    )
  }

  return (
    <StyledContainer>
      <StyledSearchBar>
        <MapSearch />
      </StyledSearchBar>
      <Maps />
    </StyledContainer>
  )
}

export default Home
