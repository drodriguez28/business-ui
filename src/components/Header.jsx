import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "../reuse/NavBar";

function Header() {
  return (
    <div>
      <div className="w-full flex justify-center py-4">
        <Link to="/">
          <img src="/images/tm-logo.svg" alt="TM Logo" className="h-35 w-auto" />
        </Link>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
