import React, { useRef, useEffect } from 'react';
//Styles
import styles from '../css/Item.module.css';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function Item(props) {
	const { id, name, price, src, alt, largeImage } = props;
	const { cart, addToCart, toggleModal } = useGlobalContext();
	const imgStyles = largeImage ? styles.itemImgContain : styles.itemImgCover;
	//for creating an alert message when adding item to cart
	const msg = useRef('');
	//for creating a setTimeout to remove the alert message
	const timerRef = useRef(null);

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

	//https://felixgerschau.com/react-hooks-settimeout/
	//clears the timeout immediately when navigating to another page
	useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
		<div className={styles.itemContainer}>
			<div className={styles.itemMsg}>
				<p ref={msg} />
			</div>

			<img src={src} alt={alt} className={imgStyles} onClick={() => toggleModal({ ...props })} />

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
