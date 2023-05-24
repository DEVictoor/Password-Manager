import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import './AccountPassword.css';

const AccountPassword = () => {
  const [nameVault, setNameVault] = useState('');
  const [description, setDescription] = useState('');
  const inputRefs = useRef([]);

  const handlenameVault = e => {
    setNameVault(e.target.value);
  };
  const handledescription = e => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    console.log('nameVault: ', nameVault, ' Pass: ', description);
  };

  const toggleInputType = index => {
    if (inputRefs.current[index].type === 'password')
      inputRefs.current[index].type = 'text';
    else inputRefs.current[index].type = 'password';
  };

  return (
    <div className="AccountPassword">
      <h1 className="AccountPassword__title">
        <button className="icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        Account
      </h1>
      <div className="AccountPassword__input">
        <label htmlFor="nameVault">Old password</label>
        <input
          value={nameVault}
          onInput={handlenameVault}
          type="password"
          id="nameVault"
          ref={ref => inputRefs.current.push(ref)}
        />

        <FontAwesomeIcon
          className="AccountPassword__input AccountPassword__input--icon"
          icon={faEye}
          onClick={() => toggleInputType(0)}
        />
      </div>
      <div className="AccountPassword__input">
        <label htmlFor="description">New password</label>
        <input
          value={description}
          onInput={handledescription}
          type="password"
          id="description"
          ref={ref => inputRefs.current.push(ref)}
        />
        <FontAwesomeIcon
          className="AccountPassword__input AccountPassword__input--icon"
          icon={faEye}
          onClick={() => toggleInputType(1)}
        />
      </div>
      <div className="AccountPassword__button">
        <button className="AccountPassword__button AccountPassword__button--cancel">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="AccountPassword__button AccountPassword__button--save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export { AccountPassword };
