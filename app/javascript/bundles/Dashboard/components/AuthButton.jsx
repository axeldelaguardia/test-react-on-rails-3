import React, { useState } from "react";
import { Button } from 'antd';

const AuthButton = ({ type }) => {
	const [authenticity_token] = useState(document.querySelector('meta[name="csrf-token"]').content);

  const handleClick = () => {
		const form = document.createElement('form');
		const tokenInput = document.createElement('input');
    tokenInput.type = 'hidden';
    tokenInput.name = 'authenticity_token';
    tokenInput.value = authenticity_token;
    form.appendChild(tokenInput);

		if (type === 'logout') {
			form.action = '/logout';
			form.method = 'post';

			const methodInput = document.createElement('input');
			methodInput.type = 'hidden';
			methodInput.name = '_method';
			methodInput.value = 'delete';
			form.appendChild(methodInput);
			document.body.appendChild(form);
			form.submit();

		} else if (type === 'login') {
			form.action = '/login';
			form.method = 'get';

			const submitButton = document.createElement('input');
			submitButton.type = 'submit';
			form.appendChild(submitButton);
			document.body.appendChild(form);
			submitButton.click();
		}
  };

	if (type === 'hidden') {
		return null;
	}

	return (
		<Button 
			type='link' 
			size={'middle'} 
			onClick={handleClick}
			>
				{type === 'logout' ? 'Logout' : 'Login'}
		</Button>
	);
}

export default AuthButton;