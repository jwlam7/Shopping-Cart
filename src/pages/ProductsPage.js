import React, { useEffect } from 'react';
//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from '../css/ProductsPage.module.css';
//Components
import Item from '../components/Item';
//Data
import allProducts from '../data/allProducts';
import getCategories from '../data/allCategories';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function ProductsPage() {
	const { category, setCategory } = useGlobalContext();
	const links = getCategories();

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
			return <Item key={item.id} {...item} />;
		});
	};

	const getFilteredProducts = () => {
		return allProducts.filter((item) => item.category === category).map((filteredItem) => {
			return <Item key={filteredItem.id} {...filteredItem} />;
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
					{links.map((link, idx) => {
						if (link !== 'Shop All') {
							return (
								<Link to={'/Shopping-Cart/products'} key={idx} onClick={updateCategory}>
									<h1>{link}</h1>
									<br />
								</Link>
							);
						} else {
							return (
								<Link to={'/Shopping-Cart/products'} key={idx} onClick={updateCategory}>
									<h2 className='shop-all'>
										{link}
										{'  '}
										<i className='fas fa-long-arrow-alt-right shop-all' />
									</h2>
								</Link>
							);
						}
					})}
				</div>
			</div>

			<div className={styles.productsPageItem}>{displayCategory()}</div>
		</div>
	);
}

export default ProductsPage;
