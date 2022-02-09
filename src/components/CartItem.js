import React, { Fragment } from 'react';
import styles from '../css/CartItem.module.css';

function CartItem(props) {
	const { cart, setCart } = props;
	const { id, name, price, src, alt } = props.product;
	const imgStyles = name.includes('KT Tape') ? styles.cartItemImgContain : styles.cartItemImgCover;

	const removeFromCart = (e) => {
		const productId = Number(e.target.getAttribute('data-productid'));
		const productList = cart.filter((item) => item.id !== productId);
		setCart([ ...productList ]);
	};

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
					<button onClick={removeFromCart} data-productid={id}>
						Remove
					</button>
				</div>
			</div>

			<hr />
		</Fragment>
	);
}

export default CartItem;
