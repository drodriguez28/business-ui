import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export const NavBar = () => {
  return (
    <Navbar fluid rounded className="!bg-amber-300 py-6 mb-5">
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" className="mx-4 !text-black">
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/auto-detailing" className="mx-4 !text-black">
          Auto Detailing
        </NavbarLink>
        <NavbarLink as={Link} to="/cleaning" className="mx-4 !text-black">
          Cleaning
        </NavbarLink>
        <NavbarLink as={Link} to="/landscaping" className="mx-4 !text-black">
          Landscaping
        </NavbarLink>
        <NavbarLink as={Link} to="/condo" className="mx-4 !text-black">
          Condo
        </NavbarLink>
        <NavbarLink as={Link} to="/contact-me" className="mx-4 !text-black">
          Contact Me
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
