import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Account.css';

const Account = () => {
  const [nameVault, setNameVault] = useState('');
  const [description, setDescription] = useState('');

  const handlenameVault = e => {
    setNameVault(e.target.value);
  };
  const handledescription = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    console.log('nameVault: ', nameVault, ' Pass: ', description);
  };

  return (
    <div className="Account">
      <h1 className="Account__title">
        <button className="icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        Account
      </h1>
      <div className="Account__input">
        <label htmlFor="nameVault">Full Name</label>
        <input
          value={nameVault}
          onInput={handlenameVault}
          type="text"
          id="nameVault"
        />
      </div>
      <div className="Account__input">
        <label htmlFor="description">Email</label>
        <input
          value={description}
          onInput={handledescription}
          type="description"
          id="description"
        />
      </div>
      <button onClick={handleSubmit} className="Account__button--password">
        Choose password
      </button>
      <div className="Account__button">
        <button className="Account__button Account__button--cancel">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="Account__button Account__button--save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export { Account };
