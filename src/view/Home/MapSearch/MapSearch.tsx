import { Input } from 'antd'

import { StyledSearchBar, StyledResultData } from './_MapSearch'
import useMapSearch from './useMapSearch'
import Item from './Item'

function MapSearch() {
  const { searchValue, handleChange, maps } = useMapSearch()

  return (
    <StyledSearchBar>
      <Input size="large" onChange={handleChange} value={searchValue} placeholder="Search place ..." />
      {!!maps.places.length && (
        <StyledResultData>
          {maps.places?.map((el, index: number) => (
            <Item key={index} {...el}/>
          ))}
        </StyledResultData>
      )}

    </StyledSearchBar>
  )
}

export default MapSearch
