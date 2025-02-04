import { useState } from 'react'
import { FlatList } from 'react-native'
import { categories } from '../../mocks/categories'
import { Text } from '../Text'
import { CategoriesIcon, Category } from './styles'

export function Categories() {
	const [selectedCategory, setSelectedCategory] = useState('')

	function handleSelectCategory(categoryId: string) {
		const category = selectedCategory === categoryId ? '' : categoryId
		setSelectedCategory(category)
	}

	return (
		<FlatList
			horizontal
			data={categories}
			contentContainerStyle={{ paddingRight: 24 }}
			showsHorizontalScrollIndicator={false}
			keyExtractor={category => category._id}
			renderItem={({ item: category }) => {
				const isSelected = selectedCategory === category._id

				return (
					<Category onPress={() => handleSelectCategory(category._id)}>
						<CategoriesIcon>
							<Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
						</CategoriesIcon>
						<Text size={14} weight='600' opacity={isSelected ? 1 : 0.5}>
							{category.name}
						</Text>
					</Category>
				)
			}}
		/>
	)
}
