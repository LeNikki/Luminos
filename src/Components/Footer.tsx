import React from "react";
import hotelLogo from "../assets/hotelLogo.png";
export default function Footer() {
  return (
    <div className="w-full bg-yellow-600 h-52 flex flex-row justify-between items-center">
      <div className=" flex justify-center p-10">
        <section className="flex flex-row w-52 justify-around">
          <img src={hotelLogo} alt="hotelLogo" width="32" />
          <h1 className="font-bold text-lg ">Luminos Hotel</h1>
        </section>
      </div>
      <ul>
        <li className="hover:text-white hover:font-bold">Careers</li>
        <li className="hover:text-white hover:font-bold">Careers</li>
        <li className="hover:text-white hover:font-bold">Careers</li>
        <li className="hover:text-white hover:font-bold">Careers</li>
      </ul>
      <ul>
        <li className="hover:text-white hover:font-bold">Careers</li>
        <li className="hover:text-white hover:font-bold">Careers</li>
        <li className="hover:text-white hover:font-bold">Careers</li>
        <li className="hover:text-white hover:font-bold">Careers</li>
      </ul>
      <div className="flex flex-row justify-between w-1/4 p-20">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-threads"></i>
      </div>
    </div>
  );
}
