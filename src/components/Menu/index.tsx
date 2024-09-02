import { useState } from 'react'
import { FlatList } from 'react-native'
import type { Product } from '../../types/Product'
import { formatCurrency } from '../../utils/formatCurrency'
import { PlusCircle } from '../Icons/PlusCircle'
import { ProductModal } from '../ProductModal'
import { Text } from '../Text'
import {
	MenuAddToCartButton,
	MenuProductContainer,
	MenuProductDetails,
	MenuProductImage,
	MenuSeparator,
} from './styles'

interface MenuProps {
	onAddToCart: (product: Product) => void
	products: Product[]
}

export function Menu({ onAddToCart, products }: MenuProps) {
	const [isProductModalVisible, setIsProductModalVisible] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

	function handleOpenProductModal(product: Product) {
		setIsProductModalVisible(true)
		setSelectedProduct(product)
	}

	return (
		<>
			<ProductModal
				visible={isProductModalVisible}
				onClose={() => setIsProductModalVisible(false)}
				product={selectedProduct}
				onAddToCart={onAddToCart}
			/>

			<FlatList
				data={products}
				style={{ marginTop: 32 }}
				contentContainerStyle={{ paddingHorizontal: 24 }}
				keyExtractor={product => product._id}
				ItemSeparatorComponent={MenuSeparator}
				renderItem={({ item: product }) => (
					<MenuProductContainer onPress={() => handleOpenProductModal(product)}>
						<MenuProductImage
							source={{
								uri: `http://localhost:3001/uploads/${product.imagePath}`,
							}}
						/>
						<MenuProductDetails>
							<Text weight='600'>{product.name}</Text>
							<Text size={14} color='#666'>
								{product.description}
							</Text>
							<Text size={14} weight='600'>
								{formatCurrency(product.price)}
							</Text>
						</MenuProductDetails>

						<MenuAddToCartButton onPress={() => onAddToCart(product)}>
							<PlusCircle />
						</MenuAddToCartButton>
					</MenuProductContainer>
				)}
			/>
		</>
	)
}
