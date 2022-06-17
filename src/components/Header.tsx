import React from "react";
import "@styles/components/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="content-header">
        <div className="logo">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="items-header">
          <Link to={"/"} className="Link">
            <h3>ABOUT</h3>
          </Link>
          <Link to={"/"} className="Link">
            <h3>EPISODES</h3>
          </Link>
          <Link to={"/"} className="Link">
            <h3>CHARACTERS</h3>
          </Link>
          <Link to={"/"} className="Link">
            <h3>NEWS</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
