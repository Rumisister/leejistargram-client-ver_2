import React from "react";
import "./Story.scss";

const Story = () => {
  return (
    <>
      <div className="story_id">
        <img
          className="story_id_profile"
          alt="user profile"
          src="https://images.unsplash.com/photo-1649035571136-d2fe2a15b341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <span className="story_id_name">
          <p>bts__jk</p>
          <p>16분전</p>
        </span>
      </div>
      <div className="story_id">
        <img
          className="story_id_profile"
          alt="user profile"
          src="https://images.unsplash.com/photo-1649026166267-5f474e9280e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        />
        <span className="story_id_name">
          <p>hayoung_haha</p>
          <p>2시간 전</p>
        </span>
      </div>
      <div className="story_id">
        <img
          className="story_id_profile"
          alt="user profile"
          src="https://images.unsplash.com/photo-1649009060896-119c6ef99a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
        <span className="story_id_name">
          <p>haha__00</p>
          <p>5시간 전</p>
        </span>
      </div>
    </>
  );
};

export default Story;
