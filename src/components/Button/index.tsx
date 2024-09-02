import { ActivityIndicator } from 'react-native'
import { Text } from '../Text'
import { ButtonContainer } from './styles'

interface ButtonProps {
	children: string
	onPress: () => void
	disabled?: boolean
	isLoading?: boolean
}

export function Button({
	children,
	onPress,
	disabled,
	isLoading,
}: ButtonProps) {
	return (
		<ButtonContainer onPress={onPress} disabled={disabled || isLoading}>
			{!isLoading ? (
				<Text weight='600' color='#fff'>
					{children}
				</Text>
			) : (
				<ActivityIndicator color='#fff' />
			)}
		</ButtonContainer>
	)
}
