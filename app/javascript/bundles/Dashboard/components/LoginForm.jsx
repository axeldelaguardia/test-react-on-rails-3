import React, { useState } from 'react';
import style from './LoginForm.module.scss';
import axios from 'axios';
import ReactOnRails from 'react-on-rails';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
    const response = await axios.post('/login', {
      'email': email,
      'password': password,
    }, {
      headers: ReactOnRails.authenticityHeaders(),
    }).then((response) => {
      if(response.status === 200) {
        window.location.href = '/dashboard';
        };
    }).catch((error) => {
      console.log(error);
      alert('Invalid email or password');
    });
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
