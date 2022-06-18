import React from 'react';
//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from '../css/CartPage.module.css';
//Components
import CartItem from '../components/CartItem';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function CartPage() {
	const { cart, totalAmount, clearCart, totalDollars } = useGlobalContext();
	const isCartEmpty = cart.length === 0;
	const btnStyles = isCartEmpty ? styles.cartPageCheckoutBtnEmpty : styles.cartPageCheckoutBtnFull;

	const displayCart = () => (isCartEmpty ? showEmptyCart() : showFullCart());

	const showEmptyCart = () => {
		return (
			<div className={styles.cartPageCartEmpty}>
				<h1>Your cart is empty. Let's change that.</h1>
				<Link to={'/Shopping-Cart/products'} className={styles.cartPageShopBtn}>
					SHOP NOW{'  '}
					<i className='fas fa-long-arrow-alt-right' />
				</Link>
			</div>
		);
	};

	const showFullCart = () => {
		return (
			<div className={styles.cartPageCartFull}>
				<h1>
					Your Cart ({totalAmount} item{totalAmount > 1 ? 's' : ''})
				</h1>
				<div className={styles.cartPageReceipt}>
					<h3>PRODUCT</h3>
					<span>
						<h3>QUANTITY</h3>
						<h3>PRICE</h3>
					</span>
				</div>
				<div>{cart.map((item) => <CartItem key={item.id} {...item} />)}</div>
				<div className={styles.cartPageClearCart}>
					<button onClick={clearCart}>Clear Cart</button>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className={styles.cartPageContainer}>
				{displayCart()}

				<div className={styles.cartPageCheckout}>
					<div className={styles.cartPageSubtotal}>
						<p>Subtotal</p>
						<div>${totalDollars}</div>
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
