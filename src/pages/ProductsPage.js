import React from 'react';
import Item from '../components/Item';
import allProducts from '../data/allProducts';
import styles from '../css/ProductsPage.module.css';

function ProductsPage() {
	return (
		<div className={styles.productPageContainer}>
			<div className={styles.productPageCategories}>
				<h1>ALL PRODUCTS</h1>
				<hr />
				<div className={styles.productPageLinks}>
					<h1>Percussion</h1>
					<h1>Vibration</h1>
					<h1>Taping</h1>
					<h2>
						Shop All{'  '}
						<i className="fas fa-long-arrow-alt-right" />
					</h2>
				</div>
			</div>

			<div className={styles.productPageItem}>
				{allProducts.map((item) => <Item key={item.id} product={item} />)}
			</div>
		</div>
	);
}

export default ProductsPage;
