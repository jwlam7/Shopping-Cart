import React from 'react';
//Styles
import styles from '../css/Modal.module.css';
//Icons
import { FaTimes } from 'react-icons/fa';
//Custom hook from context
import { useGlobalContext } from '../context/context';

const Modal = () => {
	const { showModal, toggleModal, modalDetails } = useGlobalContext();
	const { specs } = modalDetails;

	return (
		<div className={showModal ? `${styles.modalContainer} ${styles.showModal}` : styles.modalContainer}>
			<div className={styles.modalContent}>
				<div className={styles.modalSpecs}>
					<h2>Specs</h2>
					{specs &&
						Object.entries(specs).filter((spec) => !spec.includes('_id')).map((spec, idx) => {
							const [ key, val ] = spec;

							return (
								<p key={idx}>
									{key.replace('_', ' ')}: {val}
								</p>
							);
						})}
				</div>
				<div className={styles.modalCloseBtn} onClick={() => toggleModal(null)}>
					<FaTimes />
				</div>
			</div>
		</div>
	);
};

export default Modal;
