const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_ALLPRODUCTS':
			return { ...state, allProducts: action.payload };
		case 'SET_ALLCATEGORIES':
			return { ...state, allCategories: action.payload };
		case 'SET_CATEGORY':
			return { ...state, category: action.payload };
		case 'SET_LOADING':
			return { ...state, loading: action.payload };
		case 'ADD_TO_CART':
			const item = state.allProducts.find((item) => item._id === action.payload);
			return { ...state, cart: [ ...state.cart, item ] };
		case 'CLEAR_CART':
			return { ...state, cart: [] };
		case 'REMOVE_ITEM':
			const newCart = state.cart.filter((item) => item._id !== action.payload);
			return { ...state, cart: newCart };
		case 'DECREMENT_QUANTITY':
			const newCart2 = state.cart.map((item) => {
				if (item.quantity > 1 && item._id === action.payload) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return { ...item };
			});
			return { ...state, cart: newCart2 };
		case 'INCREMENT_QUANTITY':
			const newCart3 = state.cart.map((item) => {
				if (item.quantity < 10 && item._id === action.payload) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return { ...item };
			});
			return { ...state, cart: newCart3 };
		case 'TOGGLE_MODAL':
			return { ...state, showModal: !state.showModal, modalDetails: { ...action.payload } };
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
