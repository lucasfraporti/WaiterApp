import { FlatList, Modal } from 'react-native'
import type { Product } from '../../types/Product'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { Text } from '../Text'
import {
	ProductModalBody,
	ProductModalCloseButton,
	ProductModalHeader,
	ProductModalImage,
	ProductModalIngredient,
	ProductModalIngredientsContainer,
	ProductModalPriceContainer,
	ProdutModalFooter,
	ProdutModalFooterContainer,
} from './styles'

interface ProductModalProps {
	visible: boolean
	onClose: () => void
	product: Product | null
	onAddToCart: (product: Product) => void
}

export function ProductModal({
	visible,
	onClose,
	product,
	onAddToCart,
}: ProductModalProps) {
	if (!product) return null

	function handleAddToCart() {
		onAddToCart(product!)
		onClose()
	}

	return (
		<Modal
			visible={visible}
			animationType='slide'
			presentationStyle='pageSheet' // iOS only
			onRequestClose={onClose}
		>
			<ProductModalImage
				source={{
					uri: `http://localhost:3001/uploads/${product?.imagePath}`,
				}}
			>
				<ProductModalCloseButton onPress={onClose}>
					<Close />
				</ProductModalCloseButton>
			</ProductModalImage>

			<ProductModalBody>
				<ProductModalHeader>
					<Text size={24} weight='600'>
						{product.name}
					</Text>
					<Text color='#666' style={{ marginTop: 8 }}>
						{product.description}
					</Text>
				</ProductModalHeader>

				{product.ingredients.length > 0 && (
					<ProductModalIngredientsContainer>
						<Text weight='600' color='#666'>
							Ingredientes
						</Text>

						<FlatList
							style={{ marginTop: 16 }}
							data={product.ingredients}
							keyExtractor={ingredient => ingredient._id}
							showsVerticalScrollIndicator={false}
							renderItem={({ item: ingredient }) => (
								<ProductModalIngredient>
									<Text style={{ marginRight: 20 }}>{ingredient.icon}</Text>
									<Text size={14} color='#666'>
										{ingredient.name}
									</Text>
								</ProductModalIngredient>
							)}
						/>
					</ProductModalIngredientsContainer>
				)}
			</ProductModalBody>

			<ProdutModalFooter>
				<ProdutModalFooterContainer>
					<ProductModalPriceContainer>
						<Text color='#666'>Preço</Text>
						<Text size={20} weight='600'>
							{formatCurrency(product.price)}
						</Text>
					</ProductModalPriceContainer>

					<Button onPress={handleAddToCart}>Adicionar ao pedido</Button>
				</ProdutModalFooterContainer>
			</ProdutModalFooter>
		</Modal>
	)
}
