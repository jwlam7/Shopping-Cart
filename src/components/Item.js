import React, { useRef } from 'react';
//Styles
import styles from '../css/Item.module.css';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function Item(props) {
	const { id, name, price, src, alt } = props;
	const { cart, addToCart } = useGlobalContext();
	const msg = useRef('');
	const imgStyles = name.includes('KT Tape') ? styles.itemImgContain : styles.itemImgCover;

	const handleClick = (id) => {
		const isProductInCart = cart.find((item) => item.id === id);
		if (!isProductInCart) {
			addToCart(id);
			msg.current.innerHTML = 'Successfully added to cart!';
		} else {
			msg.current.innerHTML = 'Item is already in cart';
		}
		setTimeout(() => (msg.current.innerHTML = ''), 3000);
	};

	return (
		<div className={styles.itemContainer}>
			<div className={styles.itemMsg}>
				<p ref={msg} />
			</div>

			<img src={src} alt={alt} className={imgStyles} />

			<div className={styles.itemDetails}>
				<div>
					<h2>{name}</h2>
					<h2>${price}</h2>
				</div>
				<div>
					<button onClick={() => handleClick(id)}>Add to Cart</button>
				</div>
			</div>
		</div>
	);
}

export default Item;
