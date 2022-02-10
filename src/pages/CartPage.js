import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import styles from '../css/CartPage.module.css';

function CartPage(props) {
	const { cart, subtotal } = props;
	const isCartEmpty = cart.length === 0 ? true : false;
	const btnStyles = isCartEmpty ? styles.cartPageCheckoutBtnEmpty : styles.cartPageCheckoutBtnFull;

	const displayCart = () => {
		const display = isCartEmpty ? showEmptyCart() : showFullCart();
		return display;
	};

	const showEmptyCart = () => {
		return (
			<div className={styles.cartPageCartEmpty}>
				<h1>Your cart is empty. Let's change that.</h1>
				<Link to={'/products'} className={styles.cartPageShopBtn}>
					SHOP NOW{'  '}
					<i className="fas fa-long-arrow-alt-right" />
				</Link>
			</div>
		);
	};

	const showFullCart = () => {
		return (
			<div className={styles.cartPageCartFull}>
				<h1>
					Your Cart ({cart.length} item{cart.length > 1 ? 's' : ''})
				</h1>
				<div className={styles.cartPageReceipt}>
					<h3>PRODUCT</h3>
					<span>
						<h3>QUANTITY</h3>
						<h3>PRICE</h3>
					</span>
				</div>
				{cart.map((item) => <CartItem key={item.id} product={item} {...props} />)}
			</div>
		);
	};

	return (
		<div>
			<div className={styles.cartPageContainer} id="container">
				{displayCart()}

				<div className={styles.cartPageCheckout}>
					<div className={styles.cartPageSubtotal}>
						<p>Subtotal</p>
						<div>${subtotal.toFixed(2)}</div>
					</div>
					<div>
						<hr />
					</div>
					<div>
						<button className={btnStyles}>CHECKOUT</button>
					</div>
					<div>
						<small>Tax and shipping are calculated at checkout.</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPage;
