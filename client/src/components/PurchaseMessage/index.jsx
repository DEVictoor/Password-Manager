import { useEffect, useRef } from 'react';
import './PurchaseMessage.css';

const PurchaseMessage = () => {
  const buttonRef = useRef([]);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const handleSubmit = () => {
    console.log('PurchaseMessage: Continue');
  };

  return (
    <div className="PurchaseMessage">
      <h1 className="PurchaseMessage__title">Password Manager</h1>
      <div className="PurchaseMessage__input">
        <label htmlFor="PurchaseMessage">Your purchase was succesful!</label>
      </div>
      <button
        ref={buttonRef}
        onClick={handleSubmit}
        className="PurchaseMessage__button"
      >
        Continue
      </button>
    </div>
  );
};

export { PurchaseMessage };
