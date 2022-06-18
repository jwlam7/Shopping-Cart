import React, { useRef, useEffect, useState } from 'react';
//Styles
import styles from '../css/Item.module.css';
//Components
import Notification from './Notification';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function Item(props) {
	const { id, name, price, src, alt, largeImage } = props;
	const { cart, addToCart, toggleModal } = useGlobalContext();
	const imgStyles = largeImage ? styles.itemImgContain : styles.itemImgCover;
	//for creating and displaying alert message
	const [ notification, setNotification ] = useState({ type: '', message: '' });
	const [ showNotification, setShowNotification ] = useState(false);
	//for creating a setTimeout to remove the alert message
	const timerRef = useRef(null);

	const handleClick = (id) => {
		const isProductInCart = cart.find((item) => item.id === id);
		if (!isProductInCart) {
			addToCart(id);
			setNotification({ type: 'success', message: 'Successfully added to cart!' });
		} else {
			setNotification({ type: 'info', message: `${name} is already in cart` });
		}
		setShowNotification(true);
		timerRef.current = setTimeout(() => setShowNotification(false), 2000);
	};

	//https://felixgerschau.com/react-hooks-settimeout/
	//clears the timeout immediately when navigating to another page
	useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
		<div className={styles.itemContainer}>
			<div className={styles.itemMsg}>{showNotification && <Notification {...notification} />}</div>

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
