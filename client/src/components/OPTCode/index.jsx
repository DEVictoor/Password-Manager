import { useEffect, useRef, useState } from 'react';
import './OPTCode.css';

const OPTCode = () => {
  const [inputValues, setInputValues] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);
  const buttonRef = useRef();

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  // const handleOPTCode = (index, value) => {
  //   const a = Array(5).fill('');
  //   setInputValues(a);
  //   console.log(a, '11');
  //   const newInputValues = [...inputValues];
  //   console.log(newInputValues, '12');

  //   newInputValues[index] = value;
  //   setInputValues(newInputValues);
  //   console.log(newInputValues, '1');

  //   if (value.length > 0) {
  //     if (index === inputValues.length - 1) {
  //       buttonRef.current.focus();
  //     } else {
  //       inputRefs.current[index + 1].focus();
  //     }
  //   }
  // };

  const handleKeyPress = (event, index) => {
    console.log(event);
    if (event.key === 'Backspace' && index > 0) {
      if (event.target.value.length === 0) {
        setInputValues(prevInputValues => {
          const newInputValues = [...prevInputValues];
          newInputValues[index - 1] = '';
          return newInputValues;
        });
        inputRefs.current[index - 1].focus();
      } else if (event.target.value.length !== 0) {
        setInputValues(prevInputValues => {
          const newInputValues = [...prevInputValues];
          newInputValues[index] = '';
          return newInputValues;
        });
      }
    } else if (event.key.length === 1 && !event.ctrlKey && event.key !== 'v') {
      const value = event.key;
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);

      if (value.length > 0) {
        if (index === inputValues.length - 1) {
          buttonRef.current.focus();
        } else {
          inputRefs.current[index + 1].focus();
        }
      }
    }
  };
  const handlePaste = (event, index) => {
    console.log('paste');
    const textPaste = event.clipboardData.getData('text/plain');
    const newInputValues = [...inputValues];
    for (let i = 0; index < textPaste.length; i++) {
      newInputValues[index] = textPaste[i];
      console.log(newInputValues, textPaste[index], inputValues.length, index);
      index++;
      setInputValues(newInputValues);
    }
    console.log('index', index);
    if (index === inputValues.length) {
      buttonRef.current.focus();
    } else {
      inputRefs.current[index].focus();
    }
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
              maxLength={1}
              key={index}
              value={value}
              // onInput={e => handleOPTCode(index, e.target.value)}
              onKeyDown={e => handleKeyPress(e, index)}
              type="text"
              id={`OPTCode${index}`}
              ref={ref => inputRefs.current.push(ref)}
              onPaste={e => handlePaste(e, index)}
              // readOnly
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
