import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream
        </div>
        <div className="actions">
          <buttton className="ui primary button">Delete</buttton>
          <buttton className="ui button">Cancel</buttton>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
