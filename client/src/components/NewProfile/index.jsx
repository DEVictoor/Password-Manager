import { useState } from 'react';
import './NewProfile.css';

const NewProfile = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input === '') return;
    onSubmit(input);
  };

  return (
    <div className="NewProfile">
      <hr />
      <input
        className="NewProfile__input"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter new profile name"
      />
      <button
        onClick={handleSubmit}
        className="ChooseProfile__button ChooseProfile__button--createprofile"
      >
        Save
      </button>
    </div>
  );
};

export { NewProfile };
