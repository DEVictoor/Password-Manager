import PropTypes from 'prop-types';
import { InputText } from '../InputText';
import { InputPassword } from '../InputPassword';
import { Button } from '../Button';
import './Login.css';

const LoginCard = ({ form, setForm, handleSubmit }) => {
  return (
    <div className="LoginCard">
      <h1 className="LoginCard__title">Password Manager</h1>
      <div className="LoginCard__input">
        <label htmlFor="email">Email</label>
        <InputText
          name="email"
          placeholder="example@example.com"
          form={form}
          setForm={setForm}
        />
      </div>
      <div className="LoginCard__input">
        <label htmlFor="password">Password</label>
        <InputPassword
          name="password"
          placeholder="****************"
          form={form}
          setForm={setForm}
        />
      </div>
      <p className="LoginCard__link">
        <a href="#">Forgot password?</a>
      </p>
      <Button onClick={e => handleSubmit(e, form)}>Log in</Button>
      <Button secondary={true}>Sign up</Button>
    </div>
  );
};

LoginCard.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.any,
  handleSubmit: PropTypes.func
};

export { LoginCard };
