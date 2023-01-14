import React from 'react';
//Routing
import { Link } from 'react-router-dom';
//Styles
import styles from '../css/HomePage.module.css';

function HomePage() {
	return (
		<div className={styles.homePageContainer}>
			<div>
				<img src={require('../images/kt-tapeman.jpg')} alt='kt-tapeman' className={styles.homePageImg} />
			</div>

			<div className={styles.homePageContent}>
				<div>
					<h1 className={styles.homePageTitle}>Be Kind to Your Body</h1>
					<h2>Recover faster with our range of innovative products</h2>
				</div>
				<div>
					<Link to={'/Shopping-Cart/products'} className={styles.homePageShopBtn}>
						SHOP NOW
					</Link>
				</div>
				<div>
					<hr />
				</div>
				<div>
					<h2>Join the fam!</h2>
					<img src={require('../images/snorlax.jpg')} alt='snorlax' className={styles.homePageSnorlax}></img>
					<h3>Sign up for the latest news / exclusive offers</h3>
					<form className={styles.homePageForm}>
						<input className={styles.homePageEmailInput} type='text' placeholder='Email Address' />
						<button className={styles.homePageSubscribeBtn} type='submit'>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
