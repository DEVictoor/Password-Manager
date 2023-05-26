import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './InputPassword.css';
import { useTyping } from '../../hooks/useTyping';

const InputPassword = ({ name, placeholder, form, setForm, ...props }) => {
  const [isHidden, setIsHidden] = useState(true);
  const textAnimation = useTyping(placeholder);
  const input = useRef();

  const handleInput = e => {
    setForm({ ...form, [name]: e.target.value });
  };

  const handleHidden = e => {
    e.preventDefault();
    input.current.setAttribute('type', `${isHidden ? 'password' : 'text'}`);
    setIsHidden(!isHidden);
  };

  return (
    <div className="InputPassword">
      <input
        type="password"
        className="InputPassword__input"
        name={name}
        autoComplete="off"
        placeholder={textAnimation}
        onChange={handleInput}
        {...props}
        ref={input}
      />
      <span className="InputPassword__hidden" onClick={e => handleHidden(e)}>
        {isHidden ? (
          <FontAwesomeIcon icon={faEyeSlash} />
        ) : (
          <FontAwesomeIcon icon={faEye} />
        )}
      </span>
    </div>
  );
};

InputPassword.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  setForm: PropTypes.func
};

export { InputPassword };
