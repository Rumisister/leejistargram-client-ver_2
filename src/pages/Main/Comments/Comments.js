import { useState, useEffect, React } from "react";
import Comment from "../Comment/Comment";
import "./Comments.scss";

const Comments = ({ commentList }) => {
  const [inputCom, setInputCom] = useState("");
  const [commentArr, setCommentArr] = useState([]);

  function addComment(posting_id) {
    // e.preventDefault();
    fetch("http://10.58.1.245:8000/postings/comment", {
      method: "POST",
      headers: {
        Autorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        posting_id,
        comment: commentArr,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setCommentArr(data.results);
      }, []);
    console.log(commentArr);

    // const newArr = [...commentArr];
    // if (inputCom.length > 0) {
    //   newArr.push({
    //     id: 1,
    //     userName: "love_Rumi",
    //     content: inputCom,
    //   });
    //   setCommentArr(newArr);
    //   setInputCom("");
    // }
  }

  // useEffect(() => {
  //   fetch("http://localhost:3000/data/common/commentData.json", {
  //     method: "GET", // GET method는 기본값이라서 생략이 가능합니다.
  //   }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
  //     .then(res => res.json())
  //     .then(data => {
  //       setCommentArr(data);
  //     });
  // }, []);

  return (
    <>
      {" "}
      <Comment arr={commentList} />
      <form className="comment_form">
        <input
          type="text"
          className="comment_input"
          placeholder="댓글 달기..."
          value={inputCom}
          onChange={posting_id => setInputCom(posting_id.target.value)}
        />
        <button type="button" className="comment_btn" onClick={addComment}>
          게시
        </button>
      </form>
    </>
  );
};

export default Comments;
