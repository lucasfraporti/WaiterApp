import { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import type { CartItem } from '../../types/CartItem'
import type { Product } from '../../types/Product'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../Button'
import { MinusCircle } from '../Icons/MinusCircle'
import { PlusCircle } from '../Icons/PlusCircle'
import { OrderConfirmedModal } from '../OrderConfirmedModal'
import { Text } from '../Text'
import {
	CartActions,
	CartImage,
	CartItemContainer,
	CartProductContainer,
	CartProductDetails,
	CartQuantityContainer,
	CartSummary,
	CartTotalContainer,
} from './styles'

interface CartProps {
	cartItems: CartItem[]
	onAddToCart: (product: Product) => void
	onRemoveFromCart: (product: Product) => void
	onConfirmOrder: () => void
}

export function Cart({
	cartItems,
	onAddToCart,
	onRemoveFromCart,
	onConfirmOrder,
}: CartProps) {
	const [isOrderConfirmedModalVisible, setIsOrderConfirmedModalVisible] =
		useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const total = cartItems.reduce((acc, cartItem) => {
		return acc + cartItem.quantity * cartItem.product.price
	}, 0)

	function handleConfirmOrder() {
		setIsOrderConfirmedModalVisible(true)
	}

	function handleOkPressed() {
		onConfirmOrder()
		setIsOrderConfirmedModalVisible(false)
	}

	return (
		<>
			<OrderConfirmedModal
				visible={isOrderConfirmedModalVisible}
				onOkPressed={handleOkPressed}
			/>

			{cartItems.length > 0 && (
				<FlatList
					style={{ marginBottom: 20, maxHeight: 150 }}
					data={cartItems}
					keyExtractor={cartItem => cartItem.product._id}
					showsVerticalScrollIndicator={false}
					renderItem={({ item: cartItem }) => (
						<CartItemContainer>
							<CartProductContainer>
								<CartImage
									source={{
										uri: `http://localhost:3001/uploads/${cartItem.product.imagePath}`,
									}}
								/>
								<CartQuantityContainer>
									<Text size={14} color='#666'>
										{cartItem.quantity}x
									</Text>
								</CartQuantityContainer>

								<CartProductDetails>
									<Text size={14} weight='600'>
										{cartItem.product.name}
									</Text>
									<Text size={14} color='#666' style={{ marginTop: 4 }}>
										{formatCurrency(cartItem.product.price)}
									</Text>
								</CartProductDetails>
							</CartProductContainer>

							<CartActions>
								<TouchableOpacity
									style={{ marginRight: 24 }}
									onPress={() => onAddToCart(cartItem.product)}
								>
									<PlusCircle />
								</TouchableOpacity>

								<TouchableOpacity
									onPress={() => onRemoveFromCart(cartItem.product)}
								>
									<MinusCircle />
								</TouchableOpacity>
							</CartActions>
						</CartItemContainer>
					)}
				/>
			)}

			<CartSummary>
				<CartTotalContainer>
					{cartItems.length > 0 ? (
						<>
							<Text color='#666'>Total</Text>
							<Text size={20} weight='600'>
								{formatCurrency(total)}
							</Text>
						</>
					) : (
						<Text color='#999'>Seu carrinho está vazio</Text>
					)}
				</CartTotalContainer>

				<Button
					onPress={handleConfirmOrder}
					disabled={cartItems.length === 0}
					isLoading={isLoading}
				>
					Confirmar pedido
				</Button>
			</CartSummary>
		</>
	)
}
