import React, { useRef, useEffect } from 'react';
//Styles
import styles from '../css/Item.module.css';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function Item(props) {
	const { id, name, price, src, alt } = props;
	const { cart, addToCart } = useGlobalContext();
	const msg = useRef('');
	const timerRef = useRef(null);
	const imgStyles = name.includes('KT Tape') ? styles.itemImgContain : styles.itemImgCover;

	const handleClick = (id) => {
		const isProductInCart = cart.find((item) => item.id === id);
		if (!isProductInCart) {
			addToCart(id);
			msg.current.innerHTML = 'Successfully added to cart!';
		} else {
			msg.current.innerHTML = 'Item is already in cart';
		}
		timerRef.current = setTimeout(() => (msg.current.innerHTML = ''), 2000);
	};

	useEffect(() => {
		//https://felixgerschau.com/react-hooks-settimeout/
		//clears the timeout when navigating to another page
		return () => clearTimeout(timerRef.current);
	}, []);

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
