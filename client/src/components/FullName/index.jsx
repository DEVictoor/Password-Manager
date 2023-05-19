import { useEffect, useRef, useState } from 'react';
import './FullName.css';

const FullName = () => {
  const [FullName, setFullName] = useState('');
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFullName = e => {
    setFullName(e.target.value);
  };

  const handleSubmit = () => {
    console.log('FullName: ', FullName);
  };

  return (
    <div className="FullName">
      <h1 className="FullName__title">Password Manager</h1>
      <div className="FullName__input">
        <label htmlFor="FullName">Full Name</label>
        <input
          value={FullName}
          onInput={handleFullName}
          type="text"
          id="FullName"
          ref={inputRef}
        />
      </div>
      <button onClick={handleSubmit} className="FullName__button">
        Confirm
      </button>
    </div>
  );
};

export { FullName };
