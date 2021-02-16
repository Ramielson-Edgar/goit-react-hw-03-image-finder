import React from "react";
import s from "./Button.module.css";

const Button = ({ showMoreGallery }) => {
  return (
    <div className={s.container}>
      <button
        className={s.Button}
        type="button"
        onClick={() => showMoreGallery()}
      >
        Load more
      </button>
    </div>
  );
};

export default Button;
