import "./MainRight.scss";
import Story from "./Story/Story";
import RecommendId from "./RecommendId/RecommendId";

const mainRight = () => {
  return (
    <div className="main_right">
      <div className="user_id">
        <img
          className="user_profile"
          alt="user profile"
          src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
        />
        <span className="user_id_name">
          <p>ha0__</p>
          <p>wecode | 이하영</p>
        </span>
      </div>
      <div className="story_box">
        <span className="box_text">
          <p>스토리</p>
          <p>모두 보기</p>
        </span>
        <Story />
      </div>
      <div className="recommend_box">
        <span className="box_text">
          <p>회원님을 위한 추천</p>
          <p>모두 보기</p>
        </span>
        <RecommendId />
      </div>
      <p className="info">
        Instagram 정보 . 지원 . 홍보 센터 . API . <br />
        채용 정보 . 개인정보처리방침 . 약관 . <br />
        디렉터리 . 프로필 . 해시태그 . 언어
      </p>
      <p className="info">©2022 INSTAGRAM</p>
    </div>
  );
};

export default mainRight;
