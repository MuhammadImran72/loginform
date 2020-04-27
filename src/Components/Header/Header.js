import React from "react";
import "../../assets/css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <div className="col-8 m-auto col-md-10 offset-md-1  col-sm-10  offset-sm-1">
            <h2 className="text-center p-3"> User Registration System</h2>
            <div className="box">
              <Link to="registrationform" className="buttons">
                {" "}
                Registration{" "}
              </Link>
              <Link to="loginform" className="buttons" className="buttons">
                {" "}
                Login{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
