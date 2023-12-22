import React, { useEffect, useRef } from 'react';
import useNumericInput from '../hooks/numbersOnly';

const NumericInput = ({ initialValue = '', onBlur, isEditing }) => {
  const { value, handleInputChange, handleKeyPress } = useNumericInput(
    initialValue.toString()
  );

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    if (!isEditing) {
      handleInputChange({ target: { value: initialValue } });
    }
  }, [isEditing, handleInputChange, initialValue]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleInputChange}
      onBlur={(e) => {
        onBlur(e.target.value);
        handleInputChange({ target: { value: initialValue } });
      }}
      onKeyDown={handleKeyPress}
    />
  );
};

export default NumericInput;