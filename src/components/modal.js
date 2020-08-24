import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Link to="/" className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </Link>,
    document.querySelector("#modal")
  );
};

export default Modal;
