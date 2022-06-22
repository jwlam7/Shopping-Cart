import React, { useState, useEffect, useRef } from 'react';
//Routing
import { NavLink } from 'react-router-dom';
//Styles
import styles from '../css/Header.module.css';
//Icons
import { FaBars } from 'react-icons/fa';
//Data
import getCategories from '../data/allCategories';
//Custom hook for context
import { useGlobalContext } from '../context/context';

function Header() {
	//for drop-down menu
	const [ showLinks, setShowLinks ] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	//for navigating to ProductsPage and displaying the correct items
	const links = getCategories();
	const { setCategory, totalAmount } = useGlobalContext();

	const handleClick = (category) => {
		setShowLinks(!showLinks);
		category === 'Shop All' ? setCategory('ALL PRODUCTS') : setCategory(category);
	};

	useEffect(
		() => {
			//will require linksHeight for proper drop-down menu animation
			const linksHeight = linksRef.current.getBoundingClientRect().height;

			showLinks
				? (linksContainerRef.current.style.height = `${linksHeight}px`)
				: (linksContainerRef.current.style.height = '0px');
		},
		[ showLinks ]
	);

	return (
		<div>
			<div className={styles.nav}>
				<div>
					<NavLink to={'/Shopping-Cart/products'} className={styles.navShop}>
						Shop
					</NavLink>
					<button className={styles.navToggle} onClick={() => setShowLinks(!showLinks)}>
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
						<div className={styles.navCartAmount}>
							<p>{totalAmount}</p>
						</div>
					</NavLink>
				</div>
			</div>

			<div className={styles.navLinksContainer} ref={linksContainerRef}>
				<ul className={styles.navLinks} ref={linksRef}>
					{links.map((link, idx) => {
						return (
							<li key={idx}>
								<NavLink to={'/Shopping-Cart/products'} onClick={() => handleClick(link)}>
									{link}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Header;
