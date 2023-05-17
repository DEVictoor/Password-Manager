import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Email: ', email, ' Pass: ', password);
  };

  return (
    <div className="Login">
      <h1 className="Login__title">Password Manager</h1>
      <div className="Login__input">
        <label htmlFor="email">Email</label>
        <input value={email} onInput={handleEmail} type="text" id="email" />
      </div>
      <div className="Login__input">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onInput={handlePassword}
          type="password"
          id="password"
        />
      </div>
      <p className="Login__link">
        <a href="#">Forgot password?</a>
      </p>
      <button onClick={handleSubmit} className="Login__button">
        Log in
      </button>
      <button className="Login__button Login__button--signup">Sign up</button>
    </div>
  );
};

export { Login };
