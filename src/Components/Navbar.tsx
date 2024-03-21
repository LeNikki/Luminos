import React from "react";
import { NavLink } from "react-router-dom";
import hotelLogo from "../assets/hotelLogo.png";
export default function Navbar() {
  return (
    <div className="p-5 w-full flex items-center justify-between">
      <section className="w-44 flex flex-row items-center justify-between">
        <img src={hotelLogo} width="32" className="mr-5" />
        <h1 className="font-bold text-yellow-600">Luminos Hotel</h1>
      </section>
      <nav className="flex w-1/4 justify-between ">
        <NavLink to="/" className="hover:font-bold text-yellow-600">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:font-bold text-yellow-600">
          About
        </NavLink>
      </nav>
    </div>
  );
}
