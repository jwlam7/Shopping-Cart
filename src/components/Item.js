import React from 'react';
import allProducts from '../data/allProducts';
import styles from '../css/Item.module.css';

function Item(props) {
	const { cart, setCart, subtotal, setSubtotal } = props;
	const { id, name, price, src, alt } = props.product;
	const imgStyles = name.includes('KT Tape') ? styles.itemImgContain : styles.itemImgCover;

	const addToCart = (e) => {
		const productId = Number(e.target.getAttribute('data-productid'));

		if (!isProductInCart(productId)) {
			const product = allProducts.find((item) => item.id === productId);
			setCart([ ...cart, product ]);
			calculateSubtotal(product);
		}
	};

	const isProductInCart = (id) => {
		return !!cart.find((item) => item.id === id);
	};

	const calculateSubtotal = (product) => {
		setSubtotal((prevState) => prevState + product.price);
	};

	return (
		<div>
			<img src={src} alt={alt} className={imgStyles} />

			<div className={styles.itemDetails}>
				<div>
					<h2>{name}</h2>
					<h2>${price}</h2>
				</div>
				<div>
					<button onClick={addToCart} data-productid={id}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default Item;
