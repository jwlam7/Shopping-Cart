import React, { useReducer, useEffect, createContext, useContext } from 'react';
//Reducer
import reducer from '../reducers/reducer';

const initialState = {
	cart: [], //item objects in cart
	totalAmount: 0, //# of items in cart,
	totalDollars: 0, //$ of items in cart
	category: 'ALL PRODUCTS'
};

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const setCategory = (category) => {
		dispatch({ type: 'SET_CATEGORY', payload: category });
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

	useEffect(
		() => {
			dispatch({ type: 'GET_TOTALS' });
		},
		[ state.cart ]
	);

	return (
		<AppContext.Provider
			value={{ ...state, setCategory, addToCart, clearCart, removeItem, decrementQuantity, incrementQuantity }}
		>
			{children}
		</AppContext.Provider>
	);
};

//custom hook for useContext
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
