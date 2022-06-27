import React, { useState } from "react";
import "./AddFeed.scss";
import { useNavigate } from "react-router-dom";

const AddFeed = () => {
  const navigate = useNavigate();
  const [feed, setFeed] = useState({
    board: "",
    image_url: [],
  });

  const onChange = e => {
    const { name, value } = e.target;

    if (name === "board") {
      setFeed({
        ...feed,
        [name]: value,
      });
    } else {
      setFeed({
        ...feed,
        [name]: [value],
      });
    }
  };

  console.log(feed);

  const goToFeed = e => {
    const { board, image_url } = feed;

    e.preventDefault();
    fetch("http://10.58.1.245:8000/postings/posting", {
      method: "POST",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ board, image_url }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === "SUCCESS") {
          alert("게시 성!공!");
          navigate("/main-hayoung");
        } else {
          alert("실패");
        }
      });
  };

  return (
    <form onSubmit={goToFeed} className="addFeed">
      <input
        type="text"
        className="feedText"
        placeholder="게시글"
        onChange={onChange}
        name="board"
      />
      <input
        type="text"
        className="feedImg"
        placeholder="피드사진"
        name="image_url"
        onChange={onChange}
      />
      <button className="feedSubmit">게시하기</button>
    </form>
  );
};

export default AddFeed;
