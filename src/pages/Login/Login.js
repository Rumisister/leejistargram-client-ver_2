import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox/InputBox';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: '', pw: '' });
  const [btnChange, setBtnChange] = useState(true);

  const inputs = [
    {
      name: 'id',
      type: 'text',
      placeholder: '전화번호, 사용자 이름 또는 이메일',
    },
    { name: 'pw', type: 'password', placeholder: '비밀번호' },
  ];

  const goToMain = e => {
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

  const isValidation = () => {
    const idValue = user.id.includes('@');
    const pwValue = user.pw.length >= 5;

    idValue && pwValue ? setBtnChange(false) : setBtnChange(true);
  };

  const onChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <h1 className="login_logo">leejistagram</h1>
      <div className="login_input">
        {inputs.map((data, index) => {
          return (
            <InputBox
              key={index}
              index={index}
              dataName={data.name}
              type={data.type}
              value={user}
              onChange={e => {
                onChange(e);
              }}
              isValidation={isValidation}
              inputs={inputs}
            />
          );
        })}
        <button
          className={!btnChange ? 'active' : 'unactive'}
          onSubmit={goToMain}
          disabled={btnChange}
        >
          로그인
        </button>
      </div>
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
  );
};

export default Login;
