import React, { useState } from 'react';
import axios from 'axios';
import style from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [authenticity_token] = useState(document.querySelector('meta[name="csrf-token"]').content);

	// const handleSubmit = (e) => {
  //   e.preventDefault();

	// 	const token = document.querySelector('meta[name="csrf-token"]').content;

	// 	axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
		

  //     const response = axios.post(
  //       '/login',
  //       {
  //         authenticity_token: token,
  //         email: email,
  //         password: password,
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  // };

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
	
		const tokenInput = document.createElement('input');
		tokenInput.setAttribute('type', 'hidden');
		tokenInput.setAttribute('name', 'authenticity_token');
		tokenInput.value = authenticity_token;
		form.appendChild(tokenInput);

		const emailInput = document.createElement('input');
		emailInput.setAttribute('type', 'hidden');
		emailInput.setAttribute('name', 'session[email]');
		emailInput.value = email;
		form.appendChild(emailInput);

		const passwordInput = document.createElement('input');
		passwordInput.setAttribute('type', 'hidden');
		passwordInput.setAttribute('name', 'session[password]');
		passwordInput.value = password;
		form.appendChild(passwordInput);

		form.submit();
	};



  return (
    <form className={style.Login} onSubmit={handleSubmit} action="/login" method="post">
			<h1>Login</h1>
      <div className={style.textbox}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={style.textbox}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
