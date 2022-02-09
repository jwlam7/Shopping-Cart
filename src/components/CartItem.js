import React, { Fragment } from 'react';
import styles from '../css/CartItem.module.css';

function CartItem(props) {
	const { name, price, src, alt } = props.product;
	const imgStyles = name.includes('KT Tape') ? styles.cartItemImgContain : styles.cartItemImgCover;

	const quantity = () => {
		return (
			<div className={styles.cartItemQuantity}>
				<button>
					<i class="fa-solid fa-minus" />
				</button>
				<input value={1} />
				<button>
					<i class="fa-solid fa-plus" />
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
						<span>{name}</span>
						<div className={styles.hiddenContainer}>{quantity()}</div>
					</span>
				</div>

				<div className={styles.visibleContainer}>{quantity()}</div>

				<div className={styles.cartItemPrice}>
					<span>${price}</span>
					<button>Remove</button>
				</div>
			</div>

			<hr />
		</Fragment>
	);
}

export default CartItem;
