import React from "react";
import { Link } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <ul className="link-list">
      <li className="link-item">
        <div>
          <ul className="page-list">
            <li className="page-title">
              <h1>Hayoung</h1>
            </li>
            <li className="page-item">
              <Link to="/login-hayoung">Login</Link>
            </li>
            <li className="page-item">
              <Link to="/main-hayoung">Main</Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

export default App;
