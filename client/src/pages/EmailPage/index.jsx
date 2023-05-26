import { useState } from 'react';
import { InputText } from '../../components/InputText';
import './EmailPage.css';
import { Button } from '../../components/Button';

const EmailPage = () => {
  const [form, setForm] = useState({
    email: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form.email);
  };

  return (
    <div className="container">
      <div className="EmailPage">
        <h1 className="EmailPage__title">Password Manager</h1>
        <div className="EmailPage__input">
          <label htmlFor="email">Email</label>
          <InputText
            name="email"
            placeholder="example@example.com"
            form={form}
            setForm={setForm}
          />
        </div>
        <Button secondary={true} onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export { EmailPage };
