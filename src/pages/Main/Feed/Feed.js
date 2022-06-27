import { useState, useEffect } from "react";
import Comments from "../Comments/Comments";

import "./Feed.scss";

const Feed = () => {
  const [feedList, setFeedList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [heart, setHeart] = useState("");

  const token = localStorage.getItem("token");

  const firstList = async () => {
    const response = await fetch("http://10.58.1.245:8000/postings/posting", {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    const dataList = data.results.reverse();
    return dataList;
  };

  const addLikeList = async first => {
    return await fetch("http://10.58.1.245:8000/postings/like", {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const newList = first.map(item =>
            item.posting_id === data.results[0].like_posting
              ? { ...item, likes: true }
              : { ...item, likes: false }
          );
          return newList;
        } else {
          return first;
        }
      });
  };

  const addCommentList = async () => {
    await fetch("http://10.58.1.245:8000/postings/comment", {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data.results.reverse());
      });
  };

  const getList = async () => {
    const first = await firstList();
    await addCommentList();
    const newList = await addLikeList(first);
    return newList;
  };

  useEffect(() => {
    getList().then(data => setFeedList(data));
  }, []);

  // console.log("받", feedList);

  /*
  useEffect(() => {
    fetch("http://10.58.1.245:8000/postings/posting", {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data.results.reverse());
        console.log("첫번째");
      });
  }, []);
  
  useEffect(() => {
    fetch("http://10.58.1.245:8000/postings/comment", {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data.results.reverse());
      });
  }, []);


  useEffect(() => {
    fetch("http://10.58.1.245:8000/postings/like", {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(
          feedList.map(item =>
            item.posting_id === data.results[0].like_posting
              ? { ...item, likes: true }
              : { ...item, likes: false }
          )
        );
      });
  }, []);
  */

  const onHeart = (e, posting_id) => {
    const target = feedList.find(feed => feed.posting_id === posting_id);
    console.log("lesdf", target);
    fetch("http://10.58.1.245:8000/postings/like", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        posting_id,
        postingLikes: heart,
        // postingLikes: feedList.find(
        //   feed => feed.posting_id === posting_id
        // )[0],
      }),
    })
      .then(res => res.json())
      .then(data => {
        setHeart(data.like_info[0].posting_likes);
        // setFeedList(data.results.reverse());
        // setLikes(data.like_info[0].user_like_existence);
        // setPostingLikes(data.like_info[0].posting_likes);
        const feedListCopy = [...feedList];
        const clickedItem = feedListCopy.find(
          feed => feed.posting_id === posting_id
        );
        clickedItem.likes = !data.like_info[0].user_like_existence;
        clickedItem.postingLikes = data.like_info[0].posting_likes;
        setFeedList([...clickedItem]);
      });
    // const feedListCopy = [...feedList];
    // const clickedItem = feedListCopy.find(
    //   feed => feed.posting_id === posting_id
    // );
    // clickedItem.likes = !clickedItem.likes;
    // clickedItem.postingLikes = postingLikes;
  };

  // const onChange = () => {
  //   setLikes();
  // };

  return (
    feedList &&
    feedList.map(data => {
      const {
        posting_id,
        user_name,
        image_url,
        likes,
        postingLikes,
        posting_board,
      } = data;
      return (
        <article key={posting_id} className="feeds">
          <div className="feedIdProfile">
            <img
              className="feedIdPhoto"
              alt="userPhoto"
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            />
            <span className="feedIdName">{user_name}</span>
            <img
              className="dot_icon"
              alt="dot"
              src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
            />
          </div>
          <img
            className="feedPhoto"
            alt="feed"
            src={image_url.length ? image_url[0]["posting_image_url"] : ["123"]}
          />

          <div className="feed_icons">
            <div className="left_feed_icons">
              <button
                className={likes ? "isLiked" : ""}
                // onChange={onChange}
                onClick={e => {
                  onHeart(e, posting_id);
                }}
              >
                <i
                  className={`${likes ? "fa-solid" : "fa-regular"} fa-heart`}
                ></i>
              </button>
              <button className="bubble_icon">
                <i className="fa-regular fa-comment"></i>
              </button>
              <button className="upload_icon">
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </button>
            </div>
            <div className="right_feed_icon">
              <button className="save_icon">
                <i className="fa-regular fa-bookmark"></i>
              </button>
            </div>
          </div>

          <div className="like_token">
            <img
              className="like_token_profile"
              alt="like token icon"
              src="https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
            <p>{postingLikes} 명이 좋아합니다</p>
          </div>
          <div className="feed_text">
            <span className="feed_user_id">{user_name}</span>
            <p>{posting_board}</p>
          </div>
          <Comments
            commentList={
              commentList.length &&
              commentList.find(obj => obj.posting_id === posting_id)
                .comments_list
            }
          />
        </article>
      );
    })
  );
};

export default Feed;
