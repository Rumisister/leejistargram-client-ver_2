import React from "react";
import "./Nav.scss";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const goToAddFeed = () => {
    navigate("/addfeed-hayoung");
  };

  return (
    <header className="main-header">
      <nav className="gnb">
        <h1 className="gnb-logo">
          <a className="gnb-logo-link" href="#">
            <img
              alt="Westagram"
              src="/images/common/logo.png"
              className="gnb-logo-img"
            />
            <span className="gnb-logo-title">westagram</span>
          </a>
        </h1>

        <div className="gnb-search-wrapper">
          <i className="fa-solid fa-magnifying-glass" aria-hidden></i>
          <input className="gnb-search-input" type="text" placeholder="검색" />
        </div>

        <div className="gnb-button-group">
          <button className="gnb-button button-add" onClick={goToAddFeed}>
            <i class="fa-regular fa-square-plus"></i>
          </button>
          <a
            className="gnb-button button-explore"
            href="#"
            aria-label="Explore some feeds"
          ></a>
          <button
            className="gnb-button button-activities"
            type="button"
            aria-label="Open your activities modal"
          ></button>
          <div className="gnb-profile-setting">
            <button
              className="gnb-button button-profile"
              type="button"
              aria-label="Open profile settings modal"
            ></button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
