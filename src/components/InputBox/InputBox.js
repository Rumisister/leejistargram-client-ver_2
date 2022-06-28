import React from 'react';
import './InputBox.scss';

const InputBox = ({
  isValidation,
  btnChange,
  goToSomething,
  onChange,
  user,
  response,
  isRequiredFieldFill,
}) => {
  const { inputs, btnContent } = response;

  return (
    <div className="login_input">
      {inputs.map(({ name, type, placeholder }, index) => {
        return (
          <input
            key={index}
            className="input_box"
            placeholder={placeholder}
            type={type}
            value={user}
            onChange={onChange}
            name={name}
          />
        );
      })}

      <button
        className={isRequiredFieldFill ? 'active' : 'unactive'}
        onClick={goToSomething}
        type="button"
      >
        {btnContent}
      </button>
    </div>
  );
};

export default InputBox;
