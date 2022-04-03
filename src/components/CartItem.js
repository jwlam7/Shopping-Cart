import React, { Fragment } from 'react';
//Styles
import styles from '../css/CartItem.module.css';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function CartItem(props) {
	const { id, name, price, src, alt, quantity, largeImage } = props;
	const { removeItem, decrementQuantity, incrementQuantity } = useGlobalContext();
	const imgStyles = largeImage ? styles.cartItemImgContain : styles.cartItemImgCover;

	const quantitySection = () => {
		return (
			<div className={styles.cartItemQuantity}>
				<button onClick={() => decrementQuantity(id)}>
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
