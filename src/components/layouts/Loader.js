import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center" id="loader">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
