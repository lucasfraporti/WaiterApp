import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Button } from '../../components/Button'
import { Cart } from '../../components/Cart'
import { Categories } from '../../components/Categories'
import { Header } from '../../components/Header'
import { Empty } from '../../components/Icons/Empty'
import { Menu } from '../../components/Menu'
import { TableModal } from '../../components/TableModal'
import { Text } from '../../components/Text'
import { products as mockProducts } from '../../mocks/products'
import type { CartItem } from '../../types/CartItem'
import type { Product } from '../../types/Product'
import {
	CategoriesContainer,
	CenteredContainer,
	Container,
	Footer,
	FooterContainer,
	MenuContainer,
} from './styles'

export function Home() {
	const [isTableModalVisible, setIsTableModalVisible] = useState(false)
	const [selectedTable, setSelectedTable] = useState('')
	const [cartItems, setCartItems] = useState<CartItem[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [products, setProducts] = useState<Product[]>(mockProducts)

	function handleSaveTableNumber(tableNumber: string) {
		setSelectedTable(tableNumber)
	}

	function handleResetOrder() {
		setSelectedTable('')
		setCartItems([])
	}

	function handleAddToCart(product: Product) {
		if (!selectedTable) {
			setIsTableModalVisible(true)
		}

		setCartItems(prevState => {
			const itemIndex = prevState.findIndex(
				cartItem => cartItem.product._id === product._id
			)

			if (itemIndex < 0) {
				return [...prevState, { quantity: 1, product }]
			}

			const newCartItems = [...prevState]
			newCartItems[itemIndex].quantity++

			return newCartItems
		})
	}

	function handleRemoveFromCart(product: Product) {
		setCartItems(prevState => {
			const itemIndex = prevState.findIndex(
				cartItem => cartItem.product._id === product._id
			)

			const item = prevState[itemIndex]
			const newCartItems = [...prevState]

			if (item.quantity === 1) {
				newCartItems.splice(itemIndex, 1)
				return newCartItems
			}

			newCartItems[itemIndex].quantity--
			return newCartItems
		})
	}

	return (
		<>
			<Container>
				<Header
					selectedTable={selectedTable}
					onCancelOrder={handleResetOrder}
				/>

				{isLoading && (
					<CenteredContainer>
						<ActivityIndicator color='#d73035' size='large' />
					</CenteredContainer>
				)}

				{!isLoading && (
					<>
						<CategoriesContainer>
							<Categories />
						</CategoriesContainer>

						{products.length > 0 ? (
							<MenuContainer>
								<Menu onAddToCart={handleAddToCart} products={products} />
							</MenuContainer>
						) : (
							<CenteredContainer>
								<Empty />
								<Text color='#666' style={{ marginTop: 24 }}>
									Nenhum produto foi encontrado.
								</Text>
							</CenteredContainer>
						)}
					</>
				)}
			</Container>

			<Footer>
				<FooterContainer>
					{!selectedTable && (
						<Button
							onPress={() => setIsTableModalVisible(true)}
							disabled={isLoading}
						>
							Novo pedido
						</Button>
					)}

					{selectedTable && (
						<Cart
							cartItems={cartItems}
							onAddToCart={handleAddToCart}
							onRemoveFromCart={handleRemoveFromCart}
							onConfirmOrder={handleResetOrder}
						/>
					)}
				</FooterContainer>
			</Footer>

			<TableModal
				visible={isTableModalVisible}
				onClose={() => setIsTableModalVisible(false)}
				onSave={handleSaveTableNumber}
			/>
		</>
	)
}
