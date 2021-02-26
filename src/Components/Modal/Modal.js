import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onHandlekeydown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onHandlekeydown);
  }

  onHandlekeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  onHandleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { option } = this.props;
    const { id, tags, largeImageURL } = option;

    return createPortal(
      <div className={s.Overlay} onClick={this.onHandleOverlayClick}>
        <div className={s.Modal}>
          <li className={s.list} key={id}>
            <img src={largeImageURL} alt={tags} width="1000" height="1000" />
          </li>
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {};

export default Modal;
