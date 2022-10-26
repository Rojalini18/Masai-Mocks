import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navaigate = useNavigate();
  return (
    <div className="navT">
      <div
        onClick={() => {
          navaigate("/");
        }}
      >
        Home
      </div>
      <div
        onClick={() => {
          navaigate("/australian");
        }}
      >
        Puppy
      </div>
      <div
        onClick={() => {
          navaigate("/search");
        }}
      >
        Search
      </div>
    </div>
  );
};

export default Navbar;
