import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './NewVault.css';

const NewVault = () => {
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
    <div className="NewVault">
      <h1 className="NewVault__title">
        <button className="icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        New Vault
      </h1>
      <div className="NewVault__input">
        <label htmlFor="nameVault">Name</label>
        <input
          value={nameVault}
          onInput={handlenameVault}
          type="text"
          id="nameVault"
        />
      </div>
      <div className="NewVault__input">
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          onInput={handledescription}
          type="description"
          id="description"
        />
      </div>
      <div className="NewVault__button">
        <button className="NewVault__button NewVault__button--cancel">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="NewVault__button NewVault__button--create"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export { NewVault };
