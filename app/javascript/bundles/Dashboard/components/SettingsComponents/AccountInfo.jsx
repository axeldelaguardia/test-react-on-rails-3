import React, { useState } from "react";
import UpdateUserInfoModal from "./UpdateUserInfo";
import  handleFormSubmit  from "../../utils/formUtils";
import TimeZoneDropdown from "./TimeZoneDropdown";

const AccountInfo = ({name, email, timezone}) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [authenticity_token] = useState(document.querySelector('meta[name="csrf-token"]').content);

	const handleUpdate = (values) => {
			const url = '/users';
			const method = 'patch';
			const data = {
				'user[name]': values.name,
				'user[email]': values.email,
			};
	
			handleFormSubmit(url, method, authenticity_token, data);
			setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div>
			<h2>Account Information</h2>
			<div>
				<p><b>Name:</b> {name}</p>
				<p><b>Email:</b> {email}</p>
				<p><b>Timezone:</b> {timezone}</p>
				{/* <button onClick={() => setIsModalVisible(true)}>Update User Info</button> */}
				{/* <UpdateUserInfoModal visible={isModalVisible} onCancel={handleCancel} onUpdate={handleUpdate}></UpdateUserInfoModal> */}
			</div>
			{/* <hr/> */}
				{/* <h3>Time Zone</h3>
			<TimeZoneDropdown timezone={timezone}/> */}
		</div>
	);
};

export default AccountInfo;