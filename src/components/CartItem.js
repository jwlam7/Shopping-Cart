import React, { Fragment } from 'react';
import styles from '../css/CartItem.module.css';

function CartItem(props) {
	const { cart, setCart, quantity, setQuantity } = props;
	const { id, name, price, src, alt } = props.product;
	const imgStyles = name.includes('KT Tape') ? styles.cartItemImgContain : styles.cartItemImgCover;

	const removeFromCart = (e) => {
		const productId = Number(e.target.getAttribute('data-productid'));
		const productList = cart.filter((item) => item.id !== productId);
		setCart([ ...productList ]);
	};

	const decrementQuantity = (e) => {
		const productId = Number(e.target.getAttribute('data-productid'));
		const currQuantity = quantity[id];
		if (currQuantity > 1) setQuantity({ ...quantity, [productId]: currQuantity - 1 });
	};

	const incrementQuantity = (e) => {
		const productId = Number(e.target.getAttribute('data-productid'));
		const currQuantity = quantity[id];
		if (currQuantity < 10) setQuantity({ ...quantity, [productId]: currQuantity + 1 });
	};

	const quantitySection = () => {
		return (
			<div className={styles.cartItemQuantity}>
				<button onClick={decrementQuantity} data-productid={id}>
					<i className="fa-solid fa-minus" />
				</button>
				<input value={quantity[id]} readOnly />
				<button onClick={incrementQuantity} data-productid={id}>
					<i className="fa-solid fa-plus" />
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
						<div className={styles.hiddenContainer}>{quantitySection()}</div>
					</span>
				</div>

				<div className={styles.visibleContainer}>{quantitySection()}</div>

				<div className={styles.cartItemPrice}>
					<span>${price * quantity[id]}</span>
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
