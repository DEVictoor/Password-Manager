import { useEffect, useRef, useState } from 'react';
import './Password.css';

const Password = () => {
  const [Password, setPassword] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current.focus();
  }, []);

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Password: ', Password);
  };

  return (
    <div className="Password">
      <h1 className="Password__title">Password Manager</h1>
      <div className="Password__input">
        <label htmlFor="Password">Password</label>
        <input
          value={Password}
          onInput={handlePassword}
          type="password"
          id="Password"
          ref={inputRefs}
        />
      </div>
      <button onClick={handleSubmit} className="Password__button">
        Confirm
      </button>
    </div>
  );
};

export { Password };
