import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/CartPage.module.css';

function CartPage() {
	return (
		<div>
			<div className={styles.cartPageContainer}>
				<div className={styles.cartPageItem}>
					<h1>Your cart is empty. Let's change that.</h1>
					<Link to={'/products'} className={styles.cartPageShopBtn}>
						SHOP NOW{'  '}
						<i className="fas fa-long-arrow-alt-right" />
					</Link>
				</div>

				<div className={styles.cartPageCheckout}>
					<div className={styles.cartPageSubtotal}>
						<p>Subtotal</p>
						<div>$0.00</div>
					</div>

					<div>
						<hr />
					</div>

					<div>
						<button className={styles.cartPageCheckoutBtn}>CHECKOUT</button>
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
