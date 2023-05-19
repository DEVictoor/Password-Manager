import { useEffect, useRef, useState } from 'react';
import './OPTCode.css';

const OPTCode = () => {
  const [inputValues, setInputValues] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);
  const buttonRef = useRef();

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleOPTCode = (index, value) => {
    const newInputValues = [...inputValues];
    const lastValue = value[value.length - 1];
    newInputValues[index] = lastValue;
    setInputValues(newInputValues);

    if (value.length > 0) {
      if (index === inputValues.length - 1) {
        buttonRef.current.focus();
      } else {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (event, index) => {
    if (
      event.key === 'Backspace' &&
      event.target.value.length === 0 &&
      index > 0
    ) {
      setInputValues(prevInputValues => {
        const newInputValues = [...prevInputValues];
        newInputValues[index - 1] = '';
        return newInputValues;
      });

      inputRefs.current[index - 1].focus();
    }
  };
  const handlePaste = (event, index) => {
    const textPaste = event.clipboardData.getData('text/plain');
    const newInputValues = [...inputValues];
    for (let i = 0; index < inputValues.length; i++) {
      newInputValues[index] = textPaste[i];
      console.log(newInputValues, textPaste[index], inputValues.length, index);
      index++;
    }
    setInputValues(newInputValues);
  };

  const handleSubmit = () => {
    console.log('OPTCode: ', inputValues.join(''));
  };

  return (
    <div className="OPTCode">
      <h1 className="OPTCode__title">Password Manager</h1>
      <div className="OPTCode__input">
        <label htmlFor="OPTCode">Insert your code</label>
        <div className="OPTCode__input--inputs">
          {inputValues.map((value, index) => (
            <input
              key={index}
              value={value}
              onInput={e => handleOPTCode(index, e.target.value)}
              onKeyDown={e => handleKeyPress(e, index)}
              type="text"
              id={`OPTCode${index}`}
              ref={ref => inputRefs.current.push(ref)}
              onPaste={e => handlePaste(e, index)}
            />
          ))}
        </div>
      </div>
      <button
        ref={buttonRef}
        onClick={handleSubmit}
        className="OPTCode__button"
      >
        Confirm
      </button>
    </div>
  );
};

export { OPTCode };
