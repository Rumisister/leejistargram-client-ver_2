import React from 'react';
import './InputBox.scss';

const InputBox = ({
  goToSomething,
  handleInputValue,
  user,
  response,
  btnChange,
  disabled,
  bgColor,
}) => {
  const { inputs, btnContent } = response;

  return (
    <div className="form_layout">
      {inputs.map(({ name, type, placeholder }, index) => {
        return (
          <input
            key={index}
            className="input_box"
            placeholder={placeholder}
            type={type}
            value={user}
            onChange={handleInputValue}
            name={name}
            onKeyUp={btnChange}
          />
        );
      })}

      <button
        className={bgColor ? 'active' : 'unactive'}
        onClick={goToSomething}
        type="button"
        disabled={disabled}
      >
        {btnContent}
      </button>
    </div>
  );
};

export default InputBox;
