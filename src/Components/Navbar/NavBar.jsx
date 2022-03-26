import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { elibdibadelfih } from "../../App";
import { useContext } from "react";

function NavBar() {
  const { valditon, setvalditon } = useContext(elibdibadelfih);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="trki7-eli-ta7to">
      <div className="fix">
        <div>
          <nav className="navbar">
            <div className="nav-container">
              <NavLink to="/" className="nav-logo">
                Blog-Blog
                <i className="fas fa-code"></i>
              </NavLink>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home
                  </NavLink>
                </li>

                {valditon === false ? (
                  <li className="nav-item">
                    <NavLink
                      to="/sign-in"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      sign-in
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink
                        to="/sign-in"
                        activeClassName="active"
                        className="nav-links"
                        onClick={() => {
                          setvalditon(false);
                        }}
                      >
                        log out
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/createpost"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        create post
                      </NavLink>
                    </li>
                  </>

                  /*createpost*/
                )}
                {valditon === true ? (
                  <li className="nav-item">
                    <NavLink
                      to="/HomeAcount"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      account
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
              </ul>
              <div className="nav-icon" onClick={handleClick}>
                <AiOutlineMenu />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
