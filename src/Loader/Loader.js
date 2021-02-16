import React from "react";

const Loader = () => {
  return (
    <div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

Loader.propTypes = {};

export default Loader;
