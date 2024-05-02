import { NavLink } from "react-router-dom";
import hotelLogo from "../assets/hotelLogo.png";
export default function Navbar() {
  return (
    <div className="p-5 w-full flex items-center justify-around bg-white/80 shadow-md">
      <section className="w-44 flex flex-row items-center justify-between">
        <img src={hotelLogo} width="32" className="mr-5" />
        <h1 className="font-bold ">Luminos Hotel</h1>
      </section>
      <nav className="flex ml-3 md:mr-12 w-1/2 md:ml-0 md:w-56 justify-around ">
        <NavLink to="/" className="hover:font-bold ">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:font-bold ">
          About
        </NavLink>
        <NavLink to="/register" className="hover:font-bold ">
          <i className="fa-solid fa-user"></i>
        </NavLink>
        <NavLink to="/billing" className="hover:font-bold ">
          <i className="fa-solid fa-credit-card"></i>
        </NavLink>
      </nav>
    </div>
  );
}
