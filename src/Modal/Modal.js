import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
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
    console.log(e.target);
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.onHandleOverlayClick}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {};

export default Modal;
