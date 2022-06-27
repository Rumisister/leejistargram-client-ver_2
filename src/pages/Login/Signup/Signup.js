import React, { useState } from "react";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    pw: "",
    email: "",
    phone_number: "",
  });

  const onChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const goToLogin = e => {
    e.preventDefault();
    console.log(userInfo);
    fetch("http://10.58.1.245:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.pw,
        name: userInfo.name,
        phone_number: userInfo.phone_number,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === "SUCCESS") {
          alert("축하");
          navigate("/Login-hayoung");
        } else {
          alert("수고링~");
        }
      });
  };

  return (
    <form onSubmit={goToLogin} className="signUp">
      <input
        type="text"
        className="signUpName"
        name="name"
        value={userInfo.name}
        placeholder="이름"
        onChange={onChange}
      />
      <input
        type="email"
        className="signUpId"
        name="email"
        value={userInfo.email}
        placeholder="이메일"
        onChange={onChange}
      />
      <input
        type="password"
        className="signUpPw"
        name="pw"
        value={userInfo.pw}
        placeholder="비밀번호"
        onChange={onChange}
      />
      <input
        type="tel"
        className="signUpPhone"
        name="phone_number"
        value={userInfo.phone_number}
        placeholder="핸드폰번호"
        onChange={onChange}
      />
      <button className="signupSubmit">제출하기</button>
    </form>
  );
};

export default Signup;
