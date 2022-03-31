import React, { useReducer, createContext, useContext } from 'react';
//Reducer
import reducer from '../reducers/reducer';

const initialState = {
	cart: [], //item objects in cart
	cartAmount: 0, //# of items in cart,
	dollars: 0, //$ of items in cart
	category: 'ALL PRODUCTS'
};

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const setCategory = (category) => {
		dispatch({ type: 'SET_CATEGORY', payload: category });
	};

	return <AppContext.Provider value={{ ...state, setCategory }}>{children}</AppContext.Provider>;
};

//custom hook for useContext
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
