import PropTypes from 'prop-types';
import { useTyping } from '../../hooks/useTyping';
import './InputText.css';

const InputText = ({ name, placeholder = '', form, setForm, ...props }) => {
  const textAnimation = useTyping(placeholder);

  const handleInput = e => {
    setForm({ ...form, [name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        className="InputText"
        name={name}
        autoComplete="off"
        placeholder={textAnimation}
        onChange={handleInput}
        {...props}
      />
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  setForm: PropTypes.func
};

export { InputText };
