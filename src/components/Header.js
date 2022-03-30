import React from 'react';
//Routing
import { NavLink } from 'react-router-dom';
//Styles
import styles from '../css/Header.module.css';
//Icons
import { FaBars } from 'react-icons/fa';

function Header() {
	const handleClick = () => {
		console.log('clicked');
	};

	return (
		<div>
			<div className={styles.nav}>
				<div>
					<NavLink to={'/Shopping-Cart/products'} className={styles.navShop}>
						Shop
					</NavLink>
					<button className={styles.navToggle} onClick={handleClick}>
						<FaBars />
					</button>
				</div>
				<div>
					<NavLink to={'/Shopping-Cart/'} className={styles.navBrand}>
						REJUVENATE
					</NavLink>
				</div>
				<div>
					<NavLink to={'/Shopping-Cart/cart'} className={styles.navCart}>
						<i className='fas fa-shopping-cart' />
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Header;
