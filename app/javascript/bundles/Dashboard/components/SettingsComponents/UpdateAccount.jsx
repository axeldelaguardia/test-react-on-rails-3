import React, { useState } from 'react'
import style from './UpdateAccount.module.scss'
import TimeZoneDropdown from './TimeZoneDropdown';
import UpdateUserInfoModal from './UpdateUserInfo';
import axios from 'axios';
import ReactOnRails from 'react-on-rails';

const UpdateAccount = ({ onUpdateSuccess }) => {
	const [isNameModalVisible, setIsNameModalVisible] = useState(false);
  const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

	const handleUpdate = async (values) => {
		const url = '/users';
		const data = values;
		
		try {
			const response = await axios.patch(url, data, {
				headers:  ReactOnRails.authenticityHeaders() 
			});
			console.log(response);
			onUpdateSuccess(response.data);
		} catch (error) {
			console.log(error);
			alert('Something went wrong. Please try again.')
		}

		setIsNameModalVisible(false);
		setIsEmailModalVisible(false);
		setIsPasswordModalVisible(false);
	};

	const handleCancel = () => {
		setIsNameModalVisible(false);
		setIsEmailModalVisible(false);
		setIsPasswordModalVisible(false);
	};

	return (
		<div>
			<h2>Update Account</h2>
			<div className={style.cards}>
				<div className={style.card}>
					<h3>Name</h3>
					<div className={style.buttonPlaceholder}>
						<button className={style.modalButton} onClick={() => setIsNameModalVisible(true)}>Change</button>
						<UpdateUserInfoModal visible={isNameModalVisible} onCancel={handleCancel} onUpdate={handleUpdate} type='name'></UpdateUserInfoModal>
					</div>
				</div>
				<div className={style.card}>
					<h3>Email</h3>
					<div className={style.buttonPlaceholder}>
						<button className={style.modalButton} onClick={() => setIsEmailModalVisible(true)}>Change</button>
						<UpdateUserInfoModal visible={isEmailModalVisible} onCancel={handleCancel} onUpdate={handleUpdate} type='email'></UpdateUserInfoModal>
					</div>
				</div>
				<div className={style.card}>
					<h3>Password</h3>
					<div className={style.buttonPlaceholder}>
					<button className={style.modalButton} onClick={() => setIsPasswordModalVisible(true)}>Change</button>
						<UpdateUserInfoModal visible={isPasswordModalVisible} onCancel={handleCancel} onUpdate={handleUpdate} type='password'></UpdateUserInfoModal>
					</div>
				</div>
				<div className={style.card}>
					<h3>Timezone</h3>
					<div className={style.tzDropdown}>
						<TimeZoneDropdown></TimeZoneDropdown>
					</div>
				</div>
			</div>
		</div>
	);
};


export default UpdateAccount;