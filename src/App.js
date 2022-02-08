import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
