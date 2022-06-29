import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox/InputBox';
import { RESPONSE_OBJECT } from './RESPONSE_OBJECT';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: '', pw: '' });
  // const [btnChange, setBtnChange] = useState(true);

  const [disabled, setDisabled] = useState(true);
  const [bgColor, setBgColor] = useState(false);

  // const idValue = user.id.includes('@');
  // const pwValue = user.pw.length >= 5;
  // const isRequiredFieldFill = idValue && pwValue;

  const goToMain = () => {
    // fetch('http://10.58.1.245:8000/users/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: user.id,
    //     password: user.pw,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.message === 'SUCCESS') {
    //       alert('로그인 성공입니다.');
    //       localStorage.setItem('token', result.access_token);
    //       navigate('/main');
    //     } else {
    //       alert('아이디 혹은 비밀번호가 틀렸습니다.');
    //        setUser({ id: '', pw: '' });
    //     }
    //   });
    navigate('/main');
  };

  const goToSignup = () => {
    navigate('/Signup');
  };

  const btnChange = (boolean, color) => {
    setDisabled(boolean);
    setBgColor(color);
  };

  const isValidation = () => {
    user.pw.length >= 8 && user.id.includes('@')
      ? btnChange(false, true)
      : btnChange(true, false);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="login_wap">
      <div className="login">
        <h1 className="login_logo">leejistagram</h1>
        <InputBox
          goToSomething={goToMain}
          handleInputValue={e => {
            handleInput(e);
          }}
          response={RESPONSE_OBJECT.initial}
          btnChange={isValidation}
          disabled={disabled}
          bgColor={bgColor}
        />
        <div className="forget_pw">
          <a className="forgetPwLink" href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
        <div className="signupBox">
          <button className="signupLink" type="button" onClick={goToSignup}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
