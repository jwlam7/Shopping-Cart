import allProducts from './allProducts';

function getCategories() {
	const categories = allProducts.map((item) => {
		return item.category;
	});
	return [ ...new Set(categories), 'Shop All' ];
}

export default getCategories;
