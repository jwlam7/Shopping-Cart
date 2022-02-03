import React from 'react';
import styles from '../css/HomePage.module.css';

function HomePage() {
	return (
		<div className={styles.hpContainer}>
			<div>
				<img src={require('../images/kt-tapeman.jpg')} className={styles.hpImg} />
			</div>

			<div className={styles.hpContent}>
				<div>
					<h1 className={styles.hpTitle}>Be Kind to Your Body</h1>
					<h2>Recover faster with our range of innovative products</h2>
				</div>

				<div>
					<a href="#" className={styles.hpShopBtn}>
						SHOP NOW
					</a>
				</div>

				<div>
					<hr />
				</div>

				<div>
					<h2>Join the Fam!</h2>
					<h3>Sign up for the latest news / exclusive offers</h3>

					<form>
						<input className={styles.hpInput} type="text" placeholder="Email Address" />
						<button className={styles.hpSubscribeBtn} type="submit">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
