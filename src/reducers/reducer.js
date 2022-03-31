const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_CATEGORY':
			return { ...state, category: action.payload };
		default:
			throw new Error();
	}
};

export default reducer;
