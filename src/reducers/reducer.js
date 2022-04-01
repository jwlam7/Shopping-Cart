//Data
import allProducts from '../data/allProducts';

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_CATEGORY':
			return { ...state, category: action.payload };
		case 'ADD_TO_CART':
			const item = allProducts.find((item) => item.id === action.payload);
			return { ...state, cart: [ ...state.cart, item ] };
		case 'CLEAR_CART':
			return { ...state, cart: [] };
		case 'GET_TOTALS':
			const { totalAmount, totalDollars } = state.cart.reduce(
				(sum, nextItem) => {
					sum.totalAmount += nextItem.quantity;
					sum.totalDollars += nextItem.quantity * nextItem.price;
					return sum;
				},
				{
					totalAmount: 0,
					totalDollars: 0
				}
			);
			return { ...state, totalAmount, totalDollars: totalDollars.toFixed(2) };
		default:
			throw new Error();
	}
};

export default reducer;
