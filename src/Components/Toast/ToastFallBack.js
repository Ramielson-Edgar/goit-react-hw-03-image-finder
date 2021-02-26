import React from "react";
import { ToastContainer } from "react-toastify";

const ToastFallBack = (props) => (
  <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export default ToastFallBack;
