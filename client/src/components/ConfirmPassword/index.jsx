import { useEffect, useRef, useState } from 'react';
import './ConfirmPassword.css';

const ConfirmPassword = () => {
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('ConfirmPassword: ', ConfirmPassword);
  };

  return (
    <div className="ConfirmPassword">
      <h1 className="ConfirmPassword__title">Password Manager</h1>
      <div className="ConfirmPassword__input">
        <label htmlFor="ConfirmPassword">Confirm your password</label>
        <input
          value={ConfirmPassword}
          onInput={handleConfirmPassword}
          type="Confirmpassword"
          id="ConfirmPassword"
          ref={inputRef}
        />
      </div>
      <button onClick={handleSubmit} className="ConfirmPassword__button">
        Confirm
      </button>
    </div>
  );
};

export { ConfirmPassword };
