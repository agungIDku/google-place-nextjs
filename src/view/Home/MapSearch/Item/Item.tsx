import { ShopOutlined, HomeOutlined  } from '@ant-design/icons'

import type { PlaceInterface } from '@/redux/reducers/placeMap/type'

import { StyledContainer } from './_Item'
import useItem from './useItem'

function Item({ type, name, address, coords }: PlaceInterface) {
  const { handleClick } = useItem()
  return (
    <StyledContainer onClick={() => handleClick(coords)}>
      {type === 'business' ? <ShopOutlined /> : <HomeOutlined />}
      <p>{name} <span>{address}</span></p>
    </StyledContainer>
  )
}

export default Item
