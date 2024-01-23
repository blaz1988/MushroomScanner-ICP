import React, { useState, useEffect } from "react";
import { slide as Menu } from 'react-burger-menu';
import { useNavigate } from "react-router-dom";
import "./nav.css"

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const about = async () => {
    navigate("/about");
  };

  const contact = async () => {
    navigate("/contact");
  };

  const donate = async () => {
    navigate("/donate");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); 
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
         <Menu right>
               <a id="home" className="menu-item" href="/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai">Home</a><br></br>
               <a id="about" className="menu-item" onClick={about}>About Us</a><br></br>
               <a id="contact" className="menu-item" onClick={contact}>Contact Us</a><br></br>
               <a id="contact" className="menu-item" onClick={donate}>Donate</a><br></br>
          </Menu>
        </>
      ) : (
        <>
          <nav>
            <div className="wrappera">
              <div className="logo"><a href="#">Mushroom Scanner</a></div>
              <input type="radio" name="slider" id="menu-btn"></input>
              <input type="radio" name="slider" id="close-btn"></input>
              <ul className="nav-links">
                <label for="close-btn" class="btn close-btn"><i className="fas fa-times"></i></label>
                <li><a href="/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai">Home</a></li>
                <li><a onClick={about}>About Us</a></li>
                <li><a onClick={contact}>Contact Us</a></li>
                <li><a onClick={donate}>Donate</a></li>
              </ul>
              <label htmlFor="menu-btn" class="btn menu-btn"><i className="fas fa-bars"></i></label>
            </div>
          </nav>

        </>
      )}
    </div>
  );
}
