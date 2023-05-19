import { useEffect, useRef, useState } from 'react';
import './OPTCode.css';

const OPTCode = () => {
  const [inputValues, setInputValues] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);
  const buttonRef = useRef();

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const insertChar = (value, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const setFocus = index => {
    if (index === inputValues.length - 1) {
      buttonRef.current.focus();
    } else {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.ctrlKey) return;
    if (e.key === 'Backspace' && index > 0) {
      if (e.target.value.length !== 0) {
        insertChar('', index);
        setFocus(index - 1);
      } else {
        insertChar('', index - 1);
        setFocus(index - 2);
      }
    } else if (/^[a-zA-Z0-9\b]$/.test(e.key)) {
      insertChar(e.key.toUpperCase(), index);
      setFocus(index);
    }
  };

  const handlePaste = (e, index) => {
    const newInputValues = [...inputValues];
    let textPaste = e.clipboardData
      .getData('text/plain')
      .replace(/[^a-zA-Z0-9]/g, '')
      .toUpperCase();
    const minNumber = Math.min(inputValues.length - index, textPaste.length);

    for (let i = 0; i < minNumber; i++) {
      if (/^[a-zA-Z0-9\b]$/.test(textPaste[i])) {
        newInputValues[index] = textPaste[i];
        setInputValues(newInputValues);
        index++;
      }
    }
    setFocus(index - 1);
  };

  return (
    <div className="OPTCode">
      <h1 className="OPTCode__title">Password Manager</h1>
      <div className="OPTCode__input">
        <label htmlFor="OPTCode">Insert your code</label>
        <div className="OPTCode__input--inputs">
          {inputValues.map((value, index) => (
            <input
              maxLength={1}
              key={index}
              value={value}
              onKeyDown={e => handleKeyPress(e, index)}
              type="text"
              id={`OPTCode${index}`}
              ref={ref => inputRefs.current.push(ref)}
              onPaste={e => handlePaste(e, index)}
              readOnly
            />
          ))}
        </div>
      </div>
      <button ref={buttonRef} className="OPTCode__button">
        Confirm
      </button>
    </div>
  );
};

export { OPTCode };
