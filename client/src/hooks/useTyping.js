import { useState, useEffect } from 'react';

const useTyping = text => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const speed = 120;

  useEffect(() => {
    setIndex(0);
    setCurrentText('');
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;

    const timeoutId = setTimeout(() => {
      setCurrentText(value => value + text.charAt(index));
      setIndex(value => value + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, text, index]);

  return currentText;
};

export { useTyping };
