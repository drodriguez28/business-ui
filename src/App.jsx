import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cleaning from "./components/Cleaning";
import Landscaping from "./components/Landscaping";
import ContactMe from "./components/ContactMe";
import AutoDetailing from "./components/AutoDetailing";
import Header from "./components/Header";
import Condo from "./components/Condo";
import FooterFlowbite from "./reuse/FooterFlowbite";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto-detailing" element={<AutoDetailing />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/condo" element={<Condo />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      <FooterFlowbite />
    </Router>
  );
}

export default App;
