//Data
import allProducts from '../data/allProducts';

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_CATEGORY':
			return { ...state, category: action.payload };
		case 'ADD_TO_CART':
			const isProductInCart = state.cart.find((item) => item.id === action.payload);

			if (isProductInCart) {
				return state;
			} else {
				const item = allProducts.find((item) => item.id === action.payload);
				return { ...state, cart: [ ...state.cart, item ], cartAmount: state.cartAmount + 1 };
			}
		default:
			throw new Error();
	}
};

export default reducer;
