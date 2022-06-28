import React from 'react';
import './Input.scss';

const InputBox = ({ onChange, isValidation, inputs, index, dataName }) => {
  return (
    <input
      className="inputBox"
      placeholder={inputs[index].placeholder}
      type={inputs[index].type}
      onChange={onChange}
      onKeyUp={isValidation}
      name={dataName}
    />
  );
};

export default InputBox;
