import React from 'react';
//Styles
import styles from '../css/Modal.module.css';
//Icons
import { FaTimes } from 'react-icons/fa';
//Custom hook from context
import { useGlobalContext } from '../context/context';

const Modal = () => {
	const { showModal, toggleModal, modalDetails } = useGlobalContext();
	console.log(modalDetails);

	return (
		<div className={showModal ? `${styles.modalContainer} ${styles.showModal}` : styles.modalContainer}>
			<div className={styles.modalContent}>
				<h1>Modal</h1>
				<div className={styles.modalCloseBtn} onClick={() => toggleModal(null)}>
					<FaTimes />
				</div>
			</div>
		</div>
	);
};

export default Modal;
