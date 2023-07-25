import React, { useState } from 'react';
import style from './LoginForm.module.scss';
import handleFormSubmit from '../utils/formUtils';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [authenticity_token] = useState(document.querySelector('meta[name="csrf-token"]').content);

	const handleSubmit = (e) => {
		e.preventDefault();
    const form = e.target;

    const url = form.getAttribute('action');
    const method = 'post';
    const data = {
      'session[email]': email,
      'session[password]': password,
    };

    handleFormSubmit(url, method, authenticity_token, data);
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
