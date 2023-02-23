import React, { useEffect, useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
          <img
            className="nav_logo"
            src="./../images/netflix.png"
            alt="Netflix_logo"
          />
          <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix_avatar"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
