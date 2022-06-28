export const RESPONSE_OBJECT = {
  initial: {
    inputs: [
      {
        name: 'id',
        type: 'text',
        placeholder: '전화번호, 사용자 이름 또는 이메일',
      },
      { name: 'pw', type: 'password', placeholder: '비밀번호' },
    ],
    btnContent: '로그인',
  },
  signup: {
    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: '이름',
      },
      { name: 'email', type: 'email', placeholder: '이메일' },
      { name: 'pw', type: 'password', placeholder: '비밀번호' },
      { name: 'phone_number', type: 'tel', placeholder: '휴대폰번호' },
    ],
    btnContent: '회원가입',
  },
};
