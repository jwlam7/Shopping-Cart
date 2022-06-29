import React, { useReducer, useEffect, createContext, useContext } from 'react';
//Reducer
import reducer from '../reducers/reducer';

const initialState = {
	cart: [], //item(s) in cart
	totalAmount: 0, //# of item(s) in cart
	totalDollars: 0, //$ of item(s) in cart
	category: 'ALL PRODUCTS', //filter products by category
	showModal: false, //open or close modal
	modalDetails: {}, //temporarily store current item, to display details in modal
	loading: false
};

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const setAllProducts = ({ products }) => {
		dispatch({ type: 'SET_ALLPRODUCTS', payload: products });
	};

	const setAllCategories = (allCategories) => {
		dispatch({ type: 'SET_ALLCATEGORIES', payload: allCategories });
	};

	const setCategory = (category) => {
		dispatch({ type: 'SET_CATEGORY', payload: category });
	};

	const setLoading = (isLoading) => {
		dispatch({ type: 'SET_LOADING', payload: isLoading });
	};

	const addToCart = (id) => {
		dispatch({ type: 'ADD_TO_CART', payload: id });
	};

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const removeItem = (id) => {
		dispatch({ type: 'REMOVE_ITEM', payload: id });
	};

	const decrementQuantity = (id) => {
		dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
	};

	const incrementQuantity = (id) => {
		dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
	};

	const toggleModal = (item) => {
		dispatch({ type: 'TOGGLE_MODAL', payload: item });
	};

	useEffect(
		() => {
			dispatch({ type: 'GET_TOTALS' });
		},
		[ state.cart ]
	);

	useEffect(() => {
		const initializeData = async () => {
			setLoading(true);
			try {
				const response = await fetch('https://rejuvenate-store.herokuapp.com/api');
				const data = await response.json();
				setAllProducts(data);

				const allCategories = await data.products.map((item) => item.category);
				setAllCategories([ ...new Set(allCategories), 'Shop All' ]);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		initializeData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				...state,
				setCategory,
				addToCart,
				clearCart,
				removeItem,
				decrementQuantity,
				incrementQuantity,
				toggleModal
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

//custom hook for useContext
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
