import { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { Text } from '../Text'
import {
	TableModalBody,
	TableModalForm,
	TableModalHeader,
	TableModalInput,
	TableModalOverlay,
} from './styles'

interface TableModalProps {
	visible: boolean
	onClose: () => void
	onSave: (tableNumber: string) => void
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
	const [tableNumber, setTableNumber] = useState('')

	function handleSave() {
		setTableNumber('')
		onSave(tableNumber)
		onClose()
	}

	return (
		<Modal visible={visible} transparent animationType='fade'>
			<TableModalOverlay behavior='padding'>
				<TableModalBody>
					<TableModalHeader>
						<Text weight='600'>Informe o número da mesa</Text>
						<TouchableOpacity onPress={onClose}>
							<Close color='#666' />
						</TouchableOpacity>
					</TableModalHeader>

					<TableModalForm>
						<TableModalInput
							placeholder='Número da mesa'
							placeholderTextColor='#666'
							keyboardType='numeric'
							value={tableNumber}
							onChangeText={setTableNumber}
						/>

						<Button onPress={handleSave} disabled={tableNumber.length === 0}>
							Salvar
						</Button>
					</TableModalForm>
				</TableModalBody>
			</TableModalOverlay>
		</Modal>
	)
}
