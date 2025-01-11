import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className=" text-primary" role="status">
        <img src="assets/img/firstminerlogo.png" className="loader-image" width={150}
        />
      </div>
    </div>
  );
};

export default Loader;
