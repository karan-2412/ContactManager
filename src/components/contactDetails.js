import React from "react";
import { Link } from "react-router-dom";
import UserImage from "../images/goku.png";

function contactDetail(props) {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={UserImage} alt="user" />
        </div>
        <div className="content">
          <div className="header">Karan</div>
          <div className="description">agk.karan@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default contactDetail;
