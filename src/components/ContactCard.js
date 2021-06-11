import React from "react";
import { Link } from "react-router-dom";
import UserImage from "../images/user.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={UserImage} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`}>
          <div className="header" key={id}>
            {name}
          </div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}

export default ContactCard;
