import { ShopOutlined, HomeOutlined  } from '@ant-design/icons'

import { StyledContainer } from './_Item'
import useItem from './useItem'

interface ItemInterface {
  type: 'business' | 'home'
  name: string
  address: string
  coords: {
    lat: number
    lng: number
  }
}

function Item({ type, name, address, coords }: ItemInterface) {
  const { handleClick } = useItem()
  return (
    <StyledContainer onClick={() => handleClick(coords)}>
      {type === 'business' ? <ShopOutlined /> : <HomeOutlined />}
      <p>{name} <span>{address}</span></p>
    </StyledContainer>
  )
}

export default Item
