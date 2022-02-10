import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Header.module.css';

function Header() {
	return (
		<div>
			<div className={styles.nav}>
				<div>
					<NavLink to={'/products'} className={styles.navShop}>
						Shop
					</NavLink>
				</div>
				<div>
					<NavLink to={'/'} className={styles.navBrand}>
						REJUVENATE
					</NavLink>
				</div>
				<div>
					<NavLink to={'/cart'} className={styles.navCart}>
						<i className="fas fa-shopping-cart" />
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Header;
