/* import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaCode } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <div
      className="max-w-[100%] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 "
      style={{ background: "#0E172B" }}
    >
      <div>
        <h1 className="w-full text-3xl font-bold text-yellow-400 tracking-wide font-josefin uppercase content-center cursor-none">
          adivi : A blog by Adarsh
        </h1>
        <p className="py-4 font-poppins font-bold text-red-500">
          Thanks for visiting my Blog. Checkout my Other projects. You are Doing
          Grt, Never Forget That . Thank-You.
        </p>
        <div className="flex justify-around md:w-[75%] my-6 ">
          <a
            href="https://linktr.ee/add_shy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinktree size={20} />
          </a>

          <a
            href="https://linkedin.com/in/adarsh-shuklaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/dash_7xz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a href="https://github.com/dash-09">
            <FaGithub size={20} />
          </a>
          <a
            href="https://leetcode.com/add_shy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode size={20} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-center mt-6 font-poppins">
        <div>
          <ul className="font-bold font-poppins">
            <li className="py-2 text-sm">
              <a href="#home">Home</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#Posts">Blogs</a>
            </li>
            <li className="py-2 text-sm">
              <a
                href="https://linktr.ee/add_shy"
                rel="noopener noreferrer"
                target="_blank"
              >
                My Profiles
              </a>
            </li>
            <li className="py-2 text-sm">
              <a
                href="https://ad9z.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My PortFolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
 */

import React from "react";
import { Link } from "react-router-dom";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <span className="author"> 💕💕 ADIVI 💕💕</span>
      <span className="copyright"> ©CopyRight 2023</span>
      <div className="footer-social">
        <Link to="https://ad9z.me/" target="_blank">
          <i className="fas fa-briefcase"></i>
        </Link>
        <Link to="https://linkedin.com/in/adarsh-shuklaa/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="https://github.com/dash-09" target="_blank">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="https://linktr.ee/add_shy" target="_blank">
          <SiLinktree />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
