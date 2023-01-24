import React from "react";
import "./footer.css";
import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portofolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/cristi.blaga.509"
          target="_blank"
          rel="noreferrer"
        >
          <RiFacebookCircleLine className="socials-icon" />
        </a>
        <a
          href="https://www.instagram.com/cristianblaga/"
          target="_blank"
          rel="noreferrer"
        >
          <RiInstagramLine className="socials-icon" />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Cristian Blaga 2023. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
