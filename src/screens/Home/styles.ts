import { Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'

const isAndroid = Platform.OS === 'android'

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  flex: 1;
  background-color: #fafafa;
`

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`

export const TitleContainer = styled.View``

export const MenuContainer = styled.View`
  height: 50px;
  flex: 1;
`

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`

export const FooterContainer = styled.SafeAreaView``

export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`
