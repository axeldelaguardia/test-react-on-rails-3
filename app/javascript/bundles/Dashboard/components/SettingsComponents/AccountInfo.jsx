import React, { useEffect } from "react";

const AccountInfo = ({name, email, timezone}) => {
	useEffect(() => {
		console.log("AccountInfo rendered");
		console.log(name, email, timezone);
	}, [name, email, timezone]);

	return (
		<div>
			<h2>Account Information</h2>
			<div>
				<p><b>Name:</b> {name}</p>
				<p><b>Email:</b> {email}</p>
				<p><b>Timezone:</b> {timezone}</p>
			</div>
		</div>
	);
};

export default AccountInfo;