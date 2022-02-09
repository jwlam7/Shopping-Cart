import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import allProducts from '../data/allProducts';
import styles from '../css/ProductsPage.module.css';

function ProductsPage(props) {
	const initialTitle = 'ALL PRODUCTS';
	const [ category, setCategory ] = useState(initialTitle);

	const updateCategory = (e) => {
		const isShopAll = e.target.className.includes('shop-all');
		isShopAll ? setCategory(initialTitle) : setCategory(e.target.innerText);
	};

	const displayCategory = () => {
		const display =
			category === 'ALL PRODUCTS'
				? allProducts.map((item) => {
						return <Item key={item.id} product={item} {...props} />;
					})
				: allProducts.filter((item) => item.category === category).map((filteredItem) => {
						return <Item key={filteredItem.id} product={filteredItem} {...props} />;
					});

		return display;
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
					<Link to={'/products'} onClick={updateCategory}>
						<h1>Percussion</h1>
						<br />
					</Link>
					<Link to={'/products'} onClick={updateCategory}>
						<h1>Vibration</h1>
						<br />
					</Link>
					<Link to={'/products'} onClick={updateCategory}>
						<h1>Taping</h1>
						<br />
					</Link>
					<Link to={'/products'} onClick={updateCategory}>
						<h2 className="shop-all">
							Shop All{'  '}
							<i className="fas fa-long-arrow-alt-right shop-all" />
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
