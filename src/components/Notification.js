import React from 'react';
//Material UI
import { Alert } from '@mui/material';

const Notification = ({ type, message }) => {
	return (
		<div>
			<Alert variant='filled' severity={type}>
				{message}
			</Alert>
		</div>
	);
};

export default Notification;
