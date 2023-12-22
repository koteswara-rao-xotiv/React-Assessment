import { useState } from 'react';

const useNumericInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleKeyPress = (e) => {
    const key = e.key;

    if ((key < '0' || key > '9') && key !== 'Backspace' && key !== 'Delete') {
      e.preventDefault(); 
    }
  };

  return {
    value,
    handleInputChange,
    handleKeyPress,
  };
};

export default useNumericInput;