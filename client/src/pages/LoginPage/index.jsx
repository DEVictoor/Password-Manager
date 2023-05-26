import { useState } from 'react';
import { LoginCard } from '../../components/LoginCard';
import './LoginPage.css';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="LoginPage">
      <LoginCard form={form} setForm={setForm} handleSubmit={handleSubmit} />
    </div>
  );
};

export { LoginPage };
