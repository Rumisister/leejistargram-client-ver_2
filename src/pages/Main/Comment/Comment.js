import React from "react";
import "./comment.scss";

const Comment = ({ arr }) => {
  return (
    <ul className="comments">
      {arr &&
        arr.map(e => {
          return (
            <li className="comment" key={e.comment_id}>
              <h1 className="commentUserId">{e.user_email}</h1>
              <h1 className="userComment">{e.posting_comment}</h1>
              {/* <button className="deleteBtn">삭제{e.isLiked}</button> */}
              {/* <button className="likeBtn">
                <i className="fa-regular fa-heart"></i>
                {e.isLiked}
              </button> */}
            </li>
          );
        })}
    </ul>
  );
};

export default Comment;
