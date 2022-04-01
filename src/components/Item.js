import React from 'react';
//Styles
import styles from '../css/Item.module.css';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function Item(props) {
	const { id, name, price, src, alt } = props;
	const { addToCart } = useGlobalContext();
	const imgStyles = name.includes('KT Tape') ? styles.itemImgContain : styles.itemImgCover;

	return (
		<div>
			<img src={src} alt={alt} className={imgStyles} />

			<div className={styles.itemDetails}>
				<div>
					<h2>{name}</h2>
					<h2>${price}</h2>
				</div>
				<div>
					<button onClick={() => addToCart(id)}>Add to Cart</button>
				</div>
			</div>
		</div>
	);
}

export default Item;
