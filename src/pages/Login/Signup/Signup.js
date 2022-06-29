import React, { useState, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../../components/InputBox/InputBox';
import { RESPONSE_OBJECT } from '../RESPONSE_OBJECT';
import './Signup.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    pw: '',
    email: '',
    phone_number: '',
  });
  const [signupBtnColor, setSignupBtnColor] = useState(false);
  const [signupDisabled, setSignupDisabled] = useState(true);

  const onChange = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleBtnChange = (boolean, color) => {
    setSignupDisabled(boolean);
    setSignupBtnColor(color);
  };

  const isRequiredFieldFill = () => {
    userInfo.pw.length >= 8 &&
    userInfo.email.includes('@') &&
    userInfo.name.length > 1 &&
    userInfo.phone_number.length >= 11
      ? handleBtnChange(false, true)
      : handleBtnChange(true, false);
  };

  const goToLogin = e => {
    e.preventDefault();
    // fetch('http://10.58.1.245:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: userInfo.email,
    //     password: userInfo.pw,
    //     name: userInfo.name,
    //     phone_number: userInfo.phone_number,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.message === 'SUCCESS') {
    //       alert('축하');
    //       navigate('/Login');
    //     } else {
    //       alert('수고링~');
    //     }
    //   });
    navigate('/Login');
  };

  return (
    <form onSubmit={goToLogin} className="signUp">
      <h1 className="login_logo">leejistagram</h1>
      <InputBox
        goToSomething={goToLogin}
        handleInputValue={e => {
          onChange(e);
        }}
        response={RESPONSE_OBJECT.signup}
        btnChange={isRequiredFieldFill}
        disabled={signupDisabled}
        bgColor={signupBtnColor}
      />
    </form>
  );
};

export default Signup;
