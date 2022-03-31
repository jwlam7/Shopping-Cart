import React, { useEffect } from 'react';
//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from '../css/ProductsPage.module.css';
//Components
import Item from '../components/Item';
//Data
import allProducts from '../data/allProducts';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function ProductsPage() {
	const { category, setCategory } = useGlobalContext();

	const updateCategory = (e) => {
		const isShopAll = e.target.className.includes('shop-all');
		isShopAll ? setCategory('ALL PRODUCTS') : setCategory(e.target.innerHTML);
	};

	const displayCategory = () => {
		const display = category === 'ALL PRODUCTS' ? getAllProducts() : getFilteredProducts();
		return display;
	};

	const getAllProducts = () => {
		return allProducts.map((item) => {
			return console.log(item);
			// return <Item key={item.id} product={item} {...props} />;
		});
	};

	const getFilteredProducts = () => {
		return allProducts.filter((item) => item.category === category).map((filteredItem) => {
			return console.log(filteredItem);
			// return <Item key={filteredItem.id} product={filteredItem} {...props} />;
		});
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.productsPageContainer}>
			<div className={styles.productsPageCategories}>
				<h1>{category}</h1>
				<hr />
				<div className={styles.productsPageLinks}>
					<Link to={'/Shopping-Cart/products'} onClick={updateCategory}>
						<h1>Percussion</h1>
						<br />
					</Link>
					<Link to={'/Shopping-Cart/products'} onClick={updateCategory}>
						<h1>Vibration</h1>
						<br />
					</Link>
					<Link to={'/Shopping-Cart/products'} onClick={updateCategory}>
						<h1>Taping</h1>
						<br />
					</Link>
					<Link to={'/Shopping-Cart/products'} onClick={updateCategory}>
						<h2 className='shop-all'>
							Shop All{'  '}
							<i className='fas fa-long-arrow-alt-right shop-all' />
						</h2>
						<br />
					</Link>
				</div>
			</div>

			<div className={styles.productsPageItem}>{displayCategory()}</div>
		</div>
	);
}

export default ProductsPage;
