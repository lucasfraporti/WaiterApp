import styled from 'styled-components/native'

interface ButtonContainerProps {
	disabled?: boolean
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background: ${({ disabled }) => (disabled ? '#999' : '#d73035')};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
`
