import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const refContainer = useRef(null);
  const refLinks = useRef(null);

  useEffect(() => {
    const linkHeight = refLinks.current.getBoundingClientRect().height;
    if (show) {
      refContainer.current.style.height = `${linkHeight}px`;
    } else {
      refContainer.current.style.height = "0px";
    }
  }, [show]);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={() => setShow(!show)}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={refContainer}>
            <ul className="links" ref={refLinks}>
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((link) => {
              const { url, id, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
