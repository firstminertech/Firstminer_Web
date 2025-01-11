import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <style>
        {
          `
    .footer-top{
    display:none
    }
    `
        }
      </style>
      <div className=" text-primary" role="status">
        <img src="assets/img/flogo.png" className="loader-image" width={100}
        />
      </div>
    </div>
  );
};

export default Loader;
