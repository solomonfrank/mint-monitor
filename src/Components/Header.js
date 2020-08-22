import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div class="logo">
          <h3 className="logo-title">
            {" "}
            <Link to="/">TransMonitor</Link>
          </h3>
        </div>
        <div class="navbar">
          <ul className="navbar-left">
            <li class="search-box">
              <Link>
                <div className="table-meta-search">
                  <div className="search-wrap-header">
                    <div className="search-icon">
                      <i class="fa fa-search"></i>
                    </div>
                    <input
                      type="text"
                      className="search-input"
                      placeholder="search"
                    />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <ul class="navbar-right">
            <li>
              <Link to="#">Support</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <span className="notif">3</span>

              <i class="fa fa-bell-o" aria-hidden="true"></i>
            </li>
            <li>
              <Link to="#" className="user">
                <div className="user-detail">
                  <p className="user-tag">hello</p>
                  <p className="user-name">John Doe</p>
                </div>
                <div className="user-img">
                  <img src="../../Asset/Photo.png" class="user-icon" />
                </div>
              </Link>
            </li>
          </ul>
        </div>{" "}
      </div>
    </header>
  );
};
export default Header;
