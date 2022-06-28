import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../../components/InputBox/InputBox';
import './Signup.scss';

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    pw: '',
    email: '',
    phone_number: '',
  });

  const inputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: '이름',
    },
    { name: 'email', type: 'email', placeholder: '이메일' },
    { name: 'pw', type: 'password', placeholder: '비밀번호' },
    { name: 'phone_number', type: 'tel', placeholder: '휴대폰번호' },
  ];

  const onChange = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
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
      {inputs.map((data, index) => {
        return (
          <InputBox
            key={index}
            index={index}
            dataName={data.name}
            type={data.type}
            value={userInfo}
            onChange={e => {
              onChange(e);
            }}
            inputs={inputs}
          />
        );
      })}

      <button className="signupSubmit">제출하기</button>
    </form>
  );
};

export default Signup;
