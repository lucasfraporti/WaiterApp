import styled from 'styled-components/native'

export const MenuProductContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const MenuProductImage = styled.Image`
  width: 120px;
  height: 90px;
  border-radius: 8px;
`

export const MenuProductDetails = styled.View`
  margin-left: 16px;
  flex: 1;
  gap: 8px;
`

export const MenuSeparator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`

export const MenuAddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`
