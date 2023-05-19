import { useEffect, useRef, useState } from 'react';
import './Email.css';

const Email = () => {
  const [email, setEmail] = useState('');
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Email: ', email);
  };

  return (
    <div className="Email">
      <h1 className="Email__title">Password Manager</h1>
      <div className="Email__input">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onInput={handleEmail}
          type="text"
          id="email"
          ref={inputRef}
        />
      </div>
      <button onClick={handleSubmit} className="Email__button">
        Confirm
      </button>
    </div>
  );
};

export { Email };
