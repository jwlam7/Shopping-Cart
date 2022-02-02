import React from 'react';
import styles from '../css/Header.module.css';

function Header() {
	return (
		<div>
			<div className={styles.nav}>
				<div>
					<a href="#" className={styles.navShop}>
						Shop
					</a>
				</div>

				<div>
					<a href="#" className={styles.navBrand}>
						REJUVENATE
					</a>
				</div>

				<div>
					<a href="#" className={styles.navCart}>
						<i class="fas fa-shopping-cart" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
