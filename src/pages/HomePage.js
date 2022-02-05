import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/HomePage.module.css';

function HomePage() {
	return (
		<div className={styles.homePageContainer}>
			<div>
				<img src={require('../images/kt-tapeman.jpg')} className={styles.homePageImg} />
			</div>

			<div className={styles.homePageContent}>
				<div>
					<h1 className={styles.homePageTitle}>Be Kind to Your Body</h1>
					<h2>Recover faster with our range of innovative products</h2>
				</div>

				<div>
					<Link to={'/products'} className={styles.homePageShopBtn}>
						SHOP NOW
					</Link>
				</div>

				<div>
					<hr />
				</div>

				<div>
					<h2>Join the Fam!</h2>
					<h3>Sign up for the latest news / exclusive offers</h3>

					<form>
						<input className={styles.homePageEmailInput} type="text" placeholder="Email Address" />
						<button className={styles.homePageSubscribeBtn} type="submit">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
