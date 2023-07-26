import React, { useState } from 'react'
import style from './UpdateAccount.module.scss'
import TimeZoneDropdown from './TimeZoneDropdown';
import UpdateUserInfoModal from './UpdateUserInfo';
import handleFormSubmit from '../../utils/formUtils';

const UpdateAccount = () => {
	const [isNameModalVisible, setIsNameModalVisible] = useState(false);
  const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
	const [authenticity_token] = useState(document.querySelector('meta[name="csrf-token"]').content);

		const handleUpdate = (values) => {
			const url = '/users';
			const method = 'patch';
			const data = {};
			Object.keys(values).forEach(key => {
					data[`user[${key}]`] = values[key];
				});
			console.log(data);
	
			handleFormSubmit(url, method, authenticity_token, data);
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
			<h1>Update Account</h1>
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