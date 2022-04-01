import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Header from './components/Header';
//Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path='/Shopping-Cart' element={<HomePage />} />
					<Route path='/Shopping-Cart/products' element={<ProductsPage />} />
					<Route path='/Shopping-Cart/cart' element={<CartPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
