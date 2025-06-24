import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "../reuse/NavBar";

function Header() {
  return (
    <div>
      <div className="w-full flex justify-center py-4">
        <Link to="/">
          <img src="/images/trustmepic.png" alt="Trust Me" className="h-35" />
        </Link>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
