import { useState } from 'react';
import { OPTCode } from '../../components/OPTCode';
import './OPTCodePage.css';

const OPTCodePage = () => {
  const [form, setForm] = useState({
    otp: ['', '', '', '', '']
  });

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="container">
      <div className="OPTCodePage">
        <h1>Password Manager</h1>
        <div>
          <OPTCode handleSubmit={handleSubmit} form={form} setForm={setForm} />
        </div>
      </div>
    </div>
  );
};

export { OPTCodePage };
