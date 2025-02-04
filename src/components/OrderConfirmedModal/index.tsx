import { Modal } from 'react-native'
import { CheckCircle } from '../Icons/CheckCircle'
import { Text } from '../Text'
import {
	OrderConfirmedModalButton,
	OrderConfirmedModalContainer,
} from './styles'

interface OrderConfirmedModalProps {
	visible: boolean
	onOkPressed: () => void
}

export function OrderConfirmedModal({
	visible,
	onOkPressed,
}: OrderConfirmedModalProps) {
	return (
		<Modal visible={visible} animationType='fade'>
			<OrderConfirmedModalContainer>
				<CheckCircle />
				<Text size={20} weight='600' color='#fff' style={{ marginTop: 12 }}>
					Pedido confirmado
				</Text>
				<Text color='#fff' opacity={0.9} style={{ marginTop: 4 }}>
					O pedido já entrou na fila de produção!
				</Text>

				<OrderConfirmedModalButton onPress={onOkPressed}>
					<Text color='#d73035' weight='600'>
						OK
					</Text>
				</OrderConfirmedModalButton>
			</OrderConfirmedModalContainer>
		</Modal>
	)
}
