import styled from 'styled-components/native'

export const ProductModalImage = styled.ImageBackground`
  width: 100%;
  height: 200px;
`

export const ProductModalCloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 24px;
  top: 24px;
`

export const ProductModalBody = styled.View`
  background: #fafafa;
  flex: 1;
  padding: 32px 24px 0;
`

export const ProductModalHeader = styled.View``

export const ProductModalIngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`

export const ProductModalIngredient = styled.View`
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`

export const ProdutModalFooter = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`

export const ProdutModalFooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ProductModalPriceContainer = styled.View``
