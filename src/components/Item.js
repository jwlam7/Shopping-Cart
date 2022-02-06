import React from 'react';
import styles from '../css/Item.module.css';

function Item(props) {
	const { name, price, src, alt } = props.product;
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
					<button>Add to Cart</button>
				</div>
			</div>
		</div>
	);
}

export default Item;
