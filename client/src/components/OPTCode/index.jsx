import { useEffect, useRef } from 'react';
import './OPTCode.css';
import PropTypes from 'prop-types';
const OPTCode = ({ handleSubmit, form, setForm }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const insertChar = (value, index) => {
    const newValue = { ...form };
    newValue.otp[index] = value;
    setForm(newValue);
    const values = [false, false, false, false, false];
    if (value !== '') values[index] = true;
    form.otp.map((e, i) => {
      values[i] = e !== '' ? true : values[i];
    });

    if (values.every(e => e === true)) {
      handleSubmit();
    }
  };

  const setFocus = index => {
    console.log(index);
    if (index === form.otp.length - 1) return;
    inputRefs.current[index + 1].focus();
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
    const newValue = { ...form };
    let textPaste = e.clipboardData
      .getData('text/plain')
      .replace(/[^a-zA-Z0-9]/g, '')
      .toUpperCase();
    const minNumber = Math.min(form.otp.length - index, textPaste.length);

    for (let i = 0; i < minNumber; i++) {
      if (/^[a-zA-Z0-9\b]$/.test(textPaste[i])) {
        newValue.otp[index] = textPaste[i];
        setForm(newValue);
        index++;
        setFocus(index - 1);
      }
    }
  };

  return (
    <div className="OPTCode">
      <div className="OPTCode__input">
        <label htmlFor="OPTCode">Insert your code</label>
        <div className="OPTCode__input--inputs">
          {form.otp.map((value, index) => (
            <input
              className={`input ${index && 'hola'}`}
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
    </div>
  );
};

OPTCode.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
  handleSubmit: PropTypes.func
};

export { OPTCode };
