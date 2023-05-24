import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import './Application.css';

const Application = () => {
  const [application, setApplication] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputRefs = useRef([]);

  const handleApplication = e => {
    setApplication(e.target.value);
  };
  const handleUsername = e => {
    setUsername(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Application Login');
  };

  const toggleInputType = index => {
    if (inputRefs.current[index].type === 'password')
      inputRefs.current[index].type = 'text';
    else inputRefs.current[index].type = 'password';
  };

  return (
    <div className="Application">
      <h1 className="Application__title">
        <button className="icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        Application
      </h1>
      <div className="Application__input">
        <label htmlFor="application">Application</label>
        <input
          value={application}
          onInput={handleApplication}
          type="text"
          id="application"
          ref={ref => inputRefs.current.push(ref)}
        />
      </div>
      <div className="Application__input">
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onInput={handleUsername}
          type="text"
          id="username"
          ref={ref => inputRefs.current.push(ref)}
        />
      </div>
      <div className="Application__input">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onInput={handleEmail}
          type="text"
          id="email"
          ref={ref => inputRefs.current.push(ref)}
        />
      </div>
      <div className="Application__input">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onInput={handlePassword}
          type="password"
          id="password"
          ref={ref => inputRefs.current.push(ref)}
        />
        <FontAwesomeIcon
          className="Application__input Application__input--icon"
          icon={faEye}
          onClick={() => toggleInputType(3)}
        />
      </div>
      <button onClick={handleSubmit} className="Account__button--password">
        GENERATE
      </button>
      <div className="Application__button">
        <button
          onClick={handleSubmit}
          className="Application__button Application__button--cancel"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="Application__button Application__button--save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export { Application };
