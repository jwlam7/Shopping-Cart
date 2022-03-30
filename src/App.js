import React, { useState } from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
	const [ cart, setCart ] = useState([]);
	const [ quantity, setQuantity ] = useState({});
	const [ category, setCategory ] = useState('ALL PRODUCTS');

	return (
		<Router>
			<div>
				<Header setCategory={setCategory} />
				<Routes>
					<Route path='/Shopping-Cart' element={<HomePage />} />
					<Route
						path='/Shopping-Cart/products'
						element={
							<ProductsPage
								cart={cart}
								setCart={setCart}
								quantity={quantity}
								setQuantity={setQuantity}
								category={category}
								setCategory={setCategory}
							/>
						}
					/>
					<Route
						path='/Shopping-Cart/cart'
						element={
							<CartPage cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
