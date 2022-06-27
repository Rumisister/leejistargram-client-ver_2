import React from "react";
import "./RecommendId.scss";

const RecommendId = () => {
  return (
    <>
      <div className="recommend_id">
        <img
          className="recommend_id_profile"
          alt="user profile"
          src="https://images.unsplash.com/photo-1649035571136-d2fe2a15b341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <span className="recommend_id_name">
          <p>adgd_Dggs</p>
          <p>_s2e1f2님 외 2명이...</p>
        </span>
        <span className="follower_text">팔로워</span>
      </div>
      <div className="recommend_id">
        <img
          className="recommend_id_profile"
          alt="user profile"
          src="https://images.unsplash.com/photo-1649026166267-5f474e9280e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        />
        <span className="recommend_id_name">
          <p>jjjjjjjk</p>
          <p>thv23님 외 1223명...</p>
        </span>
        <div className="follower">
          <span className="follower_text">팔로워</span>
        </div>
      </div>
      <div className="recommend_id">
        <img
          className="recommend_id_profile"
          alt="user profile"
          src="https://images.unsplash.com/photo-1649009060896-119c6ef99a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
        <span className="recommend_id_name">
          <p>ha___00000</p>
          <p>gdsgd12405님 외1...</p>
        </span>
        <span className="follower_text">팔로워</span>
      </div>
    </>
  );
};

export default RecommendId;
