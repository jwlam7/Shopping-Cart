import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
	const [ cart, setCart ] = useState([]);
	const [ subtotal, setSubtotal ] = useState(0);

	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/Shopping-Cart" element={<HomePage />} />
					<Route
						path="/Shopping-Cart/products"
						element={
							<ProductsPage cart={cart} setCart={setCart} subtotal={subtotal} setSubtotal={setSubtotal} />
						}
					/>
					<Route
						path="/Shopping-Cart/cart"
						element={
							<CartPage cart={cart} setCart={setCart} subtotal={subtotal} setSubtotal={setSubtotal} />
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
