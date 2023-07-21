import React, { useState } from 'react';
import axios from 'axios';
import style from './LoginForm.module.scss';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
    e.preventDefault();

		const token = document.querySelector('meta[name="csrf-token"]').content;

		axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
		

    try {
      const response = await axios.post(
        '/login',
        {
          authenticity_token: token,
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Login successful!', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
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
