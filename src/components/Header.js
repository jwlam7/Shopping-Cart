import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Header.module.css';

function Header() {
	return (
		<div>
			<div className={styles.nav}>
				<div>
					<NavLink to={'/Shopping-Cart/products'} className={styles.navShop}>
						Shop
					</NavLink>
				</div>
				<div>
					<NavLink to={'/Shopping-Cart/'} className={styles.navBrand}>
						REJUVENATE
					</NavLink>
				</div>
				<div>
					<NavLink to={'/Shopping-Cart/cart'} className={styles.navCart}>
						<i className="fas fa-shopping-cart" />
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Header;
