import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import user_profile from "../../assets/user_profile.jpg";

const Navbar = ({ sidebar, setSidebar }) => {
  const handleMenuClick = () => {
    // console.log("Current sidebar state:", sidebar);
    setSidebar((prev) => !prev);
    // console.log("Sidebar state after setSidebar:", !sidebar);
    // console.log("clicked");
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={handleMenuClick}
          src={menu}
          alt="Menu"
        />
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search} alt="Search" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload} alt="Upload" />
        <img src={more} alt="More" />
        <img src={notification} alt="Notification" />
        <img src={user_profile} alt="User Profile" />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  setSidebar: PropTypes.func.isRequired,
};

export default Navbar;
