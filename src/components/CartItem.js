import React, { Fragment } from 'react';
//Styles
import styles from '../css/CartItem.module.css';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function CartItem(props) {
	const { id, name, price, src, alt, quantity } = props;
	const { removeItem, incrementQuantity } = useGlobalContext();
	const imgStyles = name.includes('KT Tape') ? styles.cartItemImgContain : styles.cartItemImgCover;

	// const decrementQuantity = (e) => {
	// 	const productId = Number(e.target.getAttribute('data-productid'));
	// 	const currQuantity = quantity[id];
	// 	if (currQuantity > 1) setQuantity({ ...quantity, [productId]: currQuantity - 1 });
	// };

	const quantitySection = () => {
		return (
			<div className={styles.cartItemQuantity}>
				<button onClick={() => console.log('decrement')}>
					<i className='fa-solid fa-minus' />
				</button>
				<input value={quantity} readOnly />
				<button onClick={() => incrementQuantity(id)}>
					<i className='fa-solid fa-plus' />
				</button>
			</div>
		);
	};

	return (
		<Fragment>
			<div className={styles.cartItemContainer}>
				<div className={styles.cartItemProduct}>
					<img src={src} alt={alt} className={imgStyles} />
					<span>
						<div>{name}</div>
						<div className={styles.hiddenContainer}>{quantitySection()}</div>
					</span>
				</div>

				<div className={styles.visibleContainer}>{quantitySection()}</div>

				<div className={styles.cartItemPrice}>
					<div>${price * quantity}</div>
					<button onClick={() => removeItem(id)}>Remove</button>
				</div>
			</div>

			<hr />
		</Fragment>
	);
}

export default CartItem;
