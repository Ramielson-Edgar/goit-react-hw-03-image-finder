import React from "react";
import s from "./Button.module.css";

const Button = ({ loadMore }) => {
  return (
    <div className={s.container}>
      <button className={s.Button} type="button" onClick={() => loadMore()}>
        Load more
      </button>
    </div>
  );
};

export default Button;
